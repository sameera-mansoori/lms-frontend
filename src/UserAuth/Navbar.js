import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="bg-white shadow dark:bg-gray-800">
			<div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
				<NavLink
					exact
					to="/SignUp"
					activeclassname="border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-gray-800 dark:text-gray-200"
					className="mx-1.5 sm:mx-6"
				>
					Sign-up
				</NavLink>
				<span>&nbsp; &nbsp;</span>
				<NavLink
					exact
					to="/"
					activeclassname="border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-gray-800 dark:text-gray-200"
					className="mx-1.5 sm:mx-6"
				>
					Login
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
