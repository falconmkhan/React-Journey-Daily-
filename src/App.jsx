import './App.css'
import Router from './Router'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from './Header'
import Conditonals from './Conditionals'
import Attributes from './Attributes'
import Propss from './Props'
import Parent from './PropsChilds'
import ErrorPage from './ErrorPage'
import Navbar from './Navbar'
import Hooks from './Hooks'

function App() {


  // Variables For Propss Component===========
  let obj = { name: "mustajab obj", code: 328742, email: "mustajab@object.com" }
  let arr = ["mustajab arr", 183313, "mustajab@array.com"]
  let str = "falcon"
  let num = 273872


  // Variables For Condionals Component===========
  let action = "working"
  let limit = 9
  let model = "Lenove Thinkpad T14"


  // Variable For Parent Component===========
  let child = "none"

  return (
    <>
      {/* <Header /> */}
      {/* <Propss  object={obj} array={arr} string={str} number={num}/> */}
      {/* <Conditonals action={action} limit={limit} model={model}/>  */}
      {/* <Attributes /> */}
      {/* <Parent  child={child}/> */}

      <BrowserRouter>
      <Navbar />


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/conditionals" element={<Conditonals action={action} limit={limit} model={model} />}></Route>
          <Route path="/attributes" element={<Attributes />}></Route>
          <Route path="/propss" element={<Propss object={obj} array={arr} string={str} number={num} />}></Route>
          <Route path="/parent" element={<Parent child={child} />}></Route>
          <Route path="/router" element={<Router />}></Route>
          <Route path="/hooks" element={<Hooks />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
