import React from "react";
import "./input.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./UserAuth/SignUp";
import Login from "./UserAuth/Login";
import Table from "./AnotherRouting/TableNav";
import Record from "./AnotherRouting/Record";
import Student from "./AnotherRouting/Student";
import Book from "./AnotherRouting/Book";
import Issue from "./AnotherRouting/Issue";

const App = () => {
	return (
		<>
			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/SignUp" element={<SignUp />} />
						<Route path="/tableNav" element={<Table />} />
						<Route path="/Student" element={<Student />} />
						<Route path="/Book" element={<Book />} />
						<Route path="/Issue" element={<Issue />} />
						<Route path="/Issue/:id" element={<Issue />} />
						<Route path="/Record" element={<Record />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
};

export default App;
