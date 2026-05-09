export default function Contact() {
  return (
    <section id="contact" className="mt-20">
      <h2 className="text-5xl font-bold text-center mb-12 md:mb-20">
        Contact{" "}
        <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
      <div className="w-10/12 mx-auto text-center border border-[#8d8d8d3f] bg-[#242e4e5e] bg-blend-saturation rounded-2xl p-6">
        <div>
          <p className="text-2xl">From Concept to Creation</p>
          <h3 className="text-3xl md:text-[42px] font-semibold">Let’s talk</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-12 my-14 justify-center">
          <div className="rounded-xl py-[50px] px-6 space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <img src="/assets/Get-in-touch.svg" alt="Get in touch" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Get in Touch</h4>
              <p className="text-sm">Email Me : atiksagor24@gmail.com</p>
            </div>
            <div className="flex justify-center">
              <button className="p-2 pl-4 border border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center md:text-xl">
                <span className="p-2">SEND EMAIL</span>
                <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </button>
            </div>
          </div>

          <div className="rounded-xl py-[50px] px-6 space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <img src="/assets/phone.svg" alt="Phone" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Freelance</h4>
              <p className="text-sm">Have a project? Contact Me Now</p>
            </div>
            <div className="flex justify-center">
              <button className="p-2 pl-4 border border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center md:text-xl">
                <span className="p-2">CONTACT </span>
                <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </button>
            </div>
          </div>

          <div className="rounded-xl py-[50px] px-6 space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <img src="/assets/message.svg" alt="Message" />
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Available</h4>
              <p className="text-sm">Let’s schedule A meeting!</p>
            </div>
            <div className="flex justify-center">
              <button className="p-2 pl-4 border border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center md:text-xl">
                <span className="p-2">CALENDAR</span>
                <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
