import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

function Header() {
  return (
    <div className="text-white flex justify-between  items-center px-14 py-4">
      <div className="px-14">
        <h3 className="opacity-80">Welcome to digital World</h3>

        <h1 className="text-5xl font-bold flex gap-2 mt-2 ">
          Hi,I am<span className="text-teal-400 "> Abdullah</span>
        </h1>

        <h1 className="text-5xl font-bold mt-3">a Software Developer</h1>
        <h3 className="mt-10">Find me at</h3>

        <div className="flex gap-8 mt-2">
        <a href="">  <FiFacebook className=" text-5xl p-3 bg-[#1D2024]  text-white  hover:text-teal-500  cursor-pointer shadow-lg shadow-teal-400" /></a>
          <a href="https://www.linkedin.com/in/i-abdullah/"><SlSocialLinkedin className=" text-5xl p-3 bg-[#1D2024]  text-white  hover:text-teal-500  cursor-pointer shadow-lg shadow-teal-400" /></a>
        <a href="https://github.com/iabdullahW">  <FiGithub className=" text-5xl p-3 bg-[#1D2024]  text-white  hover:text-teal-500  cursor-pointer shadow-lg shadow-teal-400" /></a>
        </div>
      </div>
      <div>
        <img src="../src/Capture.PNG" alt="" />
      </div>
    </div>
  );
}

export default Header;
