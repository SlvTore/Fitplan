const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Account = require('../models/Account');
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    console.log("Request body:", req.body);

    // Hashing password dengan bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Hashed password:", hashedPassword);

    // Buat akun baru dengan password yang sudah di-hash
    const newAccount = await Account.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json(newAccount);
  } catch (error) {
    console.error("Error in register:", error.message, error.stack);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: error.errors.map(e => e.message) });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Fungsi untuk login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const account = await Account.findOne({ where: { email } });

    if (!account) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Verifikasi password
    const validPassword = await bcrypt.compare(password, account.password);

    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Buat token
    const token = jwt.sign(
      { id: account.id, email: account.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ account, token });
  } catch (error) {
    console.error("Error in login:", error.message, error.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fungsi untuk mendapatkan semua akun
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.findAll();
    res.json(accounts);
  } catch (error) {
    console.error("Error in getAccounts:", error.message, error.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fungsi untuk mendapatkan akun berdasarkan ID
exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findByPk(req.params.id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.json(account);
  } catch (error) {
    console.error("Error in getAccountById:", error.message, error.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fungsi untuk memperbarui akun
exports.updateAccount = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const account = await Account.findByPk(req.params.id);

    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    if (username) account.username = username;
    if (email) account.email = email;
    if (password) account.password = await bcrypt.hash(password, 10);

    await account.save();
    res.json(account);
  } catch (error) {
    console.error("Error in updateAccount:", error.message, error.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Fungsi untuk menghapus akun
exports.deleteAccount = async (req, res) => {
  try {
    const account = await Account.findByPk(req.params.id);

    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    await account.destroy();
    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error("Error in deleteAccount:", error.message, error.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
};

