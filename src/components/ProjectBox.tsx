import PreviewProject from "./PreviewProject";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RiExternalLinkFill } from "react-icons/ri";
import { ThemeContext } from "../utils/context/ThemeStore";

interface IProjectBoxProps {
  images: string[];
  cover: string;
  project_name: string;
  project_stack: string;
  project_lib: string;
  link: string;
  github: string;
}

const ProjectBox = ({
  images,
  cover,
  project_name,
  project_stack,
  project_lib,
  link,
  github,
}: IProjectBoxProps) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <div className="card lg:card-side shadow-xl">
        <figure>
          <PreviewProject images={images} cover={cover} />
        </figure>
        <div className={
            (isDark === "dark"
              ? "bg-zinc-900 text-zinc-50"
              : "bg-zinc-100 text-zinc-900") +
            " lg:rounded-r-2xl rounded-b-2xl lg:rounded-bl-none"
          }
        >
          <div className="w-full max-w-[500px] flex justify-between flex-col h-full">
            <div className="w-full overflow-x">
              <p className="p-3 text-base break-words w-full sm:w-max lg:w-full">
                <span className="font-bold">Project : </span> {project_name}
              </p>
              <p className="p-3 text-base break-words w-full sm:w-max lg:w-full">
                <span className="font-bold">Stack : </span> {project_stack}
              </p>
              <p className="p-3 text-base break-words w-full sm:w-max lg:w-full">
                <span className="font-bold">Library : </span> {project_lib}
              </p>
            </div>
            <div className="max-w-full flex flex-row flex-wrap sm:flex-nowrap gap-1 sm:gap-5 mx-5">
              <div className="w-max badge badge-outline my-5 p-5 justify-center sm:justify-end flex">
                <Link to={link} target="_blank">
                  <p className="w-max p-3 lg:text-base hover:text-zinc-500 focus:text-zinc-500 flex gap-2 items-center">
                    View My Project <RiExternalLinkFill />
                  </p>
                </Link>
              </div>
              <div className="w-max badge badge-outline my-5 p-5 justify-center sm:justify-end flex">
                <Link to={github} target="_blank">
                  <p className="w-max p-3 lg:text-base hover:text-zinc-500 focus:text-zinc-500 flex gap-2 items-center">
                    View Github Project
                    <RiExternalLinkFill />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
