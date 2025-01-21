"use client"
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate, useInView, usePresence, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { AnimatedText } from "@/components/animations/typpingText";
import node from '@/icon _nodejs_.svg'
import react from '@/icon _react_.svg'
import angular from '@/icons8-angular-100.png'
import java from '@/icons8-java-100.png'
import typescript from '@/icons8-typescript.png'
import mysql from '@/icon _MySQL_.svg'
import tailwind from '@/icon _tailwindcss_.svg'
import mongo from '@/icons8-mongo-db.png'
import aws from '@/icons8-aws.png'
import docker from '@/icons8-docker.png'
import bro from '@/bro.png'
import aposentaEu from '@/AposentaEu-login.png'
import Loyalty from '@/Loyalty.png'
import Bujo from '@/BuJo.jpeg'
import en from '@/../messages/en.json'
import es from '@/../messages/es.json'
import pt from '@/../messages/pt.json'
import SkillBox from "@/components/skillsBox";
import MyProject from "@/components/myProjects";
import { ArrowUpRight, EnvelopeSimple, FileText, GithubLogo, Globe, LinkedinLogo, TelegramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { Locale } from "../../../i18n.config";
import { getDictionary } from "../../../get-dictionary";
import LocaleSwitcher from "@/components/localeSwitcher";

const skillList = [{
  image: node,
  skillName: 'Node.js',
  isVertical: true
},{
  image: react,
  skillName: 'React',
  isVertical: false
},{
  image: angular,
  skillName: 'Angular',
  isVertical: true
},{
  image: typescript,
  skillName: 'Typescript',
  isVertical: false
},{
  image: mysql,
  skillName: 'MySQL',
  isVertical: true
},{
  image: tailwind,
  skillName: 'Tailwind',
  isVertical: false
}, {
  image: java,
  skillName: 'Java',
  isVertical: true
}, {
  image: mongo,
  skillName: 'Mongo DB',
  isVertical: false
}, {
  image: aws,
  skillName: 'AWS',
  isVertical: true
}, {
  image: docker,
  skillName: 'Docker',
  isVertical: false
},
]

const myProjects = [{
  name: "AposentaEu",
  description: "Project to calculate social security. Integrated with login, authorization and payment system.",
  techs: ["Typescript", "Node", "MySQL"],
  date: "Mar - 24",
  site: "https://aposentaeu.com.br/",
  github: "https://github.com/Bruno-Ferr/aposentaEuClient",
  img: aposentaEu,
}, {
  name: "Amaz",
  description: "Web3 project within a smart contract, ERC20Token, cripto payments and loyalty reward system.",
  techs: ["Next.js", "Solidity"],
  date: "Jun - 24",
  site: "",
  github: "https://github.com/Bruno-Ferr/AmazRecreated",
  img: Loyalty,
}, {
  name: "BuJo",
  description: "ToDo list project, inspired by the personal organization method called Bullet journal developed by Ryan Carroll. Using microservices architect.",
  techs: ["Angular.js", "Nest.js", "Java", "Kafka", "Docker"],
  date: "Jan - 25",
  site: "",
  github: "https://github.com/Bruno-Ferr/tasksysteminterface",
  img: Bujo,
}]

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const [t, setT] = useState<any>(null)
  function copyText(entryText: string){
    navigator.clipboard.writeText(entryText);
    toast.success('E-mail copied to clipboard', { theme: 'colored', position: 'bottom-center' })
  }
  useEffect(() => {
    async function callDictionary() {
      const a = await getDictionary(lang);
      setT(a)
    }

    callDictionary()
  })
  

  // const pathName = usePathname();
  // const redirectedPathName = (locale: Locale) => {
  //   if (!pathName) return "/";
  //   const segments = pathName.split("/");
  //   segments[1] = locale;
  //   return segments.join("/");
  // };
  function handleChangeLang() {

  }

  if(t === null) {
    return (
      <div>
        Waiting...
      </div>
    )
  }

  return (
    <main>
      <div className="background w-full h-screen bg-no-repeat bg-cover flex items-center relative">
        <button className="absolute flex items-center text-lg top-5 right-4 md:right-8 lg:right-[20rem]">
          <Globe size={28} /> | {lang}
        </button>
        <LocaleSwitcher lang={lang} />
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
            <AnimatedText once text={t?.Hero?.title} el="h2" className="text-6xl font-semibold text-white font-spaceGrotesk" />
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
      {/*######################### About me ######################### */}
      <div className="w-full bg-neutral-900 bg-no-repeat bg-cover text-white">
        <div className="max-w-screen-xl m-auto">
          <div className="flex py-4 md:py-14 lg:py-28 justify-between gap-28">
            <Image src={bro} alt="hands-typing" height={417} width={488} />
            <div className="w-full">
              <div>
                <p className="text-brand-secondary">{t.About.title}</p>
                <h3 className="font-semibold text-3xl mt-2 mb-4">{t.About.aboutMe}</h3>
                <p>{t.About.text}</p>
              </div>
              <button className="flex mt-8 gap-2 bg-brand-primary_500 p-4 rounded-md">
                {t.About.resume} <FileText size={22} />
              </button>
            </div>
          </div>
        </div>
      </div> 
      {/*######################### Skills ######################### */}
      <div className="w-full bg-surface-background bg-no-repeat bg-cover text-white">
        <div className="max-w-screen-xl m-auto">
          <div className="relative w-fit m-auto md:m-0">
            <motion.div 
              viewport={{ once: true, amount: .9 }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{x: 0, opacity: 1, offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <h2 className="font-bold items-center text-7xl lg:text-[140px] uppercase text-surface-secondary leading-none">{t.Skills.title}</h2>
            </motion.div>
          </div>
          <div className="flex p-4 md:p-14 lg:p-28 justify-center">
            <div className="grid grid-cols-5 gap-2 lg:gap-6 items-center max-w-screen-lg m-2 md:m-auto">
              {skillList.map((skill, index) => {
                const additionalClass = index == 5 ? "" : "";
                return (
                  <SkillBox image={skill.image} skillName={skill.skillName} isVertical={skill.isVertical} additionalClass={additionalClass}/>
                )
              })}
            </div>
          </div>
        </div>
      </div> 
      {/*######################### Projects ######################### */}
      <div className="relative w-full bg-neutral-900 py-8 text-center text-white">
        <div className="max-w-screen-xl m-auto">
          <div className="relative w-fit m-auto md:m-0">
            <motion.div 
              viewport={{ once: true }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{x: 0, opacity: 1, offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <h2 className="font-bold items-center text-7xl lg:text-[140px] uppercase text-neutral-700 leading-none font-inter">{t.Projects.title}</h2>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-8">
            {myProjects.map(project => {
                return (
                  <MyProject project={project} key={project.github} dictionary={t} />
                )
              })
            }
          </div>
        </div>
      </div> 
      {/*######################### Contact Me ######################### */}
      <div className="relative w-full h-[32rem] bg-surface-background bg-center bg-no-repeat text-center text-white flex items-center">
        <div className="max-w-screen-xl w-full m-auto">
          <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              viewport={{ once: true }}
              whileInView={{x: [-100, 0], opacity: [0, 1], offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <h2 className="font-bold text-7xl md:text-[100px] uppercase text-surface-secondary leading-none font-inter">{t.Contact.text}</h2>
            </motion.div>
            <motion.div 
              viewport={{ once: true }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{y: 0, opacity: 1, offset: ["end end", "end end"]}}
              transition={{duration: 0.5, delay:0.25}}
            >
              <div className="socialMedia w-40 h-40 mt-8 md:mt-0 grid grid-cols-3 grid-rows-3 justify-center border border-purple-600 rounded-full">
                <Link href={'https://github.com/Bruno-Ferr'} className="ml-2 mt-2 col-start-2">
                  <GithubLogo size={40} />
                </Link>
                <Link href={'https://www.linkedin.com/in/bruno-ferreira-346446196/'} className="ml-2 mt-2 row-start-2">
                  <LinkedinLogo size={40}  />
                </Link>
                <Link href={'https://wa.me/5511942983604'} className="ml-2 mt-2 row-start-2 col-start-3">
                  <WhatsappLogo size={40}  />   
                </Link>
                <button onClick={() => copyText('fbruno233@gmail.com')} className="ml-2 mt-2 row-start-3 col-start-2">
                  <EnvelopeSimple size={40}  />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

