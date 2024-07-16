import ResumePDF from '../assets/pdf/resume.jpg'

const CV = () => {
  return (
    <div className='w-full max-h-[calc(70vh_-_50px)] sm:max-h-[calc(70vh_-_100px)] overflow-auto'>
        <img src={ResumePDF} height={'200px'}/>
    </div>
  )
}

export default CV