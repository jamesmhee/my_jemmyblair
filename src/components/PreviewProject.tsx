import { Image } from 'antd';

interface IPreviewProjectProps {
    images: object[]
    cover: string
}

const PreviewProject = ({images, cover}:IPreviewProjectProps) => {
  return (
    <Image.PreviewGroup
        items={images}
    >
    <Image
        className='rounded-l-2xl'
      width={"100%"}
      src={cover}
    />
  </Image.PreviewGroup>
  )
}

export default PreviewProject