export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] mt-[100px] p-10 md:p-[56px] text-white">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-[120px] justify-center text-[20px]">
        <div>
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-[120px] h-[70px] mb-9"
          />
          <p>Copyright © 2026</p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="font-bold">Why trust us</h5>
          <p>Email</p>
          <p>Phone</p>
          <p>Linkedin</p>
          <p>WhatsApp</p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="font-bold">Contact</h5>
          <p>Email</p>
          <p>Phone</p>
          <p>Linkedin</p>
          <p>WhatsApp</p>
        </div>
        <div className="space-y-[10px]">
          <h5 className="font-bold">Join our newsletter</h5>
          <div className="flex gap-1 justify-between border border-gray-400 rounded-full p-1 w-full text-[12px] md:text-xl">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent px-2 md:px-6 py-3 text-gray-300 placeholder-gray-400 border-none focus:outline-none w-full min-w-[100px] md:w-[200px]"
            />

            <button className="bg-gradient-to-r from-violet-400 to-pink-500 px-4 md:px-6 py-3 rounded-full border border-gray-600">
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
