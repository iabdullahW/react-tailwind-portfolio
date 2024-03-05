
const  Box = (props)=> {
  return (
    <>
           <div className="bg-[#1B1E22] w-[300px] p-12 pb-10  rounded-lg flex flex-col  shadow-xl shadow-teal-900 my-8 h-[300px]">
           <span className="text-3xl duration-200 cursor-pointer hover:text-teal-400">{props.icon}</span>
           <h3 className="text-teal-400 text-[24px]">{props.title}</h3>
           <h6 className="font-semibold text-[16px]">{props.des}</h6>
           </div>
       
    </>
  )
}

export default Box
