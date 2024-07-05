import {useState, useMemo, createContext, SetStateAction, useEffect} from 'react'

interface IThemeStoreProps{
    children: JSX.Element | JSX.Element[]
}

interface StoreProps{
    isDark: string
    setIsDark: React.Dispatch<SetStateAction<string>>
}
export const ThemeContext = createContext({} as StoreProps)

export const ThemeStore = ({children}:IThemeStoreProps) =>{
    const getTheme:string | null = localStorage.getItem("theme")
    const [isDark, setIsDark] = useState<string>(getTheme ? getTheme : 'light')

    const store:StoreProps = useMemo(()=>({
        isDark,
        setIsDark
    }), 
    [
        isDark,
        setIsDark
    ])

    useEffect(()=>{
        if(!getTheme){
            localStorage.setItem("theme", 'light')            
        }else{
            setIsDark(getTheme)
        }
    }, [])

    return (
        <ThemeContext.Provider value={store}>
            {children}
        </ThemeContext.Provider>
    )
}
