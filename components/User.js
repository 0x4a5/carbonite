import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function User() {
  const { data: session } = useSession();
  if (session) {
    return;
    <>
      <Image className='h-10 w-10 rounded-full hover:bg-slate-200 cursor-pointer p-1'
        onClick={signOut}
        src={session.user.image}
        width={50}
        height={50}
        alt="Google Session Image"
      />
    </>;
  }
  return (
    <>
      <button className='border-2 border-gray-300 text-black px-4 py-2 rounded-md text-1xl font-medium shadow-sm hover:bg-gray-100 transition duration-300 hover:brightness-105 hover:shadow-sm'   onClick={signIn}>Sign In</button>
    </>
  );
}
