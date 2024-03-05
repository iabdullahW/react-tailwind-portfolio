

const Circle=(props) =>{
  return (
    <>
        <div className=" flex justify-center item-center border-[22px] border-teal-400 rounded-full w-[200px] h-[200px] p-16 animate-bounce " >
       
      <h1 className="text-white text-2xl">{props.title}</h1>
      </div>
    </>
  )
}

export default Circle
