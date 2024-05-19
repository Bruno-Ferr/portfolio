import {motion} from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface SkillBoxProps {
  image: StaticImageData
  skillName: string
  isVertical: boolean
  additionalClass: string
}

//Adicionar randomização para sair de qualquer lado

export default function SkillBox({image, skillName, isVertical, additionalClass}: SkillBoxProps) {
  return (
    <div className={`relative ${additionalClass}`} key={skillName}>
      <div className="border rounded-lg w-16 h-14 md:w-24 md:h-20 lg:w-36 lg:h-28 flex items-center justify-center text-transparent hover:bg-white hover:text-black relative">
        <Image className='h-9 w-9 md:h-10 md:w-10 lg:h-14 lg:w-14' src={image} alt={`${skillName} icon`} />
        <p className="text-lg font-semibold absolute uppercase">{skillName}</p>
      </div>
      <motion.div
        variants={{
            hiddenV: { width: "100%"},
            visibleV: { width: "0%", transitionEnd: {display: "none", opacity: 0}},
            hiddenH: { height: "100%"},
            visibleH: { height: "0%", transitionEnd: {display: "none", opacity: 0}},
        }}
        initial={isVertical ? "hiddenV" : "hiddenH"}
        whileInView={isVertical ? "visibleV" : "visibleH"}
        transition={{
          duration: 0.5, ease: 'easeIn'
        }}
        
        className="absolute top-0 rounded-md bg-gradient-to-tr from-purple-800 to-blue-300 w-16 h-14 md:w-24 md:h-20 lg:w-36 lg:h-28"
      />
    </div>
  )
}