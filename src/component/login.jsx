import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utiles/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("amitesh@gmail.com");
  const [password, setPassword] = useState("123");
  const dispatch = useDispatch()   
  const navigate = useNavigate() 

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(BASE_URL+"/login", {
      email,
      password,
    },{withCredentials: true});

   // console.log("user data ========>>>",res.data);
    dispatch(addUser(res.data))
    return navigate("/")

  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="w-full max-w-md bg-black shadow-lg rounded-xl p-8 text-pink-500">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>   

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-red-400">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-black-300 rounded-lg px-4 py-2 outline-none focus:border-black-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-red-400">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-black-300 rounded-lg px-4 py-2 outline-none focus:border-black-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-pink-700 text-white py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;