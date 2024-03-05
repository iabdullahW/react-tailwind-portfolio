
const Myproj=(props)=> {
  return (
    <>
        
        <div className="bg-[#16191B] w-[300px] p-6 text-white flex flex-col gap-3  rounded-xl h-auto shadow-xl shadow-teal-900 " >
               <img src={props.img} alt="" className="w-96 duration-300 cursor-pointer  rounded-2xl hover:scale-110" />
               <h1 className="font-bold tracking-widest text-2xl hover:text-teal-400">{props.title} </h1>
               <h6 className="tracking-widest">{props.des}</h6>
        </div>
    </>
  )
}

export default Myproj
