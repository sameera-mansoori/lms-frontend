import React from "react";
import TableNav from "./TableNav";
import axios from "axios";
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";


function Issue(props) {
	const {id } = useParams();
	console.log(id)
		const [inputdata,setInputdata]=useState({
			book_id:"",
			student_id:id?id:'',
			date:"",
			time:""
		 })


    useEffect(() => {
        console.log("inputdata:", inputdata);
    }, [inputdata]);

	 
		 const handleSubmit=(e)=>{
			 e.preventDefault();
			 axios.post('http://127.0.0.1:8000/issue',inputdata)
			 .then(res => {
				 alert("issue posted successfully!!")
		
			 
			 })
	   }
	 
	   const [data, setData] = useState([]);
	 
	   useEffect(() => {
		   axios.get('http://127.0.0.1:8000/Get_Issue')
			   .then(res =>setData(res.data))
	 
			   .catch(err => console.log(err));
	   }, []);
	return (
		<>
			<TableNav />
			<div className="flex">
				<div className="flex-1 bg-gradient-to-r from-purple-400 to-indigo-600 min-h-screen items-center">
					<div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg">
						<h1 className="text-3xl font-bold mb-6 text-center text-green-800">
							Issue Table
						</h1>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="bg-gray-200">
										<th className="px-4 py-2">Issue ID</th>
										<th className="px-4 py-2">Book ID</th>
										<th className="px-4 py-2">Student ID</th>
										<th className="px-4 py-2">Issue Date</th>
										<th className="px-4 py-2">Issue Time</th>
										<th className="px-4 py-2">Operation</th>
									</tr>
								</thead>
								<tbody>
								{data.map((item, i) => (
									<tr key={i} className="text-center">
										<td className="border px-4 py-2 ">{item.id}</td>
										<td className="border px-4 py-2 ">{item.book_id}</td>
										<td className="border px-4 py-2 ">{item.student_id}</td>
										<td className="border px-4 py-2 ">{item.date}</td>
										<td className="border px-4 py-2 ">{item.time}</td>
										<td className="border px-4 py-2">
											<button className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded hover:from-pink-600 hover:to-red-600 transition duration-300">
												RESUBMIT
											</button>
										</td>
									</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className="flex-1 bg-gradient-to-r from-purple-400 to-indigo-600 min-h-screen items-center">
					<div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
						<h1 className="text-3xl font-bold mb-6 text-center text-green-800">
							Issue detail
						</h1>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="block text-gray-700">Select Book ID :</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="number"
									placeholder="Enter book id"
									name="book_id"
									onChange={(e)=>setInputdata({...inputdata,book_id:e.target.value})}
								/>
							</div>
							<div>
								<label className="block text-gray-700">
									Enter Student ID :
								</label>
								<input
								    className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="number"
									placeholder="Enter student id"
									name="student_id"
									onChange={(e)=>setInputdata((prev)=>{
										if (!id){
										return	{...prev,student_id:e.target.value}
										}
										return	{...prev,student_id:id}
									})}
									value={id?id:inputdata.student_id}
									
								/>
							</div>
							<div>
								<label className="block text-gray-700">
									Enter Issue Date :
								</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="date"
									placeholder="Enter date"
									name="date"
									onChange={(e)=>setInputdata({...inputdata,date:e.target.value})}
								/>
							</div>
							<div>
								<label className="block text-gray-700">
									Enter Issue Time :
								</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="time"
									name="time"
									placeholder="Enter time"
									onChange={(e)=>setInputdata({...inputdata,time:e.target.value})}
								/>
							</div>
							<div className="">
								<button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md hover:from-pink-600 hover:to-red-600 transition duration-300">
									SUBMIT
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Issue;


