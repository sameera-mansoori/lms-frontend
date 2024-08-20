import React from "react";
import { NavLink } from "react-router-dom";

function tableNav(props) {
	return (
		<>
			<div>
				{/* <h1>Navbar of Table</h1> */}
				<nav className="bg-white shadow dark:bg-gray-800">
					<div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
						<NavLink
							to="/Student"
							activeclassname="border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-gray-800 dark:text-gray-200"
							className="mx-1.5 sm:mx-6"
						>
							Student
						</NavLink>
						<span>&nbsp; &nbsp;</span>
						<NavLink
							to="/Book"
							activeclassname="border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-gray-800 dark:text-gray-200"
							className="mx-1.5 sm:mx-6"
						>
							Book
						</NavLink>
						<span>&nbsp;</span>
						<NavLink
							to="/Issue"
							activeclassname="border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-gray-800 dark:text-gray-200"
							className="mx-1.5 sm:mx-6"
						>
							Issue
						</NavLink>
						<span>&nbsp; &nbsp;</span>
						<NavLink
							to="/Record"
							activeclassname="border-b-2 border-blue-500 mx-1.5 sm:mx-6 text-gray-800 dark:text-gray-200"
							className="mx-1.5 sm:mx-6"
						>
							Record
						</NavLink>
					</div>
				</nav>
			</div>
		</>
	);
}

export default tableNav;
