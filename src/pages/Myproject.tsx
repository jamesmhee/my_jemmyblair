import { useContext, useEffect, useState } from "react";
import { ConfigProvider, Divider } from "antd";
import { ThemeContext } from "../utils/context/ThemeStore";
import ProjectBox from "../components/ProjectBox";
// Pokemon
import PokexImg from "../assets/imgs/pokedex.png";
import PokeDex1 from "../assets/imgs/PokeDex1.png"
import PokeDex2 from "../assets/imgs/PokeDex2.png"
import PokeDex3 from "../assets/imgs/PokeDex3.png"

const Myproject = () => {
  const { isDark } = useContext(ThemeContext);
  const [ pokeDexImg, setPokeDexImg ] = useState<string[]>([])
  useEffect(()=>{
    setPokeDexImg([
      PokexImg,
      PokeDex1,
      PokeDex2,
      PokeDex3,
    ])
  }, [])

  return (
    <ConfigProvider theme={{}}>
      <Divider orientation="left">
        <span className="text-xl text-medium">MY PROJECT</span>
      </Divider>
      <div className="flex flex-col gap-5 items-center w-full px-5 my-5">
        {/* PokeDex */}
        <div
          className={
            (isDark === "dark"
              ? "bg-zinc-900 text-gray-50"
              : "bg-white text-zinc-900") +
            " flex rounded-2xl w-full h-max"
          }
        >
          <ProjectBox
            images={pokeDexImg}
            cover={PokexImg}
            project_name="Pokedex"
            project_stack="ReactJS (TypeScript), Tailwind CSS"
            project_lib="React Query, React Table, React Router Dom"
            link="https://pokedex-puce-nu.vercel.app/"
            github="https://github.com/jamesmhee/Pokedex"
          />
        </div>
        {/* End Pokedex */}
      </div>
    </ConfigProvider>
  );
};

export default Myproject;
