import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../hooks/UseToken";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser,googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('')
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const [token] = useToken(createdUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  if(token){
    navigate('/')
  }


  const from = location.state?.from?.pathname || '/'

  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then((result)=>{
      const user = result.user;
      console.log(user);
      saveUser(user.displayName, user.email, user.photoURL);
      navigate(from, {replace: true})
    })
    .catch((error)=>{
      console.error("error: ", error)
  })
  }

  const handleSignup = (data) => {
    console.log(data);
    setSignUpError('')

    createUser( data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
      const userInfo ={
        displayName: data.name,
        photoURL: data.photo
      }

      updateUser(userInfo)
      .then(()=>{
        saveUser(data.name, data.email, data.photo);

      })
      .catch(error => console.log(error))
    })
    .catch(error => {
      console.log(error)
      setSignUpError(error.message)
    
    })
  };

  const saveUser = (name, email, photo) => {
    // Check if the user already exists in the database
    fetch(`https://doctors-portal-server23.vercel.app/users`)
      .then(res => res.json())
      .then(users => {
        // Check if any user has the same email
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
          return; // Do not save if user already exists
        }
  
        // User does not exist, save the user data
        const user = { name, email, photo };
        fetch('https://doctors-portal-server23.vercel.app/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          setCreatedUserEmail(email);
          navigate(from, { replace: true });
        })
        .catch(error => console.error('Error saving user:', error));
      })
      .catch(error => console.error('Error checking existing user:', error));
  };
  
  
  return (
    <div>
      <div className="flex justify-center lg:m-28">
        <div className="w-80 md:w-96">
          <h1 className="text-center text-accent text-2xl space-y-4">
            Sign Up
          </h1>
          <div>
            <form onSubmit={handleSubmit(handleSignup)}>
              <div className=" lg:w-96">
                {signUpError &&
                  <p className="text-red-600">SignUp error</p>
                }
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required*" })}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="leroy jenkins"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 focus:dark:border-violet-400"
                  />
                  {errors.name && (
                    <p className="text-red-600" role="alert">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm">
                    Photo
                  </label>
                  <input
                    {...register("photo", { required: "Photo is required*" })}
                    type="photo"
                    name="photo"
                    id="photo"
                    placeholder="PhotoURL"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 focus:dark:border-violet-400"
                  />
                  {errors.photo && (
                    <p className="text-red-600" role="alert">
                      {errors.photo?.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm">
                    Email address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email Address is required*",
                    })}
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
              </div>
              <button
                type="submit"
                className=" btn btn-accent w-full px-8 py-3 font-semibold rounded-md text-white my-5"
              >
                Sign Up
              </button>
              <div className="flex justify-center mt-3 gap-1">
                <p>Already have an account?</p>
                <Link to={"/login"} className="text-secondary">
                  Login here
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

export default Signup;
