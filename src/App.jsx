import './styles/global.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Statement from './components/Statement'
import Featured from './components/Featured'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Statement />
        <Featured />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
