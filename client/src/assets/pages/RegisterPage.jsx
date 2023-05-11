import { Link } from "react-router-dom";

export default function RegisterPage(){
    return (
        <div className="mt-4 grow flex  items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className=" max-w-md mx-auto">
            <input type="text" placeholder="Enter your name"/>
            <input type="email" placeholder="your@email.com"/>
             <input type="password" placeholder="password"/>
             <button className="primary">Login</button>
            </form>
            <div className="text-center py-2 text-gray-500">
            Already have Account? <Link className="underline text-black" to={"/Login"}>Login</Link>
            </div>
           </div>

        </div>
    );
}