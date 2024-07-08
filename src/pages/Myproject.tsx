import { useEffect, useState, useContext } from "react"
import { ConfigProvider, Divider } from "antd"
import PokexImg from '../assets/imgs/pokedex.png'
import PreviewProject from "../components/PreviewProject"
import { RiExternalLinkFill } from "react-icons/ri";
import { ThemeContext } from "../utils/context/ThemeStore";
import { Link } from "react-router-dom";

const Myproject = () => {
  const { isDark } = useContext(ThemeContext)
  const [images, setImages] = useState<Object[]>([])
  useEffect(()=>{
    setImages([
      PokexImg
    ])
  }, [])

  return (
    <ConfigProvider theme={{
      
    }}>
      <Divider orientation="left">
        <span className="text-xl text-medium">
          MY PROJECT
        </span>
      </Divider>
      <div className="flex items-center w-full px-5">
        <div className={(isDark === 'dark' ? 'bg-zinc-900 text-gray-50' : 'bg-white text-zinc-900') + ' flex flex-col sm:flex-row border rounded-2xl'}>
          <PreviewProject images={images} cover={PokexImg}/>
          <div className="w-full max-w-92 flex justify-between flex-col">
            <div className="w-max">
              <p className="p-3 text-base"><span className="font-bold">Project : </span> Pokedex</p>
              <p className="p-3 text-base"><span className="font-bold">Stack : </span> ReactJS (Typescript), Tailwind CSS</p>
              <p className="p-3 text-base"><span className="font-bold">Library : </span> React Query, React Table, React Router Dom</p>            
            </div>
            <div className="w-full flex">
              <div className="w-auto badge badge-outline my-5 mx-5 p-5 justify-end flex">
                <Link to="https://pokedex-puce-nu.vercel.app/" target="_blank">
                  <p className="p-3 text-base hover:text-zinc-500 focus:text-zinc-500 flex gap-2 items-center">View My Project <RiExternalLinkFill/></p>            
                </Link>
              </div>
              <div className="w-auto badge badge-outline my-5 mx-5 p-5 justify-end flex">
                <Link to="https://github.com/jamesmhee/Pokedex" target="_blank">
                  <p className="p-3 text-base hover:text-zinc-500 focus:text-zinc-500 flex gap-2 items-center">View Github Project<RiExternalLinkFill/></p>            
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ConfigProvider>
  )
}

export default Myproject