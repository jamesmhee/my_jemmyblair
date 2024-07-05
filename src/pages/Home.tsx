import Profile from "../assets/imgs/arprofile-1b50e0eb.png";
import ModalBox from "../components/ModalBox";
import CV from "../components/CV";
import ResumeCV from "../assets/pdf/Nontasab Siangchin CV.pdf"

const Home = () => {
  // const
  const downloadCV = () => {
    const btn:HTMLElement | null = document.querySelector("#downloadCV")
    btn?.click()
  };

  return (
    <>
      <div className="flex w-full h-full">
        <div className="hero bg-base-current min-h-max">
          <div className="hero-content flex-col lg:flex-row">
            <img src={Profile} className="max-w-sm" />
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold">Hello :)</h1>
              <pre className="py-7">
                Hi I'm James. I was born on the 9th of August, 1999.
              </pre>
              <code className="pt-1">
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
