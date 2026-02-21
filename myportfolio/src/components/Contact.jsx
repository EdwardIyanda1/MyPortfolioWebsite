const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-8">04. Contact</h2>
            <h3 className="text-5xl md:text-7xl text-white font-medium tracking-tighter mb-8 leading-none">
              LET'S <br /> COLLABORATE.
            </h3>
            <div className="space-y-4 text-zinc-400 font-light text-lg">
              <p>
                <a href="mailto:edwardiyanda60@gmail.com" className="hover:text-white transition-colors">edwardiyanda60@gmail.com</a>
              </p>
              <p>
                <a href="tel:+2348070597436" className="hover:text-white transition-colors">+234 807 059 7436</a>
              </p>
              <p>Ibadan, Nigeria</p>
            </div>
          </div>

          <div className="md:col-span-7 md:pt-16">
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input type="text" id="name" placeholder=" " className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" required />
                  <label htmlFor="name" className="absolute left-0 top-4 text-zinc-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" placeholder=" " className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" required />
                  <label htmlFor="email" className="absolute left-0 top-4 text-zinc-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">Email</label>
                </div>
              </div>
              <div className="relative group">
                <input type="text" id="subject" placeholder=" " className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" required />
                <label htmlFor="subject" className="absolute left-0 top-4 text-zinc-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">Subject</label>
              </div>
              <div className="relative group">
                <textarea id="message" rows="1" placeholder=" " className="w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none overflow-hidden" required></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-zinc-500 text-sm tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">Message</label>
              </div>
              
              <button type="submit" className="uppercase tracking-widest text-sm font-medium text-white border border-white px-10 py-4 hover:bg-white hover:text-black transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;