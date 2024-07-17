import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh]">
        <div className="font-bold flex gap-4 text-5xl justify-center items-center">Collecting Fund for Helping <span>
          <img className="rounded-full bg-gray-600" width={55} src="./fundingsymbol.png"
            alt="" /></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div>
          <Link href={"/login"}><button type="button" className="text-white bg-gradient-to-br from-purple-600
     to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
      focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
      rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button></Link>
          <Link href={"/about"}><button type="button" className="text-white bg-gradient-to-br from-purple-600
     to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
      focus:ring-blue-300 dark:focus:ring-blue-800 font-medium 
      rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link>
          <Link href={"/contactus"}><button type="button" className="text-white bg-gradient-to-br from-purple-600
     to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
      focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg 
      text-sm px-5 py-2.5 text-center me-2 mb-2">Contact Us</button></Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-2xl font-bold text-center mb-14">Your Fans can buy you a Coffee</h2>
        <div className="gap-5 flex justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 p-2 rounded-full text-black" width={78} 
            src="https://cdn3.vectorstock.com/i/1000x1000/45/82/funding-platform-project-financing-icon-vector-38754582.jpg" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 p-2 rounded-full text-black" width={78} 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlrjhCNo0LZkbhwulYb17JX7_W2T4yhkueQ&s" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 p-2 rounded-full text-black" width={78} 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMnt8jiPdbTwpQkvThkOnGGLjWhQfzUvqMg&s" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about Us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aSEuAQ0QsG8?si=6SvYBRPiy-2b9obT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
