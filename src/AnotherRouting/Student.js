import React from "react";
import TableNav from "./TableNav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect} from "react";


function Student(props) {



	const [inputdata,setInputdata]=useState({
       name:"",
	   address:"",
	   age:"",
	   phone:""
    })

	const handleSubmit=(e)=>{
		e.preventDefault();
		axios.post('http://127.0.0.1:8000/Add_Student',inputdata)
		.then(res => {
			alert("data posted successfully!!")
			

		
		})
  }

  const [data, setData] = useState([]);

  useEffect(() => {
	  axios.get('http://127.0.0.1:8000/Get_Student')
		  .then(res =>setData(res.data))

		  .catch(err => console.log(err));
  }, []);



// const API_URL = 'http://127.0.0.1:8000/Get_Books';


// axios.get(API_URL)
//   .then(response => {
//     console.log('Data from server is showing:', response.data);
   
//   })
//   .catch(error => {

//     console.error('Error fetching data:', error);
//   });



	return (
		<>
			<TableNav />
			<div className="flex">
				<div className="flex-1 bg-gradient-to-r from-purple-400 to-indigo-600 min-h-screen items-center">
					<div className="w-full px-4 py-8 bg-white rounded-lg shadow-lg">
						<h1 className="text-3xl font-bold mb-6 text-center text-green-800">
							Student Table
						</h1>
						<div className="overflow-x-auto">
							<table className="table-auto w-full">
								<thead>
									<tr className="bg-gray-200">
										<th className="px-4 py-2">Student ID</th>
										<th className="px-4 py-2">Student Name</th>
										<th className="px-4 py-2">Student Address</th>
										<th className="px-4 py-2">Student Age</th>
										<th className="px-4 py-2">Contact Num</th>
										<th className="px-4 py-2">Issued</th>
									</tr>
								</thead>
								<tbody>
							    	{data.map((item, i) => (
									<tr key={i} className="text-center">
										<td className="border px-4 py-2">{i+1}</td>
										<td className="border px-4 py-2">{item.name}</td>
										<td className="border px-4 py-2">{item.address}</td>
										<td className="border px-4 py-2">{item.age}</td>
										<td className="border px-4 py-2">{item.phone}</td>
										<td className="border px-4 py-2">
											<Link to={`/Issue/${item.id}`}>
												<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
													Issue
												</button>
											</Link>
										</td>
									</tr>
								   ))}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className="flex-1 bg-gradient-to-r from-purple-400 to-indigo-600 min-h-screen  items-center">
					<div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
						<h1 className="text-3xl font-bold mb-6 text-center text-green-800">
							Student's detail
						</h1>

						<form className="space-y-4" onSubmit={handleSubmit} >
							<div>
								<label className="block text-gray-700">
									Enter Student Name :
								</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="text" name="name"
									placeholder="Enter your Name"
									onChange={(e)=>setInputdata({...inputdata,name:e.target.value})}
								/>
							</div>
							<div>
								<label className="block text-gray-700">
									Enter Student Address :
								</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="text" name="address"
									placeholder="Enter your Address"
									onChange={(e)=>setInputdata({...inputdata,address:e.target.value})}
								/>
							</div>
							<div>
								<label className="block text-gray-700">
									Enter Student Age :
								</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="number" name="age"
									placeholder="Enter your Age"
									onChange={(e)=>setInputdata({...inputdata,age:e.target.value})}
								/>
							</div>
							<div>
								<label className="block text-gray-700">
									Enter Contact Number :
								</label>
								<input
									className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
									type="number" name="contact"
									placeholder="Enter your Number"
									onChange={(e)=>setInputdata({...inputdata,phone:e.target.value})}
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

export default Student;
