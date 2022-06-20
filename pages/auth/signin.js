import React from "react";
import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";


export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="h-screen font-sans login bg-cover mx-auto bg-gradient-to-r from-cyan-500 to-blue-500">
        {Object.values(providers).map((provider) => (
          // eslint-disable-next-line react/jsx-key
          <div className="container mx-auto h-full flex justify-center items-center px-8">
            <div className="w-full max-w-lg">
              <div className="bg-white md:border md:border-gray-300 md:shadow-lg shadow-sm rounded-2xl p-10 grid place-items-center">
                <div key={provider.name} className="items-center">
                  <Image 
                    src="/cTransImg.png"
                    width={125}
                    height={125}
                    alt="SEO Logo"
                  />
                  <p>
                    Authenticate with <span className="text-[#4285F4]">G</span>
                    <span className="text-[#DB4437]">o</span>
                    <span className="text-[#F4B400]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#0F9D58]">l</span>
                    <span className="text-[#DB4437]">e</span>
                  </p>
                  <div>
                    <button
                      onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                      className="ml-8 mt-3 px-4 py-1 border-2 border-[#4285F4] text-black rounded-md text-1xl font-medium hover:bg-[#4285F4] transition duration-300 md:shadow-lg shadow-sm "
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
