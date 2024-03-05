import Myproj from "./Myproj";
// import youtube from "./image/youtube_clone.png"
 import bidverse from "./bidverse.png" 
 import qpay from "./qpay.png"
 import youtube from "./youtube_clone.png"

function Proj() {
  return (
    <>
      <div className="text-white flex flex-col items-center  my-16">
        <h3 className="font-semibold text-teal-400 text-[20px]">
          Check Out My Work
        </h3>
        <h1 className="text-[60px] font-extrabold tracking-widest opacity-80">
          My Projects
        </h1>
      </div>
      <div className="flex justify-between px-10 my-8">
        <Myproj
          title="Youtube Clone"
          des="A youtube clone website having features similar to Youtube"
          img={youtube}
        />
        <Myproj
          title="Bidverse"
          des="A Bidding application allowing its users to but and sell products at their intended prices"
          img={bidverse}
        />
        <Myproj
          title="Qpay"
          des="An application allowing users to pay for their items using QR Code"
          img={qpay}
        />
       
      </div>
      <hr className="border border-teal-400 w-[90%] text-center mx-auto" />
    </>
  );
}

export default Proj;

