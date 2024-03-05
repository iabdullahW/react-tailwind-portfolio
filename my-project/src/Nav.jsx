import { SiSlideshare } from "react-icons/si";
 
 function Nav() {
   return (
     <div className="text-white flex justify-between items-center px-28 ">
       <div className="flex items-center gap-2 font-bold ">
       <SiSlideshare className="text-teal-400 text-3xl "/>
        <h3 className="opacity-90 ">Mohammad Abdullah</h3>
       </div>

       <div>
        <ul className="flex  items-center cursor-pointer font-medium py-4">
            <li className="opacity-80 bg-gray-950 rounded-md px-2 py-1 text-sm">Home</li>
            <li className="opacity-80 rounded-md px-2 py-1 hover:bg-slate-600  text-sm">Features</li>
            <li className="opacity-80 rounded-md px-2 py-1 hover:bg-slate-600 text-sm">Projects</li>
            <li className="opacity-80 rounded-md px-2 py-1 hover:bg-slate-600 text-sm">Projects</li>
            <li className="opacity-80 rounded-md px-2 py-1 hover:bg-slate-600 text-sm">Skills</li>
            <li className="opacity-80 rounded-md px-2 py-1 hover:bg-slate-600 text-sm">Experience</li>
            <li className="opacity-80 rounded-md px-2 py-1 hover:bg-slate-600  text-sm">Contact</li>

        </ul>
       </div>

     </div>
   )
 }
 
 export default Nav
   