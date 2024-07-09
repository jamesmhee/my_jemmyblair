import { Divider } from "antd"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaBootstrap, FaGithubAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiJquery, SiPrisma, SiMysql, SiMongodb, SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";


const MySkills = () => {
  return (
    <div className='w-full'>
        <Divider orientation="left">
            <span className="text-xl text-medium">
            MY SKILLS
            </span>
        </Divider>
        <div className="flex flex-col w-full px-5 gap-10">
            <div className="flex flex-col gap-5 sm:flex-row w-full justify-between">
                <b className="w-full max-w-[200px] badge badge-outline p-5 text-lg uppercase sm:ml-6">Front End</b>                
                <div className="w-full flex gap-y-5 items-center justify-end flex-wrap gap-5">
                    <div className="badge badge-lg bg-orange-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaHtml5 className="text-2xl"/>
                        HTML5
                    </div>
                    <div className="badge badge-lg bg-blue-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaCss3Alt className="text-2xl"/>
                        CSS3
                    </div>
                    <div className="badge badge-lg bg-blue-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiTailwindcss className="text-2xl"/>
                        Tailwind CSS
                    </div>
                    <div className="badge badge-lg bg-blue-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <AiOutlineAntDesign className="text-2xl"/>
                        AntDesign
                    </div>
                    <div className="badge badge-lg bg-violet-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaBootstrap className="text-2xl"/>
                        Bootstrap
                    </div>
                    <div className="badge badge-lg bg-yellow-400 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <IoLogoJavascript className="text-2xl"/>
                        JavaScript
                    </div>
                    <div className="badge badge-lg bg-blue-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiTypescript className="text-2xl"/>
                        TypeScript
                    </div>
                    <div className="badge badge-lg bg-blue-700 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaReact className="text-2xl"/>
                        ReactJS
                    </div>
                    <div className="badge badge-lg bg-blue-700 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaReact className="text-2xl"/>
                        React Native
                    </div>
                    <div className="badge badge-lg bg-blue-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiJquery className="text-2xl"/>
                        jQuery
                    </div>                    
                </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row w-full justify-between">
                <b className="w-full max-w-[200px] badge badge-outline p-5 text-lg uppercase sm:ml-6">Back End</b>                
                <div className="w-full flex gap-y-5 items-center justify-end flex-wrap gap-5">
                    <div className="badge badge-lg bg-lime-600 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaNodeJs className="text-2xl"/>
                        NodeJS
                    </div>
                    <div className="badge badge-lg bg-zinc-600 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiExpress className="text-2xl"/>
                        ExpressJS
                    </div>
                    <div className="badge badge-lg bg-blue-800 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiPostgresql className="text-2xl"/>
                        PostgreSQL
                    </div>
                    <div className="badge badge-lg bg-slate-800 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiMysql className="text-2xl"/>
                        MySQL
                    </div>
                    <div className="badge badge-lg bg-lime-600 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiMongodb className="text-2xl"/>
                        MongoDB
                    </div>
                    <div className="badge badge-lg bg-zinc-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiPrisma className="text-2xl"/>
                        Prisma
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row w-full justify-between">
                <b className="w-full max-w-[200px] badge badge-outline p-5 text-lg uppercase sm:ml-6">Other Skills</b>                
                <div className="w-full flex gap-y-5 items-center justify-end flex-wrap gap-5">                    
                    <div className="badge badge-lg bg-orange-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaGitAlt className="text-2xl"/>
                        Git
                    </div>
                    <div className="badge badge-lg bg-violet-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaGithubAlt className="text-2xl"/>
                        GitHub
                    </div>
                    <div className="badge badge-lg bg-blue-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <FaDocker className="text-2xl"/>
                        Docker
                    </div>
                    <div className="badge badge-lg bg-orange-500 text-white border-none p-5 flex gap-2 text-lg items-center">
                        <SiPostman className="text-2xl"/>
                        Postman
                    </div>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default MySkills