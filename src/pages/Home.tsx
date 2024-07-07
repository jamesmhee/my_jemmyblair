import {createElement, useEffect, useRef, useState} from 'react'
import Profile from "../assets/imgs/arprofile-1b50e0eb.png";
import ModalBox from "../components/ModalBox";
import CV from "../components/CV";
import ResumeCV from "../assets/pdf/Nontasab Siangchin CV.pdf"
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation()
  const logoRef = useRef<any>(null)
  const [dot, setDot] = useState<boolean>(false)

  const downloadCV = () => {
    const btn:HTMLElement | null = document.querySelector("#downloadCV")
    btn?.click()
  };


  let i = 0
  const textTyping = () =>{
    const text = 'Nontasab Siangchin :)'    
    const textTimeout = setTimeout(textTyping, 100)    
    try{
      if(i < text.length){
        logoRef.current.innerHTML += text.charAt(i++)
      }else{
        setDot(true)
        clearTimeout(textTimeout)
      }
    }catch(error){
      clearTimeout(textTimeout)
    }
  }

  useEffect(()=>{
    textTyping()
  }, [])

  return (
    <>
      <div className="flex w-full h-full">
        <div className="hero bg-base-current min-h-max">
          <div className="hero-content w-screen flex-col lg:flex-row items-center justify-center h-screen">
            <img src={Profile} className="max-w-[18rem] sm:max-w-[20rem] lg:max-w-sm" />
            <div className="flex flex-col w-full mx-5 text-wrap">
              <div className='flex items-center max-w-max max-h-max flex-nowrap text-nowrap py-2'>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold" ref={logoRef}></h1>              
                {dot ? (<div className='text-dot text-2xl sm:text-5xl'>.</div>) : ''}                
              </div>
              <pre className="py-7 text-wrap">
                Hi I'm James. I was born on the 9th of August, 1999.
              </pre>
              <code className="pt-1 text-xs sm:text-medium">
                I'm graduated Information Technology major from King Mongkut's
                Institute of Technology Ladkrabang. I'm Web Developer, I prefer
                to design and develop the website or mobile-app almost frontend.
                I am extremely motivated to constantly develop my skills and
                grow professionally.
              </code>
              <div className="lg:ml-auto mt-10 lg:mt-20">
                <a id="downloadCV" className="hidden" href={ResumeCV} download></a>
                <ModalBox                  
                  onClick={downloadCV}                  
                  buttonWidth={"20rem"}
                  buttonHeight={"3rem"}
                  height={'100%'}
                  width={'100%'}
                  colorBorder={'#e3e3e3'}
                  defaultHoverBorderColor={'black'}                  
                  // hideButton
                  // loading                                    
                  type={"default"}
                  centered={true}
                  color={"black"}
                  buttonColor={"#96d7ff"}
                  buttonText={"VIEW MY CV"}
                  buttonFontSize={"14px"}
                  modalTitle={""}
                  modalTextContent={""}
                  okText={'Download MY CV'}
                  okType={'primary'}
                  colorPrimary={'#96d7ff'}
                  colorPrimaryHover={'#42b7ff'}                                                      
                  modalContent={<CV/>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
