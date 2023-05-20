import { useContext } from "react";
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

export default function LoginDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { account, setAccount } = useContext(AccountContext);


const  handleRegistration=async(data)=> {
    setAccount((prevData) => {
    return { ...prevData, ...data }  
  });
    const {name,email,password}=data;
    const res=await fetch("http://127.0.0.1:5000/signup",{
     	 method:"POST",
      	 headers:{
        	"Content-Type":"application/json"
      		},
      body:JSON.stringify({name,email,password})
    });
    console.log(data);
   console.log({ ...register("name") });

  }
  function onErrors(errors) {
    console.error(errors);
  }

  return (
    <div className="flex flex-col justify-between text-center h-screen">
      <div className="top bg-[#00a884] h-1/4">
        <div className="absolute flex left-0 sm:left-5 lg:left-10 xl:left-40 top-5 w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
          <img src={companyLogo} alt="" />
          <span className="inline-block align-middle m-5 ml-0 font-normal tracking-wide text-3xl font-serif leading-10">
            CHATTYCHAT
          </span>
          {/* <p className="flex justify-center">CHATTYCHAT</p>  */}
        </div>
      </div>
      <div className="middle dialog-box flex flex-col justify-around items-center rounded-lg md:flex-row px-12 py-14 bg-gray-100 absolute inset-x-0 inset-y-28 sm:inset-x-5 lg:inset-x-10 xl:inset-x-40 xl:inset-y-36 ">
        {/* <div className="top-left w-auto text-left">
          <h1 className="text-[#41525d] text-4xl mb-8 ">
            Use ChattyChat on your computer
          </h1>
          <ol className=" text-gray-700 ">
            <li className="text-2xl pb-2">
              1. Now you don't need to share number with others
            </li>
            <li className="text-2xl pb-2">2. Sign up using your Emails</li>
            <li className="text-2xl pb-2">
              3. Invite your friends on chattyChat and start chatting
            </li>
            <li className="text-2xl pb-2">4. Send media without lags</li>
            <li className="text-2xl pb-2">5. Feel connected to your friends</li>
          </ol>
        </div> */}

        {/* <div className="top-right form w-auto flex">
          <form onSubmit={handleSubmit(handleRegistration)}>

            <div className="">
              <label htmlFor="name">Name</label>
              <input
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
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                onFocus={false}
                type="email"
                placeholder="email"
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
            <div className="">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
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
            <div className="select-profile">
              <label htmlFor="profile-01">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture01"
                  id="profile-01"
                />
                <img src={profilePicture01} alt="" className="" />
              </label>
              <label htmlFor="profile02">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture02"
                  id="profile-02"
                />
                <img src={profilePicture02} alt="" className="" />
              </label>
              <label htmlFor="profile03">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture03"
                  id="profile-03"
                />
                <img src={profilePicture03} alt="" className="" />
              </label>
              <label htmlFor="profile04">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture04"
                  id="profile-04"
                />
                <img src={profilePicture04} alt="" className="" />
              </label>
              <label htmlFor="profile05">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture05"
                  id="profile-05"
                />
                <img src={profilePicture05} alt="" className="" />
              </label>
              <label htmlFor="profile06">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture06"
                  id="profile-06"
                />
                <img src={profilePicture06} alt="" className="" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div> */}

        <div className="top-left form-info w-auto ">
          <form onSubmit={handleSubmit(handleRegistration)}>

            <div className="">
              <label htmlFor="name">Name</label>
              <input
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
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                onFocus={false}
                type="email"
                placeholder="email"
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
            <div className="">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
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
            <div className="select-profile">
              <label htmlFor="profile-01">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture01"
                  id="profile-01"
                />
                <img src={profilePicture01} alt="" className="" />
              </label>
              <label htmlFor="profile02">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture02"
                  id="profile-02"
                />
                <img src={profilePicture02} alt="" className="" />
              </label>
              <label htmlFor="profile03">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture03"
                  id="profile-03"
                />
                <img src={profilePicture03} alt="" className="" />
              </label>
              <label htmlFor="profile04">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture04"
                  id="profile-04"
                />
                <img src={profilePicture04} alt="" className="" />
              </label>
              <label htmlFor="profile05">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture05"
                  id="profile-05"
                />
                <img src={profilePicture05} alt="" className="" />
              </label>
              <label htmlFor="profile06">
                <input
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture06"
                  id="profile-06"
                />
                <img src={profilePicture06} alt="" className="" />
              </label>

            </div>
            <button type="submit">Submit</button>
          </form>
        </div> */}

        <div className="top-left form-info w-auto ">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="">
              <label htmlFor="name">Name</label>
              <input
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
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="email"
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
            <div className="">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
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
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="top-right form-profile-selector w-auto">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="select-profile grid gap-10 grid-cols-2 grid-rows-3">
              <label htmlFor="profile-01">
                <img src={profilePicture01} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture01"
                  id="profile-01"
                />
              </label>
              <label htmlFor="profile02">
                <img src={profilePicture02} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture02"
                  id="profile-02"
                />
              </label>
              <label htmlFor="profile03">
                <img src={profilePicture03} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture03"
                  id="profile-03"
                />
              </label>
              <label htmlFor="profile04">
                <img src={profilePicture04} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture04"
                  id="profile-04"
                />
              </label>
              <label htmlFor="profile05">
                <img src={profilePicture05} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture05"
                  id="profile-05"
                />
              </label>
              <label htmlFor="profile06">
                <img src={profilePicture06} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture06"
                  id="profile-06"
                />
              </label>
            </div>
          </form>
        </div>

        <div className="top-right form-profile-selector w-auto">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="select-profile grid gap-10 grid-cols-2 grid-rows-3">
              <label htmlFor="profile-01">
                <img src={profilePicture01} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture01"
                  id="profile-01"
                />
              </label>
              <label htmlFor="profile02">
                <img src={profilePicture02} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture02"
                  id="profile-02"
                />
              </label>
              <label htmlFor="profile03">
                <img src={profilePicture03} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture03"
                  id="profile-03"
                />
              </label>
              <label htmlFor="profile04">
                <img src={profilePicture04} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture04"
                  id="profile-04"
                />
              </label>
              <label htmlFor="profile05">
                <img src={profilePicture05} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture05"
                  id="profile-05"
                />
              </label>
              <label htmlFor="profile06">
                <img src={profilePicture06} alt="" className="relative" />
                <input
                  className="relative left-[-80px] top-[-80px]"
                  {...register("profilePicture")}
                  type="radio"
                  value="profilePicture06"
                  id="profile-06"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="bottom bg-[#111b21] h-3/4"></div>
    </div>
  );
}
