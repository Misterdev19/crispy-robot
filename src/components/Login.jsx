
import { FaCircleUser } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";

export const Login = () => {
    return (
        <div className="login w-96 h-96">
            <h1 className="text-4xl font-bold ">Welcome to Login</h1>
            <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="grid grid gap-4 py-8 ">
                <label htmlFor="" className="flex gap-2"><FaCircleUser /> User Name</label>
                <input type="text" className="w-60 h-8 border-b-2 border-black-400 focus:outline-none" placeholder="username" />
                <label htmlFor="" className="flex gap-2"><FaKey /> Password</label>
                <input type="password" placeholder="password" className="w-60 h-8 border-b-2 border-black-400 focus:outline-none" />
                <button className=" bg-green-400 text-white w-40 h-10 rounded ml-[90px] hover:bg-green-500"> Login</button>
            </div>
        </div>
    )
}