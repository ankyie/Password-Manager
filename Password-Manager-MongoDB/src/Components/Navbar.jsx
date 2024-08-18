import React, { useContext, useState } from 'react'
import './Navbar.css'
import BurgerRight from '../assets/burgerRight.svg'
import BurgerLeft from '../assets/burgerLeft.svg'
import { themeContext } from '../context/theme'

const Navbar = () => {
    const [ThemeOpen, setThemeOpen] = useState(false)
    const choose = useContext(themeContext)

    function HandleThemeOpen(){
        if (ThemeOpen) {
            setThemeOpen(false)
        } else {
            setThemeOpen(true)
        }
    }

    return (
        <div className='bg-primary px-5 text-maintext'>
            <nav className='lg:w-[900px] sm:w-4/5 w=full mx-auto flex justify-between items-center min-h-16'>
                <div className='w-[85%]'>
                    <a href="/" className='sm:text-xl text-lg'><span className='font-bold text-themetext'>&lt;PassOP/&gt;</span> - Save your Passwords Securely</a>
                </div>
                <div className="themecont relative">
                    <button onClick={HandleThemeOpen}>
                        {!ThemeOpen && <img src={BurgerRight} alt="burger icon" className={`w-10 p-1 ${choose.invertSvg}`}/>}
                        {ThemeOpen && <img src={BurgerLeft} alt="burger icon" className={`w-10 p-1 ${choose.invertSvg}`}/>}
                    </button>
                    {ThemeOpen && <div className="themeSelector px-3 py-2 rounded-lg flex flex-wrap justify-evenly gap-2 bg-[#ffffff91] absolute w-28 right-2 [filter:drop-shadow(4px_5px_8px_#8f8f8f)] appear">
                        <div className='duration-300 hover:bg-[#e5ff00d4] p-1 rounded-full flex justify-center items-center cursor-pointer' onClick={() => choose.setTheme("cherry")}>
                            <button className='cherry w-4 h-4 rounded-full'></button>
                        </div>
                        <div className='duration-300 hover:bg-[#00000075] p-1 rounded-full flex justify-center items-center cursor-pointer' onClick={() => choose.setTheme("light")}>
                            <button className='light w-4 h-4 rounded-full'></button>
                        </div>
                        <div className='duration-300 hover:bg-[#ffffffdb] p-1 rounded-full flex justify-center items-center cursor-pointer' onClick={() => choose.setTheme("dark")}>
                            <button className='dark w-4 h-4 rounded-full'></button>
                        </div>
                    </div>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
