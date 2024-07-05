import { ConfigProvider, Layout, Menu, theme } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeStore";
import { Link } from "react-router-dom";
import { RiBearSmileLine } from "react-icons/ri";
import SwitchTheme from "./SwitchTheme";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const { Header, Content } = Layout;

const labelMenu = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About me',
    path: 'aboutme'
  },
  {
    name: 'My Project',
    path: 'myproject'
  }
]

const items = new Array(labelMenu.length - 1).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: (
    <Link to={`${labelMenu[index]?.path}`}>
      {labelMenu[index]?.name}
    </Link>
  ),
}));

const LayoutTheme = ({ children }: ILayoutProps) => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const handleTheme = ():void =>{
    if(isDark === 'dark'){
      setIsDark('light')
      localStorage.setItem('theme', 'light')
    }else{
      setIsDark('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
                
      }}
    >
      <Layout style={{ maxHeight: "100vh", maxWidth: "100vw", position: 'relative' }}>
        <div className={(isDark === "dark" ? 'bg-zinc-200' : 'bg-amber-300 ') + ' absolute bottom-0 right-1 z-50 px-2 pt-2 rounded-t-xl'}>
          <SwitchTheme onClick={handleTheme} isDark={isDark}/>
        </div>
        <Header            
          style={{
            background: isDark === 'dark' ? '' : 'white',
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100vw",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <h1 className="text-3xl sm:text-5xl flex items-center gap-2">
              <RiBearSmileLine className="inline-flex my-auto"/>
              <span className="text-2xl my-auto">jemmy</span>
            </h1>
          </Link>
          <Menu
            theme={isDark === 'dark' ? "dark" : "light"}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}            
            style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end' }}
          />
        </Header>
        <Content
          style={{maxWidth: "100vw", height: "100vh", maxHeight: '100vh', overflowY: 'auto'}}
        >
          {children}
        </Content>        
      </Layout>
    </ConfigProvider>
  );
};

export default LayoutTheme;
