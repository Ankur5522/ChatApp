const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login <span className="text-blue-300">ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-gray-200">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="input input-bordered w-full input-accent h-10"
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text text-gray-200">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="input input-bordered w-full input-accent h-10"
                        />
                    </div>
                        <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
                            {"Don't"} have an account? Signup
                        </a>

                        <div>
                            <button className="btn btn-block btn-sm mt-2 bg-blue-300 hover:bg-blue-300">Login</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

// STARTER CODE FOR THIS PAGE
// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">
//                     Login <span className="text-blue-500">ChatApp</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base label-text text-gray-200">
//                                 Username
//                             </span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Enter Username"
//                             className="input input-bordered w-full input-accent h-10"
//                         />
//                     </div>
//                     <div>
//                         <label className="label">
//                             <span className="text-base label-text text-gray-200">
//                                 Password
//                             </span>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Enter Password"
//                             className="input input-bordered w-full input-accent h-10"
//                         />
//                         <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block">
//                             {"Don't"} have an account? Signup
//                         </a>

//                         <div>
//                             <button className="btn btn-block btn-sm mt-2">Login</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;
