import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useLoginToken from "../../hooks/useLoginToken";

const Login = () => {
  const [user, setUser] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const token = useLoginToken(user);

  const onSubmit = (data) => {
    const { email } = data;
    if (email) {
      setUser(data);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="w-full md:w-3/5 lg:w-2/4 mx-auto border p-5">
        <h1 className="text-center text-2xl">Login to Artboard</h1>
        <form
          className="grid grid-cols-1 gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xl uppercase">
              Your Email
            </label>
            <input
              type="email"
              className="border px-5 py-2 rounded text-black text-[18px]"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Require",
                },
              })}
            />
            <label>
              {errors?.email?.type === "required" && (
                <span className="text-red-600">{errors?.email?.message}</span>
              )}
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="passwrod" className="text-xl uppercase">
              Password
            </label>
            <input
              type="password"
              className="border px-5 py-2 rounded text-black text-[18px]"
              placeholder="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is Require",
                },
              })}
            />
            <label>
              {errors?.password?.type === "required" && (
                <span className="text-red-600">
                  {errors?.password?.message}
                </span>
              )}
            </label>
          </div>
          <button className="bg-green-500 py-2 rounded text-xl" type="button ">
            REGISTER
          </button>
        </form>
        <p className="mt-3">
          Don't have an account?
          <Link to="/">
            <span className="font-bold text-blue-700"> signup</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
