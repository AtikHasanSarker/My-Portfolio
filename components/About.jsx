export default function About() {
  return (
    <section id="about" className="w-11/12 lg:w-max-w-6xl mx-auto mb-10 md:mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          About{" "}
          <span className="bg-linear-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>
      <div className="space-y-8 text-center p-6 md:px-20 md:py-12 bg-[#352f651a] rounded-3xl">
        <div>
          <p className="text-xl">My Introduction</p>
          <h3 className="text-3xl font-semibold">
            Let’s see that
          </h3>
        </div>
        <p className="text-justify">
          I’m a passionate frontend developer focused on building modern,
          interactive, and immersive digital experiences. I enjoy blending clean
          code with creative design to create smooth, responsive, and visually
          engaging interfaces. My goal is to craft websites that not only
          function perfectly but also leave a memorable experience for users
          through thoughtful animations, modern UI, and attention to detail.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between">
          <div className="p-10 bg-violet-950 rounded-xl">
            <h3 className="text-[#F1F1F1] font-semibold text-[42px]">+1</h3>
            <p className="text-[#f1f1f199]">Year Experiences</p>
          </div>
          <div className="p-10 bg-violet-950 rounded-xl">
            <h3 className="text-[#F1F1F1] font-semibold text-[42px]">+12</h3>
            <p className="text-[#f1f1f199]">Project Completed</p>
          </div>
          <div className="p-10 bg-violet-950 rounded-xl">
            <h3 className="text-[#F1F1F1] font-semibold text-[42px]">+5</h3>
            <p className="text-[#f1f1f199]">Certificate Received</p>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <button className="p-2 border border-[#F1F1F1] rounded-full bg-[#d9d9d967] flex md:gap-4 items-center md:text-xl cursor-pointer hover:scale-105 duration-300">
            <span className="p-4">DOWNLOAD CV</span>
            <span className="rounded-full py-[13px] px-4 bg-[#F1F1F1] shadow-[0_0_20px_rgba(255,255,255,0.8)] text-[#595959]">
              <i className="fa-solid fa-download"></i>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
