import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    function search(event){
      event.preventDefault();
      const term = searchInputRef.current.value;
      if (!term.trim()) return;
      router.push(`/search?term=${term.trim()}&searchType=`);
    }
  
    return (
    <header className="sticky top-0 bg-white">
      <div className='flex w-full p-6 items-center'>
        <Image
          onClick={() => router.push('/')}
          src="/cSolidImg.png"
          width={120}
          height={60}
          alt="Carbonite Logo"
          objectFit="contain"
          className='cursor-pointer'
        />
        <form className='flex flex-grow max-w-3xl border border-slate-200 rounded shadow-md px-6 py-3 ml-10 mr-5 items-center'>
            <input className='w-full focus:outline-none' type='text' defaultValue={router.query.term} ref={searchInputRef} />
            <XIcon onClick={() =>(searchInputRef.current.value = '')} className='h-7 text-slate-500 cursor-pointer sm:mr-3'/>
            <MicrophoneIcon className='h-6 hidden sm:inline-flex text-[#4285F4] pl-4 border-l-2 border-slate-300 mr-3'/>
            <SearchIcon className='h-6 hidden sm:inline-flex text-[#4285F4]'/>
            <button onClick={search} type='submit' hidden></button>
        </form>
        {/* <User className='ml-auto whitespace-nowrap' /> */}
      </div>
      <SearchHeaderOptions/>
    </header>
  )
}
