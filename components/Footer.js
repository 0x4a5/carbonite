import React from 'react'

export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-sm text-slate-600'>
        <p>Copyright &copy; {new Date().getFullYear()} <span className="text-[#4285F4]">Crisis</span>Coins™</p>
    </footer>
  )
}
