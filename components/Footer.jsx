import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#000c3364] mt-[100px] p-10 md:p-[56px] text-white">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-[120px] justify-center">
        <div>
          <Image
            width={100}
            height={100}
            src="/assets/logo.png"
            alt="Logo"
            className="w-[120px] h-[70px] mb-4"
          />
          <h1 className="bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-2xl font-black text-transparent mb-5">
            {"<Atik Hasan Sarker />"}
          </h1>
          <p className="text-sm text-gray-400">© Copyright 2026</p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="font-bold text-xl">Why trust us</h5>
          <ul className="font-medium text-gray-400">
            <li>Email</li>
            <li>Phone</li>
            <li>Linkedin</li>
            <li>WhatsApp</li>
          </ul>
        </div>
        <div className="space-y-[10px]">
          <h5 className="font-bold text-xl">Contact</h5>
          <ul className="font-medium text-gray-400">
            <li>Email</li>
            <li>Phone</li>
            <li>Linkedin</li>
            <li>WhatsApp</li>
          </ul>
        </div>
        <div className="space-y-[10px]">
          <h5 className="font-bold text-xl">Join our newsletter</h5>
          <div className="flex gap-1 justify-between border border-gray-400 rounded-full p-1 w-full text-[12px] md:text-xl">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-2 md:px-6 py-3 text-gray-300 placeholder-gray-400 border-none focus:outline-none w-full min-w-[100px] md:w-[200px]"
            />

            <button className="bg-linear-to-r from-violet-400 to-pink-500 px-4 md:px-6 py-3 rounded-full">
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
