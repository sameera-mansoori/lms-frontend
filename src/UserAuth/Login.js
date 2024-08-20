import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

function Login() {
  const [inputdata, setInputdata] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  axios.post('http://127.0.0.1:8000/login', inputdata)
    .then(res => {
      if (res.data.message === 'Login successfully') {
        alert("Login successful!");
        navigate("/Student");
      } else {
        alert("Invalid username or password");
      }
    })
    .catch(error => {
      console.error("Error logging in: ", error);
      alert("An error occurred while logging in");
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-400 to-indigo-600 min-h-screen flex justify-center items-center">
        <div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Log-In Page
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={inputdata.email}
                onChange={(e) =>
                  setInputdata({ ...inputdata, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:bg-gray-300"
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={inputdata.password}
                onChange={(e) =>
                  setInputdata({ ...inputdata, password: e.target.value })
                }
              />
            </div>
            <div>
              <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-md hover:from-pink-600 hover:to-red-600 transition duration-300">
                LOG-IN
              </button>
            </div>
          </form>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;



















































