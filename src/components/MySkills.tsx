import { Divider } from "antd";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaBootstrap,
  FaGithubAlt,
  FaAssistiveListeningSystems,
  FaFigma,
  FaBusinessTime
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiJquery,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiFuturelearn,
  SiHiveBlockchain,
  SiFirebase
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { GiThink } from "react-icons/gi";
import { MdSupport } from "react-icons/md";
import { TbApi } from "react-icons/tb";

const MySkills = () => {
  return (
    <div className="w-full">
      <Divider orientation="left">
        <span className="text-xl text-medium">MY SKILLS</span>
      </Divider>
      <div className="flex flex-col w-full px-5 gap-10">
        <div className="flex flex-col gap-5 sm:flex-row w-full justify-between">
          <b className="w-full max-w-[200px] badge badge-outline p-5 text-lg uppercase sm:ml-6">
            Front End
          </b>
          <div className="w-full flex gap-y-5 items-center justify-center sm:justify-end flex-wrap gap-5">
            <div className="badge badge-lg bg-gradient-to-r from-orange-500 to-orange-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaHtml5 className="text-2xl" />
              HTML5
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaCss3Alt className="text-2xl" />
              CSS3
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiTailwindcss className="text-2xl" />
              Tailwind CSS
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <AiOutlineAntDesign className="text-2xl" />
              AntDesign
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-violet-500 to-violet-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaBootstrap className="text-2xl" />
              Bootstrap
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-yellow-400 to-yellow-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <IoLogoJavascript className="text-2xl" />
              JavaScript
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiTypescript className="text-2xl" />
              TypeScript
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiJquery className="text-2xl" />
              jQuery
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-700 to-blue-900 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaReact className="text-2xl" />
              React JS
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-700 to-blue-900 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaReact className="text-2xl" />
              React Native
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row w-full justify-between">
          <b className="w-full max-w-[200px] badge badge-outline p-5 text-lg uppercase sm:ml-6">
            Back End
          </b>
          <div className="w-full flex gap-y-5 items-center justify-center sm:justify-end flex-wrap gap-5">
            <div className="badge badge-lg bg-gradient-to-r from-lime-500 to-lime-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaNodeJs className="text-2xl" />
              Node JS
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiExpress className="text-2xl" />
              Express JS
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-700 to-blue-900 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiPostgresql className="text-2xl" />
              PostgreSQL
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-slate-500 to-slate-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiMysql className="text-2xl" />
              MySQL
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-lime-500 to-lime-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiMongodb className="text-2xl" />
              MongoDB
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiPrisma className="text-2xl" />
              Prisma
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiFirebase className="text-2xl" />
              Firebase
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <TbApi className="text-2xl" />
              RESTful API
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row w-full justify-between">
          <b className="w-full max-w-[200px] badge badge-outline p-5 text-lg uppercase sm:ml-6">
            Other Skills
          </b>
          <div className="w-full flex gap-y-5 items-center justify-center sm:justify-end flex-wrap gap-5">
            <div className="badge badge-lg bg-gradient-to-r from-orange-500 to-orange-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaGitAlt className="text-2xl" />
              Git
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-violet-500 to-violet-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaGithubAlt className="text-2xl" />
              GitHub
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaDocker className="text-2xl" />
              Docker
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-orange-500 to-orange-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiPostman className="text-2xl" />
              Postman
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-orange-600 via-violet-500 to-lime-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaFigma className="text-2xl" />
              Figma
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiHiveBlockchain className="text-2xl" />
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row w-full justify-between">
          <b className="w-full max-w-[200px] badge badge-outline p-5 text-lg uppercase sm:ml-6">
            Soft Skills
          </b>
          <div className="w-full flex gap-y-5 items-center justify-center sm:justify-end flex-wrap gap-5">
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <RiTeamFill className="text-2xl" />
              Teamwork Collabration
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <GiThink className="text-2xl" />
              Problem Solving
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaAssistiveListeningSystems className="text-2xl" />
              Active Listening
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaAssistiveListeningSystems className="text-2xl" />
              Active Listening
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <MdSupport className="text-2xl" />
              Support Others
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <SiFuturelearn className="text-2xl" />
              Learn new things
            </div>
            <div className="badge badge-lg bg-gradient-to-r from-zinc-500 to-zinc-700 text-white border-none p-5 flex gap-2 text-lg items-center">
              <FaBusinessTime className="text-2xl" />
              Manage time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
