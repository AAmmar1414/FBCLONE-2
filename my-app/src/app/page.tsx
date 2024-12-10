import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center" >

    {/*Left side*/ }
    <div className="text-black text-3xl w-1/2 px-10">
      <Image
       src={"/fb.svg"}
       width={300}
       height={100}
       alt="Facebook Logo"
      />

     <p className="ml-8 -mt-3">facebook help you connect and share with the people in your life</p>
    </div>

{/*Right side*/}
    <div className="bg-white flex flex-col p-5 rouded-xl w-1/3">
      <input
      className="my-2 border border-1 border-gray-100 p-3 rounded-md"
       type="text"
        placeholder="Email adress or phone number"/>

      <input
        className="my-2 border border-1 border-gray-100 p-3 rounded-md"
      type="password"
      placeholder="Password"/>
      <br/>

      <button className=" bg-blue-600 my-2 py-2 text-lg font-bold
       text-white rounded-md hover:bg-blue-700  ">
        Log in</button>

        <p className="cursor-pointer text-blue-600 text-sm my-2 text-center
        hover:underline">
         Forgotten Password?
        </p>
      <span className="my-2">
        <hr />

      </span>
      <button className="bg-green-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-green-600">Create new account</button>

    </div>

  </div>
  );
}
