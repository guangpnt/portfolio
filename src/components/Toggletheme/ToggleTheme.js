import './ToggleTheme.css'

export default function ToggleTheme({ theme, setTheme }) {

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <>
            <div>
                <div className={theme === "light" ? "btn-theme light" : "btn-theme dark"} onClick={toggleTheme}>
                    <div className={theme === "light" ? "sun" : ""} />
                    <div className={theme === "light" ? "" : "moon"} />
                </div>
            </div>
        </>
    )
}