import Circle from "./Circle"

function Skills() {
  return (
  <>
    <div>
      <div className="flex  flex-col px-8 py-8">
        <h6 className="text-teal-400 text-[20px]">Skills I am expert at</h6>
        <h1 className="text-white font-bold text-[60px]">Professional Skills</h1>
      </div>
      <hr className="border border-teal-400 w-[90%] text-center mx-auto" />
      <div className="flex flex-wrap justify-around gap-24 my-16">
        <Circle title="HTML" />
        <Circle title="CSS" />
        <Circle title="JS" />
        <Circle title="REACT" />
        <Circle title="TAILWIND" />
        <Circle title="FIREBASE" />
        <Circle title="Ai" />
      </div>
      </div>
      <hr className="border border-teal-400 w-[90%] text-center mx-auto" />
  </>
  )
}

export default Skills
