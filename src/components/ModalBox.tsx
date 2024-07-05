import { useState } from "react";
import { Button, Modal, ConfigProvider } from "antd";
import { LegacyButtonType } from "antd/es/button/button";

interface IModalProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;  
  buttonWidth: number | string;
  buttonHeight: number | string;
  width: number | string;
  height: number | string;
  type: "link" | "text" | "default" | "primary" | "dashed";
  color: string;
  buttonText: string;
  buttonColor: string;
  buttonFontSize?: string;
  modalTitle: string;
  modalTextContent: string;
  modalContent?: JSX.Element | JSX.Element[];
  centered: boolean;
  okText?: string
  okType?: LegacyButtonType
  hideButton?: boolean
  loading?: boolean
  colorBorder: string  
  defaultHoverBorderColor: string
  colorPrimary?: string
  colorPrimaryHover?: string
  colorPrimaryBgHover?: string  
}

const ModalBox = ({
  onClick,  
  buttonWidth,
  buttonHeight,
  width,
  height,
  type,
  color,
  buttonText,
  buttonColor,
  buttonFontSize = "1rem",
  modalTitle,
  modalTextContent,
  modalContent,
  centered,
  okText,
  okType,
  hideButton,
  loading,
  colorBorder,
  defaultHoverBorderColor,
  colorPrimary,
  colorPrimaryHover,
  colorPrimaryBgHover  
}: IModalProps) => {
  const [open, setOpen] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <ConfigProvider theme={{
        components: {
          Button: {
            colorBorder: colorBorder,
            defaultHoverBorderColor: defaultHoverBorderColor,
            colorPrimary: colorPrimary,
            colorPrimaryHover: colorPrimaryHover,
            colorPrimaryBgHover: colorPrimaryBgHover,
            // colorPrimaryText: colorPrimaryText,
            // colorPrimaryTextHover: colorPrimaryTextHover
          },
          Modal: {
            colorBorder: 'red'
          }
        }
      }}>
        <Button
          style={{
            width: buttonWidth,
            height: buttonHeight,
            color: color,
            background: buttonColor,
            fontSize: buttonFontSize,
          }}
          type={type}
          onClick={showModal}
        >
          {buttonText}
        </Button>
        <Modal
          styles={{ body: { height: height }}}        
          footer={hideButton}
          width={width}
          centered={centered}
          title={modalTitle}
          open={open}
          loading={loading}
          onOk={onClick}        
          onCancel={handleCancel}
          okText={okText}
          okType={okType}
        >
          <div className="my-5">{modalContent}</div>        
          <p>{modalTextContent}</p>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default ModalBox;
