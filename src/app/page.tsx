"use client"
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate, useInView, usePresence, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react";
import { AnimatedText } from "@/components/animations/typpingText";
import img1 from '@/../public/icon _next js_.png'
import img2 from '@/../public/icon _nodejs_.svg'
import img3 from '@/../public/icon _react_.svg'
import img4 from '@/../public/icon _solidity_.svg'
import img5 from '@/../public/icon_typescript.png'
import img6 from '@/../public/icon _MySQL_.svg'
import img7 from '@/../public/icon _tailwindcss_.svg'
import img8 from '@/../public/icon _ethereum_.svg'

export default function Home() {
  


  return (
    <main>
      <div className="background w-full h-screen bg-no-repeat bg-cover flex items-center">
        <div className="max-w-screen-xl m-auto">
          <div className="h-fit w-fit py-8 px-36 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-5"> 
            <motion.div
               initial={{x: -20, opacity: 0}}
               viewport={{ once: true }}
               animate={{x: 0, opacity: 1}}
               transition={{duration: .75, delay: 0.2}}
            >
              <div className="bg-gradient-to-tr from-red-700 to-fuchsia-700 space-y w-fit p-1 rounded-full mb-8">
                <div className="bg-indigo-950 backdrop-filter backdrop-blur-2xl w-fit p-1 rounded-full">
                    <Image height={72} width={72} className="rounded-full" src="https://www.github.com/bruno-ferr.png" alt="Perfil" /> 
                </div>
              </div>
            </motion.div>
            <AnimatedText once text={`Hi, I'm Bruno Ferreira Web3 fullstack developer`} el="h2" className="text-6xl font-semibold text-white font-spaceGrotesk" />
            <motion.div
               initial={{y: 20, opacity: 0}}
               viewport={{ once: true }}
               animate={{y: 0, opacity: 1}}
               transition={{duration: .75, delay: 0.2}}
            >
              <div className="flex mt-6 gap-3 text-gray-300">
                <p>São Paulo, Brasil</p>
                <div className="w-[1px] bg-white rounded-lg"></div>
                <p>+55 (11) 94298-3604</p>
                <div className="w-[1px] bg-white rounded-lg"></div>
                <p>fbruno233@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-1/3"></div> 
      </div>
      <div className="relative w-full bg-neutral-900 bg-no-repeat bg-cover text-white">
        <div className="max-w-screen-xl m-auto">
          <div className="relative w-fit">
            <motion.div 
              viewport={{ once: true }}
              animate={{x: [-100, 0], opacity: [0, 1], offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <h2 className="font-bold text-[140px] uppercase text-neutral-800 leading-none">Skills</h2>
              <p className="absolute bottom-0 right-0 mb-6 mr-4 text-xl font-medium text-neutral-200">My focused technologies</p>
            </motion.div>

          </div>
          <div className="flex p-28 justify-center">
            <div className="grid grid-cols-5 gap-6 items-center max-w-screen-lg m-auto">
              <div className="relative">
                <div className="border rounded-lg w-36 h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
                  <Image height={72} width={72} src={img1} alt="next.js icon" />
                  <p className="text-lg font-semibold absolute uppercase">Next.js</p>
                </div>
                <motion.div
                  variants={{
                    hidden: { left: 0 },
                    visible: { left: "-100%"}
                  }}
                  initial={{left: 0, width: "100%"}}
                  animate={{width: "0%", transitionEnd: {display: "none", opacity: 0}}}
                  transition={{
                    duration: 0.5, ease: 'easeIn'
                  }}
                  
                  className="absolute top-0 bg-purple-700 w-36 h-28"
                />
              </div>
              <div className="border rounded-lg w-36 h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
                <Image height={72} width={72} src={img2} alt="next.js icon" />
                <p className="text-lg font-semibold absolute uppercase">Node.js</p>
              </div>
              <div className="border rounded-lg w-36 h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
                <Image height={72} width={72} src={img3} alt="next.js icon" />
                <p className="text-lg font-semibold absolute uppercase">React</p>
              </div>
              <div className="border rounded-lg w-36 h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
                <Image height={52} width={52} src={img4} alt="next.js icon" />
                <p className="text-lg font-semibold absolute uppercase">Solidity</p>
              </div>
              <div className="border rounded-lg w-36 h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
                <Image height={72} width={72} src={img5} alt="next.js icon" />
                <p className="text-lg font-semibold absolute uppercase">Typescript</p>
              </div>
              <div></div>
              <div className="border rounded-lg w-36 h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
                <Image height={72} width={72} src={img6} alt="next.js icon" />
                <p className="text-lg font-semibold absolute uppercase">MySQL</p>
              </div>
              <div className="border rounded-lg w-36 h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
                <Image height={72} width={72} src={img7} alt="next.js icon" />
                <p className="text-lg font-semibold absolute uppercase">Tailwind</p>
              </div>
              <div className="border rounded-lg w-36 h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
                <Image height={52} width={52} src={img8} alt="next.js icon" />
                <p className="text-lg font-semibold absolute uppercase">Ethereum</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="relative w-full h-screen bg-black bg-no-repeat bg-cover text-center text-white">
        <div className="max-w-screen-xl m-auto">
          <div className="relative w-fit">
          <motion.div 
            viewport={{ once: true }}
            whileInView={{x: [-100, 0], opacity: [0, 1], offset: ["end end", "end end"]}}
            transition={{duration: 0.5, delay:0.25}}
          >
            <h2 className="font-bold text-[140px] uppercase text-neutral-800 leading-none font-inter">Projects</h2>
            <p className="absolute bottom-0 right-0 mb-6 mr-4 text-xl font-medium text-neutral-200">Take a look at my projects</p>
          </motion.div>
          </div>
          <div className="flex items-center justify-center mt-12 gap-3">
            <div className="p-4 border max-w-sm">
              <Image height={16} width={16} className="w-72 h-56 " src="" alt="" />
              <div className="text-start mt-4">
                <h3 className="text-lg font-semibold">AposentaEu</h3>
                <p>A project to calculate social previdence. Create from scratch, integrated with payment system.</p>
              </div>
              <div className="flex mt-4 gap-2">
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Next.js</p>
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Node.js</p>
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Postgress</p>
              </div>
              <div className="mt-8">
                <button className="rounded-sm border border-gray-500 bg-gradient-to-br from-blue-300 to-violet-600 px-10 py-2">Visit Site</button>
                <Link href='/' className="px-10 py-2">Code</Link>
              </div>
            </div>
            <div className="p-4 border max-w-sm">
              <Image height={16} width={16} className="w-72 h-56 " src="" alt="" />
              <div className="text-start mt-4">
                <h3 className="text-lg font-semibold">AposentaEu</h3>
                <p>A project to calculate social previdence. Create from scratch, integrated with payment system.</p>
              </div>
              <div className="flex mt-4 gap-2">
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Next.js</p>
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Node.js</p>
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Postgress</p>
              </div>
              <div className="mt-8">
                <button className="rounded-sm border border-gray-500 bg-gradient-to-br from-blue-300 to-violet-600 px-10 py-2">Visit Site</button>
                <Link href={'/'} className="px-10 py-2">Code</Link>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </main>
  );
}


{/* <div className="relative w-full h-screen bg-black bg-no-repeat bg-cover text-center text-white">
        <div className="max-w-screen-xl m-auto">
          <div className="relative w-fit">
            <h2 className="font-bold text-[140px] uppercase text-neutral-800 leading-none">Projects</h2>
            <p className="absolute bottom-0 right-0 mb-6 mr-4 text-xl font-medium text-neutral-200">Take a look at my projects</p>
          </div>
          <div className="flex items-center justify-center mt-12 gap-3">
            <div className="p-4 border max-w-sm">
              <Image height={16} width={16} className="w-72 h-56 " src="./public/user.jpg" alt="">
              <div className="text-start mt-4">
                <h3 className="text-lg font-semibold">AposentaEu</h3>
                <p>A project to calculate social previdence. Create from scratch, integrated with payment system.</p>
              </div>
              <div className="flex mt-4 gap-2">
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Next.js</p>
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Node.js</p>
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Postgress</p>
              </div>
              <div className="mt-8">
                <button className="rounded-sm border border-gray-500 bg-gradient-to-br from-blue-300 to-violet-600 px-10 py-2">Visit Site</button>
                <a className="px-10 py-2">Code</a>
              </div>
            </div>
            <div className="p-4 border max-w-sm">
              <Image height={16} width={16} className="w-72 h-56 " src="./public/user.jpg" alt="">
              <div className="text-start mt-4">
                <h3 className="text-lg font-semibold">AposentaEu</h3>
                <p>A project to calculate social previdence. Create from scratch, integrated with payment system.</p>
              </div>
              <div className="flex mt-4 gap-2">
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Next.js</p>
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Node.js</p>
                <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">Postgress</p>
              </div>
              <div className="mt-8">
                <button className="rounded-sm border border-gray-500 bg-gradient-to-br from-blue-300 to-violet-600 px-10 py-2">Visit Site</button>
                <a className="px-10 py-2">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}