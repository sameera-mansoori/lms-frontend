import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useState,useEffect } from "react";

function SignUp(props) {
	
	const [inputdata,setInputdata]=useState({
		first_name:"",
		last_name:"",
		email:"",
		password:""
	 })
 
	const handleSubmit=(e)=>{
		 e.preventDefault();
		 axios.post('http://127.0.0.1:8000/Add_Manager',inputdata)
		 .then(res => {
			 alert("data posted successfully!!")
		 })
		 .catch(error => {
			console.error("Error posting data: ", error);
			alert("Error posting data");
		});
   }
    
	   const fetchData = () => {
        axios.get('http://127.0.0.1:8000/')
            .then(res => {
                
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }

    
    useEffect(() => {
        fetchData();
    }, []); 

   
	return (
		<>
			<Navbar />
			<div className="bg-gradient-to-r from-purple-400 to-indigo-600 min-h-dvh flex justify-center items-center">
				<div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-lg">
					<h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
						Sign-Up Page
					</h1>

					<form className="space-y-4" onSubmit={handleSubmit}>
						<div>
							<label className="block text-gray-700">First Name</label>
							<input
								className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
								type="text"
								placeholder="Enter your first name"
								onChange={(e)=>setInputdata({...inputdata,first_name:e.target.value})}
								name="first_name"
							/>
						</div>
						<div>
							<label className="block text-gray-700">Last Name</label>
							<input
								className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
								type="text"
								placeholder="Enter your last name"
								onChange={(e)=>setInputdata({...inputdata,last_name:e.target.value})}
								name="last_name"
							/>
							
						</div>

						<div>
							<label className="block text-gray-700">Email</label>
							<input
								className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
								type="email"
								placeholder="Enter your email"
								onChange={(e)=>setInputdata({...inputdata,email:e.target.value})}
								name="email"
							/>
						</div>
						<div>
							<label className="block text-gray-700">Password</label>
							<input
								className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
								type="password"
								placeholder="Enter your Password"
								onChange={(e)=>setInputdata({...inputdata,password:e.target.value})}
								name="password"
							/>
						</div>
						<div>
							<button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md hover:from-pink-600 hover:to-red-600 transition duration-300">
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default SignUp;
