export default function Contact() {
  return (
    <section id="contact" className="mt-[80px] md:mt-[120px]">
      <h2 className="text-5xl font-bold text-center mb-20">
        Contact{" "}
        <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
      <div className="w-10/12 mx-auto text-center border border-[#8d8d8d64] bg-[#3f40437d] bg-blend-saturation rounded-2xl p-6">
        <div>
          <p className="text-2xl">From Concept to Creation</p>
          <h3 className="text-3xl md:text-[42px] font-semibold">Let’s talk</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-12 my-14 justify-center">
          <div className="rounded-xl py-[50px] px-[12px] space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <img src="/assets/Get-in-touch.svg" alt="Get in touch" />
            </div>
            <div>
              <h4 className="text-3xl font-semibold">Get in Touch</h4>
              <p>Email Me : atiksagor24@gmail.com</p>
            </div>
            <div className="flex justify-center">
              <button className="p-2 pl-9 border border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center text-[20px] md:text-2xl">
                <span className="p-4">SEND EMAIL</span>
                <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </button>
            </div>
          </div>

          <div className="rounded-xl py-[50px] px-[12px] space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <img src="/assets/phone.svg" alt="Phone" />
            </div>
            <div>
              <h4 className="text-3xl font-semibold">Freelance</h4>
              <p>Have a project? Contact Me Now</p>
            </div>
            <div className="flex justify-center">
              <button className="p-2 pl-9 border border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center text-[20px] md:text-2xl">
                <span className="p-4">CONTACT </span>
                <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </button>
            </div>
          </div>

          <div className="rounded-xl py-[50px] px-[12px] space-y-4 bg-[#11111166]">
            <div className="flex justify-center">
              <img src="/assets/message.svg" alt="Message" />
            </div>
            <div>
              <h4 className="text-3xl font-semibold">Available</h4>
              <p>Let’s schedule A meeting!</p>
            </div>
            <div className="flex justify-center">
              <button className="p-2 pl-9 border border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center text-[20px] md:text-2xl">
                <span className="p-4">CALENDAR</span>
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
