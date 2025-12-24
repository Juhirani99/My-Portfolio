"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { RiContactsBookFill } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import { FaSuitcase } from "react-icons/fa6";



// ================= CONTACT COMPONENT =================
function ContactPage() {
  const [msgStatus, setMsgStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMsgStatus("Sending...");

    const formData = new FormData(formRef.current!);

    const res = await fetch("https://formsubmit.co/ajax/juhitechsunset@gmail.com", {
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
      {/* <div className="w-full p-4 bg-white rounded-xl shadow-md"> */}
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="bg-white p-12 mt-8 rounded-xl  shadow-sm">
        <h3 className="text-xl font-semibold">I am always open to discussing produuct
design work or partnerships.</h3>
      
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
            rows={8}
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
    // </div>
  );
}


// ================= MAIN PAGE =================
export default function Portfolio() {
  const [page, setPage] = useState("projects");
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
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
          div.scrollTop += 10; // scrolling speed
          if (div.scrollTop >= div.scrollHeight - div.clientHeight) {
            div.scrollTop = 80; // reset scroll
          }
        }
      });
    }, 50); // <-- 1 second interval

    return () => clearInterval(interval);
  }, []);

  // ================= PAGE RENDER =================
  const renderPage = () => {
    switch (page) {
      case "projects": {
        const projects = [
          {
            id: 1,
            title: "CHENNAI PROPERTIES",
            desc: "Travel Landing , UX/UI",
            tags: ["Next.js", "Tailwind", "Stripe"],
            image: "/chennaiproperties.png",
            href: "https://www.chennaiproperties.com",
          },
          {
            id: 2,
            title: "LIVSPACE",
            desc: "Travel Landing , UX/UI",
            tags: ["Next.js", "Tailwind", "Stripe"],
            image: "/livspace-in.png",
            href: "https://www.livspace.com/in",
          },
          {
            id: 3,
            title: "PODAR EDUCATION",
            desc: "Travel Landing , UX/UI",
            tags: ["Next.js", "Tailwind", "Stripe"],
            image: "/podareducation-org.png",
            href: "https://www.podareducation.org/",
          },
          {
            id: 4,
            title: "SRI CHAITANYA SCORE",
            desc: "Travel Landing , UX/UI",
            tags: ["Next.js", "Tailwind", "Stripe"],
            image: "/srichaitanyascore.png",
            href: "https://srichaitanyascore.com/",
          },
          {
            id: 5,
            title: "UGAOO",
            desc: "Travel Landing , UX/UI",
            tags: ["Next.js", "Tailwind", "Stripe"],
            image: "/ugaoo.png",
            href: "https://www.ugaoo.com/",
          },
          {
            id: 6,
            title: "VAISHNAVI INTERIORS",
            desc: "Travel Landing , UX/UI",
            tags: ["Next.js", "Tailwind", "Stripe"],
            image: "/vaishnaviinteriors-in.png",
            href: "https://www.vaishnaviinteriors.in/",
          },
        ];

        // ---- AUTO SCROLLER HOOK ----


        return (
          <>
            {/* CSS FOR HOVER SCROLL */}
            <style jsx>{`
        .image-scroll-wrapper {
          height: 100%;
          overflow: hidden;
        }

        .image-scroll {
          width: 100%;
          transform: translateY(0);
          transition: transform 1s linear;
        }

        .image-scroll-wrapper:hover .image-scroll {
          transform: translateY(calc(-100% + 160px));
        }
      `}
            </style>

            {/* <div className="w-full p-4 bg-white rounded-xl shadow-md"> */}
            <section className="mt-4">
              <h3 className="text-2xl font-semibold">Portfolio</h3>
              <p className="mt-2 text-slate-600">
                Here are some of the projects I've worked on.
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {projects.map((p) => (
                  <a
                    key={p.id}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-white p-4  hover:shadow-lg transition"
                  >
                    {/* IMAGE CARD */}
                    <div className="h-40 rounded-md bg-slate-100 overflow-hidden">
                      <div className="image-scroll-wrapper w-full h-full">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="image-scroll"
                        />
                      </div>
                    </div>

                    {/* CONTENT */}
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
            {/* </div> */}
          </>
        );
      }

      case "resume":
      return (
          <div className="w-full p-6 bg-white rounded-xl shadow-md">
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
                      < img src="nodejs.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">NodeJS</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="express.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Express</span>
                  </div>
                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="mongodb.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">MongoDb</span>
                  </div>
                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="typescript.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="nextjs.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">NextJS</span>
                  </div>
                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="aws.svg" />
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
                      <img src="docker.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Docker</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="kafka.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">kafka</span>
                  </div>


                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="git.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Git</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="redis.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Redis</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="queue.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Queue</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="pubsub.svg" />
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
                      <img src="ec2.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">AWS EC2</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="sthree.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">AWS S3</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="router53.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Router 53</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="load.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Load Balancer</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="media.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Media Convert</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="lambda.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">AWS Lambda</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="api.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">API Gateway</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="event.svg" />
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
                      <img src="javascript.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">JavaScript</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="react.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">React</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="antdesign.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Ant Design</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="tailwind.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Tailwind</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="html.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">HTML</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="css.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">CSS</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="bootstrap.svg" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">Bootstrap</span>
                  </div>

                  <div className="flex flex-col items-center border-b-2 p-4 bg-gradient-to-r from-rose-50  to-yellow-50 rounded-xl border border-gray-200 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 border-2 border-zinc-400 bg-white rounded-full   flex items-center justify-center  p-2 mb-2 group-hover:scale-110 transition-transform">
                      <img src="shadcn.svg" />
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

                  <div className="p-3 border-l-4 border-violet-300 bg-gray-50 rounded-r-lg hover:border-violet-500 hover:bg-violet-50 transition-all">
                    <div className="font-medium text-gray-800">BCA</div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>2016-19</span>
                      {/* <span>65%</span> */}
                    </div>
                  </div>

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
  const render = () => {
    switch (page) {
      case "resume":
        return <div>Resume</div>;
      case "contact":
        return <div>Contact</div>;
      case "projects":
      default:
        return <div>Projects</div>;
    }
  };

  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 md:px-10 pt-24"
        style={{ backgroundImage: "url(/bg.jpg)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">

         
          {/* ======================================= */}
          {/* MOBILE TOP BAR */}
          <div className="md:hidden w-full flex justify-between items-center bg-white p-8 rounded-xl shadow-md">
            {/* <h3 className="text-lg font-semibold">Menu</h3> */}

            {/* Hamburger Button */}
            <button
              onClick={() => setOpenNav(!openNav)}
              className="p-2 bg-gray-200 rounded-lg text-xl"
            >
              {openNav ? "✖" : "☰"}
            </button>
          </div>

          {/* MOBILE NAV DROPDOWN */}
          {openNav && (
            <div className="md:hidden bg-white p-4 rounded-xl shadow-md space-y-3 mt-2">

              {/* Resume */}
              <button
                onClick={() => {
                  setPage("resume");
                  setOpenNav(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition
        ${page === "resume"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"}
      `}
              >
                <CiViewList className="text-xl" />
                <span>Resume</span>
              </button>

              {/* Projects */}
              <button
                onClick={() => {
                  setPage("projects");
                  setOpenNav(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition
        ${page === "projects"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"}
      `}
              >
                <FaSuitcase className="text-xl" />
                <span>Projects</span>
              </button>

              {/* Contact */}
              <button
                onClick={() => {
                  setPage("contact");
                  setOpenNav(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition
        ${page === "contact"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"}
      `}
              >
                <RiContactsBookFill className="text-xl" />
                <span>Contact</span>
              </button>

            </div>
          )}



          {/* ======================================= */}
          {/*  MOBILE PROFILE CARD                     */}
          {/* ======================================= */}
          <div className="md:hidden col-span-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="/pro profile.jpeg"
                alt="Profile"
                width={220}
                height={220}
                className="rounded-xl mx-auto"
              />

              <h2 className="mt-4 text-xl font-semibold text-center">Juhi Rani</h2>
              <p className="text-gray-600 text-center">Full Stack Developer</p>

              <div className="mt-6 space-y-3 text-gray-700 text-center">
                <div>📱 +91 7766043850</div>
                <div>✉️ juhitechsunset@gmail.com</div>
                <div>📍 Nalanda, Bihar | India</div>
                <div> 🎂 Apr 6, 1999 </div>
              </div>

              <button className="mt-6 w-full bg-blue-700 text-white p-2 rounded-lg shadow hover:bg-gray-900 transition">
                <a
                  href="/Juhi-Rani_Resume.pdf"
                  download
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>

          {/* ======================================= */}
          {/*  LEFT PROFILE CARD (DESKTOP)             */}
          {/* ======================================= */}
          {/* <div className="hidden md:block md:col-span-4 lg:col-span-3 w-full">
 <div className="relative bg-white pt-20 p-6 rounded-xl shadow-md"> */}
 {/* <div className="hidden md:block md:col-span-3 lg:col-span-3 xl:col-span-3"> */}

          {/* <div className="hidden md:block md:col-span-3 lg:col-span-3 xl:col-span-3 "> */}
        <div className="hidden md:block md:col-span-3">
            <aside className="sticky top-40 flex justify-center">
              <div
                className="
        relative
        w-full
        min-h-[calc(100vh-3rem)]
        xl:min-h-[680px]
        bg-white
        rounded-2xl
        shadow-xl
        flex flex-col
        justify-between
      "
              >
                {/* PROFILE IMAGE */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <Image src="/pro profile.jpeg"
                    alt="Profile" 
                    width={450} 
                    height={250} 
                    priority 
                    className="rounded-2xl border-3 border-white shadow-lg bg-white" />
                </div>

                {/* CONTENT */}
                <div className="pt-40 px-6 flex-1">
                  <h2 className="text-4xl font-semibold text-center text-gray-900">
                    Juhi Rani
                  </h2>
                  <p className="mt-2 text-sm text-center text-gray-800">
                    Full Stack Developer
                  </p>

                  {/* INFO */}
                <div className="mt-8 space-y-9 text-gray-700">
  {/* Phone */}
  <div className="flex items-center gap-4">
    <span className="text-4xl">📱</span>
    <div className="flex flex-col leading-tight">
      <span className="text-xs text-gray-600">Phone</span>
      <span className="text-lg font-medium">
        +91 7766043850
      </span>
    </div>
  </div>

  {/* Email */}
  <div className="flex items-center gap-4">
    <span className="text-4xl">✉️</span>
    <div className="flex flex-col leading-tight">
      <span className="text-xs text-gray-600">Email</span>
      <span className="text-lg font-medium break-all">
        juhitechsunset@gmail.com
      </span>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-center gap-4">
    <span className="text-4xl">📍</span>
    <div className="flex flex-col leading-tight">
      <span className="text-xs text-gray-600">Location</span>
      <span className="text-lg font-medium">
        Nalanda, Bihar · India
      </span>
    </div>
  </div>

  {/* Birthday */}
  <div className="flex items-center gap-4">
    <span className="text-4xl">🎂</span>
    <div className="flex flex-col leading-tight">
      <span className="text-xs text-gray-600">Birthday</span>
      <span className="text-lg font-medium">
        Apr 6, 1999
      </span>
    </div>
  </div>
</div>


                </div>

                {/* BUTTON */}
                <div className="px-6 pb-6">
                  <a
                    href="/Juhi-Rani_Resume.pdf"
                    download
                    className="
            block
            w-full
            text-center
            bg-blue-600
            text-white
            py-2.5
            rounded-lg
            font-medium
            hover:bg-gray-900
            transition
          "
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </aside>
          </div>


          {/* ======================================= */}
          {/*  MAIN CONTENT (CENTER)                   */}
          {/* ======================================= */}
          <div className="md:col-span-7 bg-white p-6 mt-6 mb-19 rounded-xl shadow-md min-h-[400px]">
            {renderPage()}
          </div>

          {/* ======================================= */}
          {/*  RIGHT NAVIGATION (DESKTOP ONLY)         */}
          {/* ======================================= */}
          <div className="hidden md:block md:col-span-2  max-w-[120px]">
            <div className="bg-white p-4 rounded-xl shadow-md sticky top-30 space-y-4">

              {/* Resume */}
              <button
                onClick={() => setPage("resume")}
                className={`w-full flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition
        ${page === "resume"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-blue-500"}
      `}
              >
                <CiViewList className="text-2xl" />
                <span className="text-sm font-medium">Resume</span>
              </button>

              {/* Projects */}
              <button
                onClick={() => setPage("projects")}
                className={`w-full flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition
        ${page === "projects"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-blue-500"}
      `}
              >
                <FaSuitcase className="text-2xl" />
                <span className="text-sm font-medium">Projects</span>
              </button>

              {/* Contact */}
              <button
                onClick={() => setPage("contact")}
                className={`w-full flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition
        ${page === "contact"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-blue-500"}
      `}
              >
                <RiContactsBookFill className="text-2xl" />
                <span className="text-sm font-medium">Contact</span>
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9211914721?text=hi"
        target="_blank"
        className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full p-3 shadow-xl hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          className="w-12 h-12"
        />
      </a>
    </>
  )
}





