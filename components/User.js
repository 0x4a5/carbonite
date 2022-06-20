import { useSession, signIn, signOut } from "next-auth/react";clearImmediate

export default function User({className}) {
  const { data: session } = useSession();
  if (session) {
    return (
    <>
      <img className={`h-10 w-10 rounded-full hover:bg-slate-200 cursor-pointer p-1 ${className}`}
        onClick={signOut}
        src={session.user.image}
        width={50}
        height={50}
        alt="Google Session Image"
      />
    </>
    )
  }
  return (
    <>
      <button className={`ml-8 mt-3 px-4 py-1 border-2 border-[#4285F4] text-black rounded-md text-1xl font-medium hover:bg-[#4285F4] transition duration-300 md:shadow-lg shadow-sm  ${className}`} onClick={signIn}>Sign In</button>
    </>
  )
}
