import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Code Bloc */}
      <Header />

      {/* Body Code Bloc */}

      <form className="flex flex-col items-center mt-56">
        <Image
          src="/cSolidImg.png"
          width={125}
          height={125}
          objectFit="cover"
          alt="Carbonite Logo"
        />

        <div
          className="flex w-full mt-5 px-5 py-3 mx-auto max-w-[90%] border border-slate-200 
        rounded-md items-center hover:shadow-md focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 text-slate-500 mr-3" />
          <input type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 ml-3" />
        </div>

        <div className='flex flex-col justify-center sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4'>
            <button className='px-4 py-1 border-2 border-[#4285F4] text-black rounded-md text-1xl font-medium hover:bg-[#4285F4] 
              transition duration-300 md:shadow-lg shadow-sm '>Carbonite Search</button>
            <button className='px-4 py-1 border-2 border-[#4285F4] text-black rounded-md text-1xl font-medium hover:bg-[#4285F4] 
              transition duration-300 md:shadow-lg shadow-sm '>Randomized Search</button> 
        </div>
      </form>

      {/* Footer Code Bloc */}
      <Footer/>
    </div>
  )
}
