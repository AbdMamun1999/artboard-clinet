import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useSignupToken from "../../hooks/useSignupToken";

const Singup = () => {
  const [passwordMatch, setPasswordMatch] = useState("");
  const [user, setUser] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const navigate = useNavigate()


  const token = useSignupToken(user);
  console.log(token,'token')

  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password === confirmPassword) {
      setUser(data);
    } else {
      setPasswordMatch(
        <p className="text-red-600">
          Password and Confirm Password is not same.
        </p>
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="w-full md:w-3/5 lg:w-3/6 mx-auto border p-5">
        <h1 className="text-center mb-3 text-2xl">Register to Artboard</h1>
        <form
          className="grid grid-cols-1 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Full Name"
              className="border px-5 py-2 rounded text-black text-[18px]"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Require",
                },
              })}
            />
            <label>
              {errors?.name?.type === "required" && (
                <span className=" text-red-600">{errors?.name?.message}</span>
              )}
            </label>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              className="border px-5 py-2 rounded text-black text-[18px]"
              placeholder="username"
              {...register("username", {
                required: {
                  value: true,
                  message: "username is Require",
                },
              })}
            />
            <label>
              {errors?.username?.type === "required" && (
                <span className=" text-red-600">
                  {errors?.username?.message}
                </span>
              )}
            </label>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="border px-5 py-2 rounded text-black text-[18px]"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Require",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Provide a valid email",
                },
              })}
            />
            <label>
              <label className="label">
                {errors?.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors?.email.message}
                  </span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors?.email.message}
                  </span>
                )}
              </label>
            </label>
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="password"
              className="border px-5 py-2 rounded text-black text-[18px]"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Require",
                },
                /*   pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                }, */
              })}
            />
            <label>
              {errors?.password?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors?.password.message}
                </span>
              )}
              {/* {errors?.password?.type === "pattern" && (
                <span className="label-text-alt text-red-600">
                  {errors?.password.message}
                </span>
              )} */}
            </label>
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="confirm password"
              className="border px-5 py-2 rounded text-black text-[18px]"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm password is Require",
                },
              })}
            />
            <label className="label">
              {errors?.confirmPassword?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors?.confirmPassword.message}
                </span>
              )}
              {passwordMatch}
            </label>
          </div>
          <button className="bg-green-500 py-2 rounded text-xl" type="button ">
            REGISTER
          </button>
        </form>
        <p className="mt-3">
          Already have an account?
          <Link to="/login">
            <span className="font-bold text-blue-700"> login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Singup;
