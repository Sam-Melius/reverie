"use client";

import Image from "next/image";

export default function Amada() {
  return (
    <section className="w-full min-h-screen  flex justify-center items-start pt-24 px-4">
      <div className="relative w-full max-w-4xl">
        <Image
          src="/Amada.png"
          alt="Amada Conference Flyer"
          width={1654} // Replace with your actual image width in pixels
          height={2339} // Replace with your actual image height in pixels
          quality={100}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function AmadaConferencePage() {
//   return (
//     <main className="bg-white text-[#111] font-sans overflow-hidden relative">
//       {/* Top layered blue banners */}
//       <motion.div
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.1, duration: 0.6 }}
//         className="h-24 w-full bg-gradient-to-tr from-[#0071e3] via-[#00bfff] to-[#00e5ff]"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
//         }}
//       />
//       <motion.div
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="h-20 w-full bg-gradient-to-tr from-[#00bfff] to-[#0071e3]"
//         style={{
//           clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
//         }}
//       />

//       {/* Left and Right edge blue strips */}
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}

//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="hidden md:block absolute top-40 left-0 h-96 w-10 bg-gradient-to-b from-[#00bfff] to-[#0071e3]"
//         style={{
//           clipPath: "polygon(100% 0, 100% 100%, 0 85%, 0 15%)",
//         }}
//       />
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         className="hidden md:block absolute top-40 right-0 h-96 w-10 bg-gradient-to-b from-[#00e5ff] to-[#0071e3]"
//         style={{
//           clipPath: "polygon(0 0, 0 100%, 100% 85%, 100% 15%)",
//         }}
//       />

//       <section className="max-w-4xl mx-auto px-6 py-12 relative z-10">
//         {/* Logo & Tagline */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="mb-8 flex flex-col items-center"
//         >
//           <Image
//             src="/ReverieLogo.png"
//             alt="Reverie Tech Solutions Logo"
//             width={260}
//             height={100}
//             priority
//           />
//           <p className="text-sm text-gray-600 mt-2 text-center">
//             Your 24/7 Help Desk for Senior Care Excellence
//           </p>
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="text-3xl font-semibold text-center mb-6"
//         >
//           AMADA CONFERENCE 2025!
//         </motion.h1>

//         {/* WHY CHOOSE */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="mb-8"
//         >
//           <h2 className="text-xl font-bold mb-4">WHY CHOOSE REVERIE TECH SOLUTIONS?</h2>
//           <ul className="list-none space-y-4">
//             <li>
//               🕒 <strong>Rapid Issue Resolution:</strong> We resolve 90% of support tickets within 30 minutes,
//               minimizing downtime and keeping your caregivers focused on client care.
//             </li>
//             <li>
//               💡 <strong>Caregiver & Staff Assistance:</strong> From software glitches to hardware troubleshooting,
//               we support your team with clear, compassionate guidance, reducing stress and boosting efficiency.
//             </li>
//             <li>
//               📈 <strong>Scalable Solutions:</strong> Whether you operate one location or a multi-state franchise,
//               our help desk services scale to meet your needs.
//             </li>
//             <li>
//               🧩 <strong>Seamless Integration:</strong> We work with your existing platforms, providing tailored
//               support for tools you use every day, ensuring smooth training and operations.
//             </li>
//           </ul>
//         </motion.div>

//         {/* COMMITMENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7, duration: 0.5 }}
//           className="mb-8"
//         >
//           <h2 className="text-xl font-bold mb-2">OUR COMMITMENT TO AMADA SENIOR CARE:</h2>
//           <p>
//             We understand the demands of delivering compassionate, non-medical in-home care and navigating
//             senior housing solutions. Our help desk ensures your technology runs flawlessly, allowing you to
//             focus on enriching lives and growing your franchise network.
//           </p>
//         </motion.div>

//         {/* CONNECT */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//           className="mb-12"
//         >
//           <h2 className="text-xl font-bold mb-4">CONNECT WITH US</h2>
//           <p className="mb-4">
//             Visit us at our booth at the Amada Senior Care Conference 2025 to see how we can support your
//             franchise.{" "}
//             <strong>
//               If you sign up at the conference, we are waiving any implementation fees
//             </strong>{" "}
//             <em>(value savings of up to $1,500)</em>!
//           </p>
//           <ul className="mb-4 space-y-1">
//             <li><strong>Email:</strong> sales@reverietech.com</li>
//             <li><strong>Phone:</strong> (817) 730-5600</li>
//             <li><strong>Website:</strong> www.reverietech.com</li>
//           </ul>
//           <p>
//             Schedule a Free Consultation Today! Partner with Reverie Tech Solutions for 24/7 help desk support
//             that keeps your Amada Senior Care franchise thriving.
//           </p>
//         </motion.div>
//       </section>

//       {/* Bottom layered blue banners */}
//       <motion.div
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         className="h-24 w-full bg-gradient-to-tl from-[#0071e3] via-[#00bfff] to-[#00e5ff]"
//         style={{
//           clipPath: "polygon(100% 100%, 0 100%, 15% 0, 100% 0)",
//         }}
//       />
//       <motion.div
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.7, duration: 0.6 }}
//         className="h-20 w-full bg-gradient-to-tl from-[#00bfff] to-[#0071e3]"
//         style={{
//           clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
//         }}
//       />
//     </main>
//   );
// }





