import { useContext, useState } from "react";
import React from "react";
import {
  profilePicture01,
  profilePicture02,
  profilePicture03,
  profilePicture04,
  profilePicture05,
  profilePicture06,
} from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";
import companyLogo from "../../logo/companyLogo.svg";
import { useForm } from "react-hook-form";
import "../../index.css";
import { Icon } from "@iconify/react"; //edit icon

export default function LoginDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { account, setAccount } = useContext(AccountContext);
  const [toggle, setToggle] = useState(false);
  const [profilePicture, setProfilePicture] = useState(profilePicture01);

  const handleRegistration = async (data) => {
    setAccount((prevData) => {
      return { ...prevData, ...data };
    });

    const { name, email, password } = data;
    
    const res = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password})
    });
    console.log(data);
  };

  function onErrors(errors) {
    console.error(errors);
  }

  function handleEditClick() {
    setToggle(!toggle);
  }
				
    async function handleProfileClick(e){
    console.log(e.currentTarget.id);
    setProfilePicture(e.currentTarget.id);
    let profile=e.currentTarget.id;
     const res = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({profile}),
    });
      console.log("ok")
  }

  return (
    <div className="flex flex-col justify-between text-center h-screen">
      <div className="top gradient h-1/4">
        <div className="absolute flex left-0 sm:left-5 lg:left-10 xl:left-40 top-5 w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
          <img src={companyLogo} alt="" />
          <span className="logo-text inline-block align-middle m-5 ml-[-13px] mt-[37px]  subpixel-antialiased font-medium text-slate-100 tracking-widest text-3xl font-serif leading-10">
            CHATTYCHAT~
          </span>
        </div>
      </div>
      <div className="middle dialog-box flex flex-col justify-around items-center rounded-lg px-12 py-14 bg-gray-100 absolute inset-x-0 inset-y-28 sm:inset-x-5 lg:inset-x-10 xl:inset-x-1/3 xl:inset-y-36 ">
        <div
          className={`top-right form-profile-selector w-auto absolute z-10  bg-gray-300 -top-24 rounded-2xl ${
            toggle ? "display" : "hidden"
          }`}
        >
          <button className="right-0 absolute" onClick={handleEditClick}>
            <Icon
              icon="basil:cross-outline"
              color="red"
              width="40"
              height="40"
            />
          </button>
          <div className="select-profile grid gap-5 grid-cols-3 grid-rows-2 m-3 p-1 mt-5">
            <button
              id={profilePicture01}
              className=""
              onClick={(e) => {
                handleProfileClick(e);
                setTimeout(handleEditClick, 100);
              }}
            >
              <img src={profilePicture01} alt="" className="relative" />
            </button>

            <button
              id={profilePicture02}
              className=""
              onClick={(e) => {
                handleProfileClick(e);
                setTimeout(handleEditClick, 100);
              }}
            >
              <img src={profilePicture02} alt="" className="relative" />
            </button>

            <button
              id={profilePicture03}
              className=""
              onClick={(e) => {
                handleProfileClick(e);
                setTimeout(handleEditClick, 100);
              }}
            >
              <img src={profilePicture03} alt="" className="relative" />
            </button>

            <button
              id={profilePicture04}
              className=""
              onClick={(e) => {
                handleProfileClick(e);
                setTimeout(handleEditClick, 100);
              }}
            >
              <img src={profilePicture04} alt="" className="relative" />
            </button>

            <button
              id={profilePicture05}
              className=""
              onClick={(e) => {
                handleProfileClick(e);
                setTimeout(handleEditClick, 100);
              }}
            >
              <img src={profilePicture05} alt="" className="relative" />
            </button>

            <button
              id={profilePicture06}
              className=""
              onClick={(e) => {
                handleProfileClick(e);
                setTimeout(handleEditClick, 100);
              }}
            >
              <img src={profilePicture06} alt="" className="relative" />
            </button>
          </div>
        </div>

        <div className="top-left form-info w-auto absolute">
          <div className="selected-profile-photo flex justify-center py-3 px-2">
            <img src={profilePicture} alt="" />
            <button
              className="edit-btn rounded-full absolute top-28 right-16 bg-gray-100 "
              onClick={handleEditClick}
            >
              <Icon
                className="rounded-full px-1 border-[1px] border-gray-700"
                icon="material-symbols:edit-outline"
                color="#111b21"
                width="30"
                height="30"
              />
            </button>
          </div>
          <form
            onSubmit={handleSubmit(handleRegistration)}
            className="flex flex-col"
          >
            <div className="flex flex-col mb-5">
              <label
                htmlFor="name"
                className="ml-1 py-2 text-xl font-serif text-left"
              >
                Name
              </label>
              <input
                className="rounded-lg px-4 py-1 text-lg text-[#1a1919] border-[1px] border-[#717171]"
                type="text"
                placeholder="name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <p className="errorMsg text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="ml-1 py-2 text-xl font-serif text-left"
              >
                Email
              </label>
              <input
                className="rounded-lg px-4 py-1 text-lg text-[#1a1919] border-[1px] border-[#717171]"
                type="email"
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg text-red-500">{errors.email.message} </p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="password"
                className="ml-1 py-2 text-xl font-serif text-left"
              >
                Password
              </label>
              <input
                className="rounded-lg px-4 py-1 text-lg text-[#1a1919] border-[1px] border-[#717171]"
                type="password"
                placeholder="******"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Must contain atleast 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="errorMsg text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="py-2 px-8 text-xl text-white font-serif bg-[#111b21] rounded-lg hover:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom bg-[#111b21] h-3/4"></div>
    </div>
  );
}
