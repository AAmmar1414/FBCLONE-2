import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col md:flex-row items-center justify-center p-4">

  {/* Left side */}
  <div className="text-black text-3xl md:w-1/2 w-full px-4 md:px-10 mb-6 md:mb-0 text-center md:text-left">
    <Image
      src={"/fb.svg"}
      width={300}
      height={100}
      alt="Facebook Logo"
      className="mx-auto md:mx-0"
    />
    <p className="ml-0 md:ml-8 -mt-3">
      Facebook helps you connect and share with the people in your life.
    </p>
  </div>

  {/* Right side */}
  <div className="bg-white flex flex-col p-5 rounded-xl w-full md:w-1/3 shadow-lg">
    <input
      className="my-2 border border-1 border-gray-300 p-3 rounded-md w-full"
      type="text"
      placeholder="Email address or phone number"
    />
    <input
      className="my-2 border border-1 border-gray-300 p-3 rounded-md w-full"
      type="password"
      placeholder="Password"
    />
    <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
      Log in
    </button>
    <p className="cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">
      Forgotten Password?
    </p>
    <hr className="my-2" />
    <button className="bg-green-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-600">
      Create new account
    </button>
  </div>

</div>

  );
}
