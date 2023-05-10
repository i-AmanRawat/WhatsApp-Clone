import React from "react";
import { qrCodeImage } from "../../constants/data";
import companyLogo from "../../logo/companyLogo.svg";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginDialog() {
  function onLoginSuccess() {}
  function onLoginError() {}
  return (
    <div className="flex flex-col justify-between text-center h-screen">
      <div className="top bg-[#FEA1A1] h-1/4">
        <div className="absolute flex left-0 sm:left-5 lg:left-10 xl:left-40 top-5 w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
          <img src={companyLogo} alt="" />
          <span className="inline-block align-middle m-5 ml-0 font-normal tracking-wide text-3xl font-serif leading-10">
            CHATTYCHAT
          </span>
          {/* <p className="flex justify-center">CHATTYCHAT</p>  */}
        </div>
      </div>
      <div className="middle dialog-box flex flex-col justify-around items-center md:flex-row px-12 py-14 bg-gray-100 absolute inset-x-0 inset-y-28 sm:inset-x-5 lg:inset-x-10 xl:inset-x-40 xl:inset-y-36 ">
        <div className="top-left w-auto text-left">
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
        </div>
        <div className="top-right qr-code-img w-auto">
          <img src={qrCodeImage} alt="" className="" />
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
        </div>
      </div>
      <div className="bottom bg-[#111b21] h-3/4"></div>
    </div>
  );
}
