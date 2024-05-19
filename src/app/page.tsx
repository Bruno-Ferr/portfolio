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
import aposentaEu from '@/../public/AposentaEu-login.png'
import SkillBox from "@/components/skillsBox";
import MyProject from "@/components/myProjects";
import { EnvelopeSimple, GithubLogo, Globe, LinkedinLogo, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react";

const skillList = [{
  image: img1,
  skillName: 'Next.js',
  isVertical: false
},{
  image: img2,
  skillName: 'Node.js',
  isVertical: true
},{
  image: img3,
  skillName: 'React',
  isVertical: false
},{
  image: img4,
  skillName: 'Solidity',
  isVertical: true
},{
  image: img5,
  skillName: 'Typescript',
  isVertical: false
},{
  image: img6,
  skillName: 'MySQL',
  isVertical: true
},{
  image: img7,
  skillName: 'Ethereum',
  isVertical: false
},{
  image: img8,
  skillName: 'Tailwind',
  isVertical: true
},]

const myProjects = [{
  name: "AposentaEu",
  description: "A project to calculate social security. Create from scratch, integrated with payment system.",
  techs: ["Next.js", "Typescript", "Node", "MySQL", "Stripe"],
  site: "",
  github: "https://github.com/Bruno-Ferr/aposentaEuClient",
  img: aposentaEu,
}, {
  name: "Loyalty App",
  description: "A web3 project within a loyalty contract, E20Token created from scratch.",
  techs: ["Next.js", "Typescript", "Node", "Hardhat", "Solidity", "TailwindCSS"],
  site: "",
  github: "https://github.com/Bruno-Ferr/aposentaEuClient",
  img: aposentaEu,
}]

export default function Home() {
  return (
    <main>
      <div className="background w-full h-screen bg-no-repeat bg-cover flex items-center relative">
        <button className="absolute flex items-center text-lg top-5 right-4 md:right-8 lg:right-[20rem]">
          <Globe size={28} /> | EN
        </button>
        <div className="max-w-screen-xl m-auto">
          <div className="h-fit w-fit py-8 px-2 md:px-4 lg:px-36 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-5"> 
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
              <div className="flex flex-col md:flex-row mt-6 gap-3 text-gray-300">
                <p>São Paulo, Brasil</p>
                <div className="w-[1px] bg-white rounded-lg"></div>
                <p>+55 (11) 94298-3604</p>
                <div className="w-[1px] bg-white rounded-lg"></div>
                <p>fbruno233@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="lg:w-1/3"></div> 
      </div>
      {/*######################### Skills ######################### */}
      <div className="w-full bg-neutral-900 bg-no-repeat bg-cover text-white">
        <div className="max-w-screen-xl m-auto">
          <div className="relative w-fit m-auto md:m-0">
            <motion.div 
              viewport={{ once: true, amount: .9 }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{x: 0, opacity: 1, offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <h2 className="font-bold items-center text-7xl lg:text-[140px] uppercase text-neutral-800 leading-none">Skills</h2>
            </motion.div>
          </div>
          <div className="flex p-4 md:p-14 lg:p-28 justify-center">
            <div className="grid grid-cols-5 gap-2 lg:gap-6 items-center max-w-screen-lg m-2 md:m-auto">
              {skillList.map((skill, index) => {
                const additionalClass = index == 5 ? "col-start-2" : "";
                return (
                  <SkillBox image={skill.image} skillName={skill.skillName} isVertical={skill.isVertical} additionalClass={additionalClass}/>
                )
              })}
            </div>
          </div>
        </div>
      </div> 
      {/*######################### Projects ######################### */}
      <div className="relative w-full bg-black bg-no-repeat bg-cover text-center text-white">
        <div className="max-w-screen-xl m-auto">
          <div className="relative w-fit m-auto md:m-0">
            <motion.div 
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{x: 0, opacity: 1, offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <h2 className="font-bold items-center text-7xl lg:text-[140px] uppercase text-neutral-800 leading-none font-inter">Projects</h2>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-3">
            {myProjects.map(project => {
                return (
                  <MyProject project={project}  />
                )
              })
            }
          </div>
        </div>
      </div> 
      {/*######################### Contact Me ######################### */}
      <div className="relative w-full h-[32rem] bg-black bg-center bg-no-repeat text-center text-white flex items-center">
        <div className="max-w-screen-xl w-full m-auto">
          <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              viewport={{ once: true }}
              whileInView={{x: [-100, 0], opacity: [0, 1], offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <h2 className="font-bold text-7xl md:text-[100px] uppercase text-neutral-800 leading-none font-inter">Let's work <br />together</h2>
            </motion.div>
            <motion.div 
              viewport={{ once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{y: 0, opacity: 1, offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <div className="socialMedia w-40 h-40 mt-8 md:mt-0 grid grid-cols-3 grid-rows-3 justify-center border border-purple-600 rounded-full">
                <Link href={''} className="ml-2 mt-2 col-start-2">
                  <GithubLogo size={40} />
                </Link>
                <Link href={''} className="ml-2 mt-2 row-start-2">
                  <LinkedinLogo size={40}  />
                </Link>
                <Link href={''} className="ml-2 mt-2 row-start-2 col-start-3">
                  <WhatsappLogo size={40}  />   
                </Link>
                <Link href={''} className="ml-2 mt-2 row-start-3 col-start-2">
                  <EnvelopeSimple size={40}  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

