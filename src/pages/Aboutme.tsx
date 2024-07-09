import { Divider, ConfigProvider } from "antd"
import AboutmeDetails from "../components/AboutmeDetails"
import MySkills from "../components/MySkills"
import MyTimeline from "../components/MyTimeline"

const Aboutme = () => {
  return (
    <>
      <Divider orientation="left">
        <span className="text-xl text-medium">
          ABOUT ME
        </span>
      </Divider>
      <div className="flex items-center flex-col gap-10 justify-center my-7 w-full">
        <ConfigProvider theme={{
          components: {            
            Timeline: {              
              tailWidth: 3.5,
              lineWidth: 2,
              lineHeight: 3,
              lineType: 'dashed'
            }
          }
        }}>
          <AboutmeDetails/>
          <MySkills/>
          <MyTimeline/>          
        </ConfigProvider>
      </div>
    </>
  )
}

export default Aboutme