import { Card, Col, Row} from 'antd'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


const AboutmeDetails = () => {
  return (
    <div className='flex px-3 w-full justify-center'>
        <Row gutter={20} className='w-full flex-col gap-5 sm:gap-0 sm:flex-row'>            
            <Col className='w-full flex-1'>
                <Card title={<div className='flex items-center justify-center gap-3 text-2xl'><FaGithubAlt/><span className='text-base font-bold'>GITHUB</span></div>} bordered={false} className='text-center'>
                    <Link to="https://github.com/jamesmhee" target='_blank'>
                        <span className='font-bold'>View my github. <br></br>jamesmhee</span>
                    </Link>
                </Card>
            </Col>
            <Col className='w-full flex-1'>
                <Card title={<div className='flex items-center justify-center gap-3 text-2xl'><FaLinkedin/><span className='text-base font-bold'>LINKED IN</span></div>} bordered={false} className='text-center'>
                    <Link to="https://www.linkedin.com/in/nontasab-siangchin-bab735227/" target='_blank'>
                        <span className='font-bold'>View my Linkedin. <br></br>Nontasab Siangchin</span>
                    </Link>
                </Card>
            </Col>
            <Col className='w-full flex-1'>
            <Card title={<div className='flex items-center justify-center gap-3 text-2xl'><MdEmail/><span className='text-base font-bold'>MY E-MAIL</span></div>} bordered={false} className='text-center'>
                    <Link to="mailto:nontasabs@gmail.com" target='_blank'>
                        <span className='font-bold'>Send E-mail to me. <br></br>(nontasabs@gmail.com)</span>
                    </Link>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default AboutmeDetails