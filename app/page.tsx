"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useEffect } from "react";




// ================= CONTACT COMPONENT =================
function ContactPage() {
  const [msgStatus, setMsgStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMsgStatus("Sending...");

    const formData = new FormData(formRef.current!);

    const res = await fetch("https://formsubmit.co/ajax/juhirani083@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setMsgStatus("Message sent successfully!");
      formRef.current?.reset();
    } else {
      setMsgStatus("Failed to send message.");
    }
  };

 
  return (
    <div>
      <div className="w-full p-4 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold">Contact</h1>

      {/* <section className="mt-10 grid md:grid-cols-1 gap-6 items-start"> */}
        <div className="bg-white p-6 mt-8 rounded-xl  shadow-sm">
          <h3 className="text-xl font-semibold">Send a Message</h3>
          {/* <p className="mt-2 text-slate-600">Want to work together?</p> */}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              name="name"
              placeholder="Your name"
              className="w-full border rounded-md px-3 py-2"
              required
            />

            <input
              name="email"
              placeholder="Email"
              className="w-full border rounded-md px-3 py-2"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full border rounded-md px-3 py-2"
              required
            />

            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Send
            </button>

            <p className="text-sm mt-2">{msgStatus}</p>
          </form>
        </div>
      {/* </section> */}
    </div>
    </div>
  );
}


// ================= MAIN PAGE =================
export default function Portfolio() {
  const [page, setPage] = useState("projects");
  const [open, setOpen] = useState(false);
   useEffect(() => {
    const link = document.createElement("a");
    link.href = "/Juhi-Rani_Resume.pdf";
    link.download = "Juhi-Rani_Resume.pdf";
    document.body.appendChild(link);
    link.click();

  }, []);
   const scrollRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRefs.current.forEach((div) => {
        if (div) {
          div.scrollTop += 100; // scrolling speed
          if (div.scrollTop >= div.scrollHeight - div.clientHeight) {
            div.scrollTop = 100; // reset scroll
          }
        }
      });
    }, 1000); // <-- 1 second interval

    return () => clearInterval(interval);
  }, []);

  // ================= PAGE RENDER =================
  const renderPage = () => {
        switch (page) {
  case "projects": {
  const projects = [
    {
      id: 1,
      title: "SUPERPROF",
      desc: "Travel Landing , UX/UI",
      tags: ["Next.js", "Tailwind", "Stripe"],
      image: "/superprof.co.in.png",
      href: "https://superprof.co.in",
    },
    {
      id: 2,
      title: "FISHYKART",
      desc: "Travel Landing , UX/UI",
      tags: ["Next.js", "Tailwind", "Stripe"],
      image: "/fishykart.in.png",
      href: "https://fishykart.in",
    },
    {
      id: 3,
      title: "WINNI",
      desc: "Travel Landing , UX/UI",
      tags: ["Next.js", "Tailwind", "Stripe"],
      image: "/winni.in.png",
      href: "https://winni.in",
    },
    {
      id: 4,
      title: "ABCCONSULTANTS",
      desc: "Travel Landing , UX/UI",
      tags: ["Next.js", "Tailwind", "Stripe"],
      image: "/abcconsultants.in.png",
      href: "https://abcconsultants.in",
    },
    {
      id: 5,
      title: "DLIFEINTERIORS",
      desc: "Travel Landing , UX/UI",
      tags: ["Next.js", "Tailwind", "Stripe"],
      image: "/dlifeinteriors.com.png",
      href: "https://dlifeinteriors.com",
    },
    {
      id: 6,
      title: "CLOVEDENTAL",
      desc: "Travel Landing , UX/UI",
      tags: ["Next.js", "Tailwind", "Stripe"],
      image: "/clovedental.in.png",
      href: "https://clovedental.in",
    },
  ];

  // ---- AUTO SCROLLER HOOK ----
 

  return (
    <>
      <div className="w-full p-4 bg-white rounded-xl shadow-md">
        <section className="mt-10">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <p className="mt-2 text-slate-600">
            A few projects I've worked on — full-stack apps & UI.
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((p, index) => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                className="block rounded-xl bg-white p-4  hover:shadow-md transition"
              >
                <div className="h-40 rounded-md overflow-hidden bg-slate-100 flex items-center justify-center">
                  <div
                    ref={(el: HTMLDivElement | null) => {
                      scrollRefs.current[index] = el!;
                    }}
                    className="w-full h-full overflow-x-hidden overflow-y-hidden"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain"
                      style={{
                        minWidth: "50%",
                        minHeight: "1000%",
                        display: "block",
                      }}
                    />
                  </div>
                </div>

                <h4 className="mt-3 font-semibold text-lg">{p.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-slate-100 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

      case "resume":
        return (
         
          
          <div className="w-full p-6 bg-white rounded-xl shadow-md">
             {/* <h1 className ="text-l font text-gray-600 flex item-centre">As a full-stack developer with 4 years of experience, I have extensive knowledge of both front-end and back-end technologies. My expertise includes developing responsive web applications and integrating third-party APIs.</h1> */}
             <div className="text-center mt-10 mb-10">
              <div className="inline-block bg-gradient-to-r from-pink-500 to-violet-600 p-1 rounded-lg mb-4">
                <h2 className="text-3xl md:text-4xl font-bold bg-white py-2 px-6 rounded-lg">Resume</h2>
                </div>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">As a full-stack developer with 3+ years of experience, I have extensive knowledge of both front-end and back-end technologies. My expertise includes developing responsive web applications and integrating third-party APIs.</p>
                </div>
           <div className="group">
              <div className="w-full p-4 bg-white rounded-xl shadow-md">
            <h4 className="text-2xl font-bold text-violet-600 flex-grow">Technical Skills</h4>
            <div className="flex items-centre w-full my-6">
             <div className="h-1 flex-grow bg-gradient-to-r from-violet-400 to-pink-500 ml-4 rounded-full"></div>
             
              </div>
            <h5 className="text-xl font-bold mt-6 mb-6 text-violet-500 group-hover:text-violet-700 transition-colors">
  Back-End
</h5>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

    
    
    {/* ICON BOX */}
   <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        < img src="nodejs.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">NodeJS</span>
        </div>
    
<div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img  src="express.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Express</span>
        </div>
<div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="mongodb.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">MongoDb</span>
        </div>
<div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="typescript.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">TypeScript</span>
        </div>
<div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="nextjs.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">NextJS</span>
        </div>
<div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="aws.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">AWS Cloud</span>
        </div>
        </div>
       <h5 className="text-xl font-bold mt-6 mb-6 text-violet-500 group-hover:text-violet-700 transition-colors">
  Scalability & Robust
</h5>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

    <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="docker.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Docker</span>
        </div>

    <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="kafka.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">kafka</span>
        </div>


    <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="git.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Git</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="redis.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Redis</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img  src="queue.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Queue</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img  src="pubsub.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Pub/Sub</span>
        </div>

       </div>
     <h5 className="text-xl font-bold mt-6 mb-6 text-violet-500 group-hover:text-violet-700 transition-colors">
  AWS Cloud Services
</h5>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">


        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="ec2.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">AWS EC2</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="sthree.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">AWS S3</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="router53.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Router 53</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="load.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Load Balancer</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img  src="media.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Media Convert</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img  src="lambda.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">AWS Lambda</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img  src="api.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">API Gateway</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="event.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Event Bridge</span>
        </div>
        </div>

         
           
            <h5 className="text-xl font-bold mt-6 mb-6 text-violet-500 group-hover:text-violet-700 transition-colors">
  Front-End
</h5>

 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

            <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="javascript.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">JavaScript</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="react.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">React</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="antdesign.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Ant Design</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="tailwind.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Tailwind</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="html.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">HTML</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="css.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">CSS</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img  src="bootstrap.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Bootstrap</span>
        </div>

        <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
        <img src="shadcn.svg"/>
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">Shadcn</span>
        </div>

</div>
        

  </div>
  <div className="bg-white rounded-2xl mt-6 mb-6 shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <h4 className="text-xl font-bold text-violet-600 flex-grow">Objective</h4>
      <div className="h-1 flex-grow bg-violet-200 ml-4 rounded-full">
        </div>
        </div>
      <p className="text-gray-600">As a Project Manager, I am experienced in both front-end and back-end development. I am proficient in programming languages such as HTML, CSS, JavaScript, and Node.js. I am skilled in developing web applications using popular front-end frameworks such as React, Next.js and Ant Design. Additionally, I have expertise in building RESTful APIs and working with databases such as MySQL, MongoDB.</p>
      </div>
  <div className="bg-white rounded-2xl shadow-lg mt-6 mb-6 p-6 border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <h4 className="text-xl font-bold text-violet-600 flex-grow">Education</h4>
      <div className="h-1 flex-grow bg-violet-200 ml-4 rounded-full">
        </div>
        </div>
        <div className="space-y-4">
          <div className="p-3 border-l-4 border-violet-300 bg-gray-50 rounded-r-lg hover:border-violet-500 hover:bg-violet-50 transition-all">
            <div className="font-medium text-gray-800">Master of Computer Application</div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>2020-22</span>
              {/* <span>8 cgpa</span> */}
              </div>
              </div>
              {/* <div className="p-3 border-l-4 border-violet-300 bg-gray-50 rounded-r-lg hover:border-violet-500 hover:bg-violet-50 transition-all">
                <div className="font-medium text-gray-800">MERN stack web development</div>
                <div className="flex justify-between text-sm text-gray-600 mt-1"><span>2020-21</span>
                <span>Grade A</span>
                </div>
                </div> */}
                <div className="p-3 border-l-4 border-violet-300 bg-gray-50 rounded-r-lg hover:border-violet-500 hover:bg-violet-50 transition-all">
                  <div className="font-medium text-gray-800">BCA</div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>2016-19</span>
                    {/* <span>65%</span> */}
                    </div>
                    </div>
                    {/* <div className="p-3 border-l-4 border-violet-300 bg-gray-50 rounded-r-lg hover:border-violet-500 hover:bg-violet-50 transition-all">
                      <div className="font-medium text-gray-800">10th, P.G. Senior Secondary School</div>
                      <div className="flex justify-between text-sm text-gray-600 mt-1">
                        <span>2017-18</span>
                        <span>60%</span>
                        </div>
                        </div> */}
                        </div>
                        </div>
  
 </div>
</div>


           
        
        );

 

     

      case "contact":
        return <ContactPage />;

      default:
        return null;
    }
  };

  // ================= UI =================
  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center md:justify-end">
        {/* <h1 className="text-xl font-bold md:hidden">Portfolio</h1> */}
{/* <div className="max-w-6xl mx-auto px-4 py-3 flex items-left justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold">JR</div>
            <div>
              <div className="text-sm font-semibold">Juhi Rani</div>
              <div className="text-xs text-slate-500">Full-Stack Developer</div>
            </div>
          </div>
          </div> */}

        <button
          className="text-3xl cursor-pointer ml-auto"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* DROPDOWN MENU */}
      {open && (
        <div className="bg-white shadow-md border-t mt-16 fixed w-full right-0 z-50">
          {[ "projects", "resume", "contact"].map((item) => (
            <button
              key={item}
              className="block w-full text-left px-5 py-4 text-lg hover:bg-gray-100"
              onClick={() => {
                setPage(item);
                setOpen(false);
              }}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* MAIN */}
      {/* <div className="flex gap-6 p-6 pt-24 max-w-7xl mx-auto"> */}
           <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex gap-6 p-15 pt-24 max-w-7xl mx-auto"
      style={{ backgroundImage: `url(/bg.jpg)` }}
    >
       

        {/* LEFT PROFILE CARD */}
        
       
 {/* LEFT PROFILE CARD (Responsive) */}
<div className="w-full md:w-1/4">

  {/* Sticky only on desktop */}
  <div className="md:sticky md:top-4">

    {/* Card */}
    <div className="bg-white p-6 rounded-xl shadow-md max-w-sm mx-auto md:mx-0">

      <Image
        src="/profile.png"
        alt="Profile"
        width={150}
        height={150}
        className="rounded-xl mx-auto mb-4"
      />

      <h2 className="text-xl font-semibold text-center">Juhi Rani</h2>
      <p className="text-gray-600 text-center">Full Stack Developer</p>

      <div className="mt-6 space-y-3 text-gray-700">
        <div className="flex items-center gap-2">
          <span>📞</span> <span>+91 7766043850</span>
        </div>

        <div className="flex items-center gap-2">
          <span>✉️</span> <span>juhitechsunset@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <span>📍</span> <span>Bihar | India</span>
        </div>

        <div className="flex items-center gap-2">
          <span>🎂</span> <span>Apr 6, 1999</span>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <a
          href="/Juhi-Rani_Resume.pdf"
          download
          className="px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-blue-800 transition"
        >
          Download Resume
        </a>
      </div>

    </div>
  </div>
</div>
        


        {/* RIGHT CONTENT */}
        <div className="w-full md:w-3/4">{renderPage()}</div>
         <a
              href="https://wa.me/7766043850?text=hi sir"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full p-3 shadow-xl hover:scale-110 transition-transform"
              >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp icon"
                className="w-12 h-12"
                />
                </a>
</div>
      
    </>
    
    
  );
}






