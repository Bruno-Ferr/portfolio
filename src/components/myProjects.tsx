import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { useState } from "react";

type ProjectProps = {
  name: string
  description: string
  techs: string[]
  site: string
  github: string
  img: StaticImageData
  date: string
}

interface MyProjectProps {
  project: ProjectProps,
  dictionary: any
}

export default function MyProject({project, dictionary}: MyProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  console.log(project)
  console.log(dictionary)

  return (
    <motion.div 
      viewport={{ once: true }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{y: 0, opacity: 1, offset: ["end end", "end end"]}}
      transition={{duration: 0.5, delay:0.25}}
      key={project.github}
    >
      <div className="relative p-6 rounded-lg flex flex-col justify-between bg-surface-primary hover:border hover:border-brand-secondary shadow-none hover:shadow-primary ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-96 h-82 flex flex-col items-center">
          <Image src={project.img} alt="project-image" height={160} width={384} className="rounded-t-lg" />
          <div>
            <div className="flex justify-between my-4">
              <p>{project.date}</p>
              <p></p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-start">{project.name}</h2>
              <p className="text-start">{dictionary.Projects[project.name].description}</p>
            </div>
          </div>
        </div>
        <div className={`absolute flex flex-col gap-2 right-5 ${isHovered ? 'opacity-1' : 'opacity-0'}`}>
          <Link href={project.github} className="bg-surface-background p-3 rounded-md">
            <GithubLogo size={24} />
          </Link>
          <Link href={project.site} className="bg-surface-background p-3 rounded-md">
            <ArrowUpRight size={24} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}