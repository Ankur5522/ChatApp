import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const {signup, loading} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                    <h1 className="text-3xl font-semibold text-center text-gray-300">
                        Signup <span className="text-blue-300">ChatApp</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
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
                                value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
                                value={inputs.username}
                                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
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
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            />
                        </div>

                        <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                        <Link
                            to="/login"
                            className=" px-2 text-sm text-gray-200 hover:underline hover:text-blue-600 mt-2 inline-block"
                        >
                            {"Already"} have an account? Login
                        </Link>

                        <div>
                            <button className="btn btn-block btn-sm mt-2 bg-blue-300 hover:bg-blue-300">
                                {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
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

