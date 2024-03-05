import Box from "./Box";
import { HiComputerDesktop } from "react-icons/hi2";
import { ImAndroid } from "react-icons/im";
import { MdOutlinePhoneIphone } from "react-icons/md";


function Features() {
  return (
   <>
     <div className="text-white ">
      <hr className="border border-teal-400 w-[90%] text-center mx-auto" />

      <div className="flex flex-col gap-4 mt-8 ml-14">
        <h3 className="text-teal-400"> Features</h3>
        <h1 className="text-5xl font-bold opacity-80">What I Do</h1>
      </div>
    </div>
    <div className="flex justify-between text-white  px-20  my-20">
      <Box title="Web Development" des="Crafting captivating digital experiences through a fusion of elegant design and cutting-edge technology is my passion in web development."  icon=<HiComputerDesktop />/>
      <Box title="Android Development" des="Embarking on a journey of innovation in Android development, I showcase a prowess in crafting versatile and user-centric apps."  icon=<ImAndroid />/>
      <Box title="IOS Development" des="Unveiling the art of innovation in iOS development, my work reflects an unwavering commitment to deliver top-tier user experiences in the Apple ecosystem"  icon=<MdOutlinePhoneIphone />/>
    </div>
    <hr className="border border-teal-400 w-[90%] text-center mx-auto" />
   </>
  );
}

export default Features;
