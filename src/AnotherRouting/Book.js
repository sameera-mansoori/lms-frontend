import React from "react";
import TableNav from "./TableNav";
import axios from "axios";
import { useState,useEffect } from "react";

function Book(props) {
	const [inputdata,setInputdata]=useState({
		title:"",
		author:"",
		publisher:"",
		number_of_books:""
	 })
 
	 const handleSubmit=(e)=>{
		 e.preventDefault();
		 axios.post('http://127.0.0.1:8000/Add_Books',inputdata)
		 .then(res => {
			 alert("data posted successfully!!")
			 
 
		 
		 })
   }
 
   const [data, setData] = useState([]);
 
   useEffect(() => {
	   axios.get('http://127.0.0.1:8000/Get_Books')
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
							Book Table
						</h1>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="bg-gray-200">
										<th className="px-4 py-2">Book ID</th>
										<th className="px-4 py-2">Book Name</th>
										<th className="px-4 py-2">Book Author</th>
										<th className="px-4 py-2">Publisher</th>
										<th className="px-4 py-2">Count of Books</th>
									</tr>
								</thead>
								<tbody>
								{data.map((item, i) => (
									<tr  key={i} className="text-center">
										<td className="border px-4 py-2">{i+1}</td>
										<td className="border px-4 py-2">{item.title}</td>
										<td className="border px-4 py-2">{item.author}</td>
										<td className="border px-4 py-2">{item.publisher}</td>
										<td className="border px-4 py-2">{item.number_of_books}</td>
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
							Book detail
						</h1>

						<form className="space-y-4"
						onSubmit={handleSubmit}>
							<div>
								<label className="block text-gray-700">Enter Book Name :</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="text"
									placeholder="Enter book name"
									name="title"
									onChange={(e)=>setInputdata({...inputdata,title:e.target.value})}
								/>
							</div>
							<div>
								<label className="block text-gray-700">
									Enter Book Author :
								</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="text"
									placeholder="Enter book author"
									name="author"
									onChange={(e)=>setInputdata({...inputdata,author:e.target.value})}

								/>
							</div>
							<div>
								<label className="block text-gray-700">Enter Publisher :</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="text"
									placeholder="Enter publisher"
									name="publisher"
									onChange={(e)=>setInputdata({...inputdata,publisher:e.target.value})}
								/>
							</div>
							<div>
								<label className="block text-gray-700">
									Enter Count of Books :
								</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="number"
									placeholder="Enter count of books"
									name="number_of_books"
									onChange={(e)=>setInputdata({...inputdata,number_of_books:e.target.value})}
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

export default Book;
