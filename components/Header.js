import User from "./User";
import Link from 'next/link';
import {useRouter} from "next/router"

export default function Header() {
  const router = useRouter();
  
  return (
    <header className='flex justify-between p-5 text-sm text-slate-600'>
        <div className='flex space-x-4 items-center '>
        <Link href='https://portfolio-six-rust-88.vercel.app'>
            <a className='link'>Portfolio</a>
            </Link>
            <Link href='https://github.com/0x4a5'>
            <a className='link'>Github</a>
            </Link>
        </div>
        <div className='flex space-x-4 items-center'>
        <Link href='https://www.linkedin.com/in/crisiscoins'>
            <a className='link'>LinkedIn</a>
        </Link>
          <Link href='https://crisiscoins.com'>
            <a className='link'>CrisisCoins</a>
        </Link> 
        
          <a onClick={()=>router.push(`/search?term=${router.query.term || "CrisisCoins LLC"}&searchType=image`)} className="link">Images</a>
          
            <User/>
        </div>
    </header>
  )
}
