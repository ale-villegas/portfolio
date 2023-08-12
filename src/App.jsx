
import './App.css'
import ContactMe from './components/contact-me/ContactMe'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar'
import Presentation from "./components/presentation/Presentation"
import Projects from './components/projects/Projects'



function App() {


  return (
    <>
    
<NavBar/>
<main>
<Presentation/>

<Projects/>
<ContactMe/>
</main>
<Footer/>
    </>
  )
}

export default App
