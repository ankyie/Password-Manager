import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Manager from './Components/Manager'
import { confirmContext } from './context/confirm'
import Confirm from './Components/Confirm'
import { themeContext } from './context/theme'

function App() {
  const [count, setCount] = useState(0)
  const [DelConfirm, setDelConfirm] = useState("hidden")
  const [YesOrNo, setYesOrNo] = useState(false)
  const [Theme, setTheme] = useState(getTheme)
  const [invertSvg, setInvertSvg] = useState("")
  const [BodySvg, setBodySvg] = useState("")

  function getTheme() {
    let UserTheme = localStorage.getItem("theme")
    if (UserTheme !== null) {
      return UserTheme
    }
    else {
      return "light"
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", Theme);
    if (Theme === "light" || Theme === "dark") {
      setInvertSvg("invert")
    }
    else{
      setInvertSvg("")
    }

    if (Theme === "dark") {
      setBodySvg("invert")
    }
    else{
      setBodySvg("")
    }
  }, [Theme])


  return (
    <>
      <div className={`${Theme}`}>
        <themeContext.Provider value={{ Theme, setTheme, invertSvg, BodySvg }}>
          <confirmContext.Provider value={{ DelConfirm, setDelConfirm, YesOrNo, setYesOrNo }}>
            <Confirm />
            <div className='bg-primarybody flex flex-col justify-between min-h-screen'>
              <div className="top">
                <Navbar />
                <Manager />
              </div>
              <Footer />
            </div>
          </confirmContext.Provider>
        </themeContext.Provider>
      </div>
    </>
  )
}

export default App
