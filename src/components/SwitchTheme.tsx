interface SwitchTheme{
    isDark: string
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SwitchTheme = ({isDark, onClick}:SwitchTheme) => {    
  return (
    <>
    <input
        type="checkbox"
        value="synthwave"
        checked={isDark === 'dark' ? true : false}
        onChange={onClick}
        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-200 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]" />
    </>
  )
}

export default SwitchTheme