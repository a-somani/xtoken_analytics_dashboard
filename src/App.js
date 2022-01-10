import Main from "./components/Main"
import Header from "./components/Header"
import PopupMenu from "./components/PopupMenu"
import "./App.css"
import { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (param) => {
    setIsOpen(param)
  }

  return (
    <>
      <PopupMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <Header toggleMenu={toggleMenu} />
      <Main />
    </>
  )
}

export default App
