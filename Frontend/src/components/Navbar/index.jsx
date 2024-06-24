import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { assets } from "../../assets/assets";
import './Navbar.css'

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu className="navbar">
                    <NavLink to="/homepage" activeStyle><img src={assets.logo_ungu} alt="" className="logo" /></NavLink>
                    <div className="menu-fitur"> 
                        <NavLink to="/workout" activeStyle><button className="fitur-utama">Workout</button></NavLink>
                        <NavLink to="/about" activeStyle><button className="fitur-utama">About</button></NavLink>
                        <NavLink to="/download" activeStyle><button className="fitur-utama">Download</button></NavLink>
                    </div>
                    <div className="menu-akun">
                        <NavLink to="/login" activeStyle>Login</NavLink>
                        <NavLink to="/sign-up" activeStyle>Sign Up</NavLink>
                    </div>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
