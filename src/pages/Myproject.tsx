import { ConfigProvider, Divider } from "antd"

type Props = {}

const Myproject = (props: Props) => {
  return (
    <ConfigProvider theme={{
      
    }}>
      <Divider orientation="left">
        <span className="text-xl text-medium">
          MY PROJECT
        </span>
      </Divider>
    </ConfigProvider>
  )
}

export default Myproject