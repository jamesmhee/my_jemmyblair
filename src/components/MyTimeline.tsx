import { Timeline, Divider } from "antd"

const UnitDetails = () =>{
    return (
      <>
        <ul className="list-disc list-outside leading-relaxed text-xs break-words my-5 text-pretty w-full">
          <li>
            Participate in the development of the back office system for financial companies by transitioning task management from paperwork to an online system.
          </li>
          <li>          
            Participate in the development of the Maxme Wallet application, overseeing both Frontend and Backend development.
          </li>
          <li>
            Participate in the development of the Backoffice Partner management system to limit access to customer data.
          </li>
          <li>
            Participate in the development of the Palm Mate application, overseeing both the application itself and CMS.
          </li>
        </ul>
      </>
    )
  }

const MyTimeline = () => {
    
  return (
    <>
      <Divider orientation="left">
        <span className="text-xl text-medium">
          MY TIMELINE
        </span>
      </Divider>
      <Timeline
          style={{maxWidth: "100vw", margin: '0px 20px'}}
          mode={'alternate'}
          items={[
              {
              children: <b>KING MONGKUT INSTITUTE OF TECHNOLOGYLADKRABANG - Bachelor of Science (Information Technology)</b>,              
              color: 'green',
              position: 'left',
              label: <u>July 2019 - May 2023</u>
              },
              {
              children: <><b>Unit Co., Ltd. - Junior Developer</b> <br/> <UnitDetails/></>,  
              color: 'orange',
              position: 'right',
              label: <u>September 2023 - July 2024</u>
              }              
          ]}
      />
    </>
  )
}

export default MyTimeline