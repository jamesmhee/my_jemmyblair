import { Image } from 'antd';

interface IPreviewProjectProps {
    images: string[]
    cover: string
}

const PreviewProject = ({images, cover}:IPreviewProjectProps) => {  
  return (
    <Image.PreviewGroup
        items={images}
    >
    <Image
      className='rounded-l-2xl rounded-b-none'
      width={"100%"}
      height={"100%"}
      src={cover}
    />
  </Image.PreviewGroup>
  )
}

export default PreviewProject