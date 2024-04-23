import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from 'sweetalert2';
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, googleSignIn, auth } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [userEmail, setUserEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then((result)=>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch((error)=>{
      console.error("error: ", error)
  })
  }

  const handleLogin = (data) => {
    setLoginError('');
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log(error.message)
        setLoginError(error.message);
      });
        
  };
  const handleEmailBLur= event=>{
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
}
  const handleResetPass = () => {
    if (!userEmail) {
      alert("Please Check Your Email");
      return;
    }

    sendPasswordResetEmail(auth, userEmail)
        .then(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Password Reset email sent.',
                showConfirmButton: false,
                timer: 1500
              })
        })
  };
  return (
    <div>
      <div className="flex justify-center lg:m-28">
        <div className="w-80 md:w-96">
          <h1 className="text-center text-accent text-2xl space-y-4">Log In</h1>
          <div>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className=" lg:w-96">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm">
                    Email address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email Address is required*",
                    })}
                    onBlur={handleEmailBLur}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 focus:dark:border-violet-400"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm w-80 mt-1" role="alert">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <div className="">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                  </div>
                  <input
                    {...register("password", {
                      required: "Password is required*",
                      minLength: {
                        value: 8,
                        message:
                          "Password must be at least 8 characters or longer",
                      },
                      pattern: {
                        value:
                          /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                        message:
                          "Must be one uppercase, one lowercase, one digit & one special character",
                      },
                    })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 focus:dark:border-violet-400"
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm w-80 mt-1" role="alert">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                <Link
                onClick={handleResetPass}
                  rel="noopener noreferrer"
                  className="text-xs hover:underline dark:text-gray-400 my-4"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className=" btn btn-accent w-full px-8 py-3 font-semibold rounded-md text-white"
              >
                Sign in
              </button>
              {
                loginError &&
                <p>{loginError}</p>
              }
              <div className="flex justify-center mt-3 gap-1">
                <p>New to Doctors Portal?</p>
                <Link to={"/signup"} className="text-secondary">
                  Create new account
                </Link>
              </div>
            </form>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-accent" />
            <p className="px-3 dark:text-accent">OR</p>
            <hr className="w-full dark:text-accent" />
          </div>
          <div>
            <button
             onClick={handleGoogleSignIn}
             className="btn btn-outline btn-accent w-full">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
