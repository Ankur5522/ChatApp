import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                    <h1 className="text-3xl font-semibold text-center text-gray-300">
                        Signup <span className="text-blue-300">ChatApp</span>
                    </h1>
                    <form>
                        <div>
                            <label className="label p-2">
                                <span className="text-base label-text text-gray-200">
                                    Full Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="input input-bordered w-full input-accent h-10"
                            />
                        </div>
                        <div>
                            <label className="label p-2">
                                <span className="text-base label-text text-gray-200">
                                    Username
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="johndoe"
                                className="input input-bordered w-full input-accent h-10"
                            />
                        </div>
                        <div>
                            <label className="label p-2">
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
                        <div>
                            <label className="label p-2">
                                <span className="text-base label-text text-gray-200">
                                    Confirm Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full input-accent h-10"
                            />
                        </div>

                        <GenderCheckBox />

                        <a
                            href="#"
                            className=" px-2 text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block"
                        >
                            {"Already"} have an account? Login
                        </a>

                        <div>
                            <button className="btn btn-block btn-sm mt-2 bg-blue-300 hover:bg-blue-300">
                                Signup
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;


//sTARTER CODE FOR THIS PAGE
// import GenderCheckBox from "./GenderCheckBox";

// const SignUp = () => {
//     return (
//         <div>
//             <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//                 <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                     <h1 className="text-3xl font-semibold text-center text-gray-300">
//                         Signup <span className="text-blue-300">ChatApp</span>
//                     </h1>
//                     <form>
//                         <div>
//                             <label className="label p-2">
//                                 <span className="text-base label-text text-gray-200">
//                                     Full Name
//                                 </span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="John Doe"
//                                 className="input input-bordered w-full input-accent h-10"
//                             />
//                         </div>
//                         <div>
//                             <label className="label p-2">
//                                 <span className="text-base label-text text-gray-200">
//                                     Username
//                                 </span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="johndoe"
//                                 className="input input-bordered w-full input-accent h-10"
//                             />
//                         </div>
//                         <div>
//                             <label className="label p-2">
//                                 <span className="text-base label-text text-gray-200">
//                                     Password
//                                 </span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Enter Password"
//                                 className="input input-bordered w-full input-accent h-10"
//                             />
//                         </div>
//                         <div>
//                             <label className="label p-2">
//                                 <span className="text-base label-text text-gray-200">
//                                     Confirm Password
//                                 </span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Confirm Password"
//                                 className="input input-bordered w-full input-accent h-10"
//                             />
//                         </div>

//                         <GenderCheckBox />

//                         <a
//                             href="#"
//                             className=" px-2 text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block"
//                         >
//                             {"Already"} have an account? Login
//                         </a>

//                         <div>
//                             <button className="btn btn-block btn-sm mt-2 bg-blue-300 hover:bg-blue-300">
//                                 Signup
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

