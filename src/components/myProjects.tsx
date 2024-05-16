import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectProps = {
  name: string
  description: string
  techs: string[]
  site: string
  github: string
  img: StaticImageData
}

interface MyProjectProps {
  project: ProjectProps
}

export default function MyProject({project}: MyProjectProps) {
  return (
    <div className="p-4 border max-w-sm h-[36rem] flex flex-col justify-between">
      <Image src={project.img} objectFit="contain" alt={project.name} />
      <div className="text-start mt-[-3rem]">
        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.techs.map((tech: string) => {
          return (
            <p className="py-[0.5px] px-2 bg-purple-400 bg-opacity-40 rounded-xl">{tech}</p>
          )
        })}
      </div>
      <div className="mt-8">
        <Link href={project.site} className="rounded-sm border border-gray-500 bg-gradient-to-br from-blue-300 to-violet-600 px-10 py-2">Visit Site</Link>
        <Link href={project.github} className="px-10 py-2">Code</Link>
      </div>
    </div>
  )
}