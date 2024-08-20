import React from "react";
import TableNav from "./TableNav";
import axios from "axios";
import { useState,useEffect } from "react";

function Record(props) {



 
   const [data, setData] = useState([]);
 
   useEffect(() => {
	   axios.get('http://127.0.0.1:8000/Return_Record')
		   .then(res =>setData(res.data))
 
		   .catch(err => console.log(err));
   }, []);
   const handleUpdate = (id) => {
	const newData = {
		};
	axios.get(`http://127.0.0.1:8000/Return_Record/${id}`, newData)
		.then(res => {
			console.log("Record updated successfully");
		})
		.catch(err => {
			console.error("Error updating record: ", err);
		});
};
 
	return (
		<>
			<TableNav />
			<div className="flex justify-center bg-gradient-to-r from-purple-400 to-indigo-600 ">
				<div className="min-h-screen w-3/4 ">
					<div className=" px-4 py-8 bg-white rounded-lg shadow-lg ">
						<h1 className="text-3xl font-bold mb-6 text-center text-green-800">
							RECORD
						</h1>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="bg-gray-200">
										<th className="px-4 py-2">ID</th>
										<th className="px-4 py-2">Book ID</th>
										<th className="px-4 py-2">Student ID</th>
										<th className="px-4 py-2">Date</th>
										<th className="px-4 py-2">Time</th>
									</tr>
								</thead>
								<tbody>
								{data.map((item, i) => (
									<tr className="text-center">
										<td className="border px-4 py-2">01</td>
										<td className="border px-4 py-2">02</td>
										<td className="border px-4 py-2">03</td>
										<td className="border px-4 py-2">15-March-2024</td>
										<td className="border px-4 py-2">6:35 PM</td>
									</tr>
										   ))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Record;
