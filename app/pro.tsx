// "use client";

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// export default function PortfolioPage() {

//   useEffect(() => {
//     const link = document.createElement("a");
//     link.href = "/Juhi-Rani_Resume.pdf";
//     link.download = "Juhi-Rani_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();

//   }, []);
  
//   const skills = [
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "Postgres",
//     "Tailwind CSS",
//     "AWS",
//     "HTML",
//     "CSS",
//     "EC2",
//   ];

  
//   const projects = [
//     {
//     id: 1,
//     title: "SUPERPROF",
//     desc: "Travel Landing , UX/UI",
//     tags: ["Next.js", "Tailwind", "Stripe"],
//     image: "/superprof.co.in.png",   
//   },
   
//     {
//     id: 2,
//     title: "FISHYKART",
//     desc: "Travel Landing , UX/UI",
//     tags: ["Next.js", "Tailwind", "Stripe"],
//     image: "/fishykart.in.png",    
//   },


//     {
//     id: 3,
//     title: "WINNI",
//     desc: "Travel Landing , UX/UI",
//     tags: ["Next.js", "Tailwind", "Stripe"],
//     image: "/winni.in.png",    
//   },
//     {
//     id: 4,
//     title: "ABCCONSULTANTS",
//     desc: "Travel Landing , UX/UI",
//     tags: ["Next.js", "Tailwind", "Stripe"],
//     image: "/abcconsultants.in.png",  
//     }, 
//      {
//     id: 5,
//     title: "DLIFEINTERIORS",
//     desc: "Travel Landing , UX/UI",
//     tags: ["Next.js", "Tailwind", "Stripe"],
//     image: "/dlifeinteriors.com.png",    
//   },
//      {
//     id: 6,
//     title: "CLOVEDENTAL",
//     desc: "Travel Landing , UX/UI",
//     tags: ["Next.js", "Tailwind", "Stripe"],
//     image: "/clovedental.in.png",     
//   },
//   ];
//   const [status, setStatus] = useState("");

// const handleSubmit = async (e: any) => {
//   e.preventDefault();

//   setStatus("Sending...");

//   const formData = new FormData(e.target);

//   const res = await fetch("https://formsubmit.co/ajax/juhirani083@gmail.com", {
//     method: "POST",
//     body: formData
//   });

//   if (res.ok) {
//     setStatus("Message sent successfully!");
//     e.target.reset();
//   } else {
//     setStatus("Failed to send message.");
//   }
// };


  
//   return (
//     <div
//   className="min-h-screen bg-cover bg-center bg-no-repeat text-slate-900 antialiased"
//   style={{ backgroundImage: "url('/bg.jpg')" }}
// >
//       <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
//         <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
//           <a href="#hero" className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold">
//               JR
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-lg font-semibold">Juhi Rani</h1>
//               <p className="text-xs text-slate-500">Full-Stack Developer</p>
//             </div>
//           </a>

//           <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
//             <a href="#projects" className="hover:text-slate-900">
//               Projects
//             </a>
//             <a href="#about" className="hover:text-slate-900">
//               About
//             </a>
//             <a href="#skills" className="hover:text-slate-900">
//               Skills
//             </a>
//             <a href="#contact" className="hover:text-slate-900">
//               Contact
//             </a>
//             <a href="#" className="ml-2 px-3 py-1 rounded-md border text-sm">
//               Resume
//             </a>
//           </nav>

//           <div className="md:hidden">
//             <MobileMenu />
//           </div>
//         </div>
//       </header>

//       <main className="max-w-5xl mx-auto px-6 py-12">
//         {/* HERO */}
//         <section id="hero" className="grid gap-8 md:grid-cols-2 items-center">
//           <div>
//             <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
//               Hi, I'm Juhi — a Full-Stack Developer.
//             </h2>
//             <p className="mt-4 text-slate-600">
//               Full-Stack MERN Developer with extensive experience in JavaScript, React, Node.js, and MongoDB. Expert in designing and developing scalable web applications, enhancing user experience, and optimizing backend performance for high-traffic platforms.
//             </p>

//             <div className="mt-6 flex gap-3">
//               <a
//               href="/Juhi-Rani_Resume.pdf"
//               download="Juhi_Rani_Resume.pdf"
//               className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
//               >
//                 Download Resume
//                 </a>
//             </div>

//             <div className="mt-8 flex items-center gap-4">
//               <SocialIcon label="github" href="#">
//                 {githubSvg}
//               </SocialIcon>

//               <SocialIcon label="linkedin" href="#">
//                 {linkedinSvg}
//               </SocialIcon>

//               <SocialIcon label="twitter" href="#">
//                 {twitterSvg}
//               </SocialIcon>
//               <a
//               href="https://wa.me/7766043850?text=hi"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="fixed bottom-5 right-5 z-50 bg-green-500 rounded-full p-3 shadow-xl hover:scale-110 transition-transform"
//               >
//                 <img
//                 src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//                 alt="WhatsApp icon"
//                 className="w-12 h-12"
//                 />
//                 </a>

//             </div>
//           </div>
          
//           <div className="flex items-center justify-center">
//             <div
//             className="w-76 h-64 sm:w-82 sm:h-72 rounded-2xl bg-cover bg-center border flex items-center justify-center"
//             style={{ backgroundImage: "url('/download.jpg')" }}
//             >
              
//             </div>
//           </div>
//         </section>

//         {/* SKILLS */}
//         <section id="skills" className="mt-16">
//           <h3 className="text-xl font-semibold">Skills</h3>
//           <div className="mt-4 flex flex-wrap gap-3">
//             {skills.map((s) => (
//               <span key={s} className="px-3 py-1 rounded-full bg-white border text-sm">
//                 {s}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* PROJECTS */}
//         <section id="projects" className="mt-16">
//          <h3 className="text-2xl font-semibold">Selected Projects</h3>
//          <p className="mt-2 text-slate-600">
//           A few projects I've worked on — full-stack apps, dashboards and UI experiments.
//          </p>

//          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//          {projects.map((p: any) => (
//           <a
//             key={p.id}
//             href={p.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block rounded-xl bg-white p-4 border hover:shadow transition"
//           >
//             {/* Project Image */}
//             <div className="h-36 rounded-md overflow-hidden bg-slate-100">
//               <div className="w-full h-full overflow-x-hidden  overflow-y-auto">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="h-full object-contain"
//                   style={{ minWidth: "100%", minHeight: "800%", display: "block" }}
//                 />
//               </div>
//            </div>
//            <h4 className="mt-3 font-semibold text-lg">{p.title}</h4>
//            <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
             
//             <div className="mt-3 flex flex-wrap gap-2">
              
//               {p.tags.map((t: string) => (
//                 <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded-md">
//                   {t}
//                 </span>
//               ))}
          
//            </div>
            
//           </a>
          
//           ))}
//           </div>
//          </section>
//     {/* ABOUT */}
//         <section id="about" className="mt-16 grid md:grid-cols-3 gap-6">
//           <div className="md:col-span-2 bg-white p-6 rounded-xl border">
//             <h3 className="text-xl font-semibold">About me</h3>
//             <p className="mt-3 text-slate-600">
//               I'm a software engineer focused on building scalable full-stack applications.
//             </p>

//             <ul className="mt-4 space-y-2 text-sm text-slate-700">
//               <li>• 3+ years experience in full-stack development</li>
//               <li>• Strong with React, Node, and JavaScript/TypeScript</li>
//               <li>• Familiar with AWS, Docker, CI/CD</li>
//             </ul>
//           </div>
//         </section>
        
//         {/* CONTACT */}
//         <section id="contact" className="mt-16 grid md:grid-cols-2 gap-6 items-start">
//           <div className="bg-white p-6 rounded-xl border">
//             <h3 className="text-xl font-semibold">Contact</h3>
//             <p className="mt-2 text-slate-600">
//               Want to work together? Send me a message.
//             </p>
//             <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//       <input
//         name="name"
//         placeholder="Your name"
//         className="w-full border rounded-md px-3 py-2"
//         required
//       />

//       <input
//         name="email"
//         placeholder="Email"
//         className="w-full border rounded-md px-3 py-2"
//         required
//       />

//       <textarea
//         name="message"
//         placeholder="Message"
//         rows={5}
//         className="w-full border rounded-md px-3 py-2"
//         required
//       />

//       <button
//         type="submit"
//         className="px-4 py-2 rounded-md bg-indigo-600 text-white"
//       >
//         Send
//       </button>

//       <p className="text-sm mt-2">{status}</p>
//       </form>
//     </div>

//           <div className="bg-white p-6 rounded-xl border">
//             {/* <h4 className="font-semibold">Resume & Links</h4> */}
//             {/* <ul className="mt-3 text-sm text-slate-600 space-y-2">
//               <li>
//                 <a href="#" className="underline">
//                   Download resume (PDF)
//                 </a>
//               </li>
//             </ul> */}

//                     <div className="flex justify-center">
//                         <ul className="space-y-4">
//                             <li className="flex items-center space-x-3">
//                                 <div className="w-6 h-6 bg-[#F8AE07] flex justify-center items-center">
//                                     <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="24"
//   height="24"
//   viewBox="0 0 24 24"
//   fill="none"
//   stroke="currentColor"
//   strokeWidth="2"
//   strokeLinecap="round"
//   strokeLinejoin="round"
//   className="lucide lucide-phone h-4 w-4"
// >
//   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
// </svg>

//                                 </div>
//                                 <span className="text-slate-600">+91 123456789</span>
//                             </li>
//                             <li className="flex items-center space-x-3">
//                                 <div className="w-6 h-6 bg-[#F8AE07] flex justify-center items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-4 w-4">
//                                         <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//                                         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                                     </svg>
//                                 </div>
//                                 <span className="text-slate-600">juhirani083@gmail.com</span>
//                             </li>
//                             <li className="flex items-center space-x-3">
//                                 <div className="w-6 h-6 bg-[#F8AE07] flex justify-center items-center">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-4 w-4 ">
//                                         <circle cx="12" cy="12" r="10"></circle>
//                                         <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
//                                         <path d="M2 12h20"></path>
//                                     </svg>
//                                 </div>
                               
//                                 <span className="text-slate-600">Bihar India</span>
//                             </li>
//                         </ul>
//                     </div>
//           </div>
//         </section>
//       </main>

//       <footer className="border-t">
//         <div className="max-w-5xl mx-auto px-6 py-6 text-sm text-slate-600 flex items-center justify-between">
//           <div>© {new Date().getFullYear()} All Rights Reserved by Juhi Rani</div>
//           <div className="hidden sm:block">Made with Juhi</div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// /* COMPONENTS */
// function MobileMenu() {
//   return (
//     <details className="relative">
//       <summary className="cursor-pointer px-3 py-2 rounded-md border">Menu</summary>
//       <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border p-3">
//         <a href="#projects" className="block py-1">
//           Projects
//         </a>
//         <a href="#about" className="block py-1">
//           About
//         </a>
//         <a href="#skills" className="block py-1">
//           Skills
//         </a>
//         <a href="#contact" className="block py-1">
//           Contact
//         </a>
//       </div>
//     </details>
//   );
// }

// function SocialIcon({
//   children,
//   href,
//   label,
// }: {
//   children: React.ReactNode;
//   href?: string;
//   label: string;
// }) {
//   return (
//     <a
//       href={href}
//       aria-label={label}
//       className="inline-flex items-center justify-center w-10 h-10 rounded-md border bg-white"
//     >
//       <span className="w-5 h-5">{children}</span>
//     </a>
//   );
// }

// /* SVG ICONS */
// const githubSvg = (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.235-3.221-.123-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.241 2.872.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.48 5.921.43.372.814 1.103.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
//   </svg>
// );

// const linkedinSvg = (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
//     <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0zM8.5 8.98h4.78v2.06h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.32 6 7.64V24h-5V16.7c0-1.74-.03-3.98-2.42-3.98-2.42 0-2.79 1.88-2.79 3.82V24h-5z" />
//   </svg>
// );

// const twitterSvg = (
//   <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
//     <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.083-.205-7.699-2.158-10.126-5.13-.422.724-.664 1.562-.664 2.457 0 1.697.863 3.195 2.175 4.075-.802-.026-1.558-.246-2.219-.616v.062c0 2.366 1.684 4.342 3.918 4.788-.41.111-.84.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.416-1.68 1.318-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
//   </svg>
// );