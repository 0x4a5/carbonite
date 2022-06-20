import User from "./User";


export default function Header() {
  return (
    <header className='flex justify-between p-5 text-sm text-slate-600'>
        <div className='flex space-x-4 items-center '>
            <p className='link'>Portfolio</p>
            <p className='link'>Github</p>
        </div>
        <div className='flex space-x-4 items-center'>
            <p className='link'>LinkedIn</p>
            <p className='link'>CrisisCoins</p>
            <User/>
        </div>
    </header>
  )
}
