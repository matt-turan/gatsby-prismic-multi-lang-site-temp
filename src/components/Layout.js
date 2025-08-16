import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

// Components
import Header from './Header'
import Footer from './Footer'
import AgeGate from './AgeGate'


// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/styles.min.css'

const Layout = ({children}) => {
  const [showAgeGate, setShowAgeGate] = useState(false)
  const [cookies, setCookie] = useCookies(['adult'])

  function setAgeValid(){
    setShowAgeGate(!showAgeGate)
    //set cookie
    setCookie('adult', true, [])
  }

  //Age Gate
  if(!showAgeGate && cookies['adult'] !== "true"){
    return(
      <>
        <AgeGate setAgeValid={setAgeValid} />
      </>
    )
  }
  return(
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout