import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CardSet from './components/CardSet'
import PrimaryButton from './components/PrimaryButton'
import SidebarMenu from './components/SidebarMenu'


function App() {
  

  return (
    <>
      <Header />
      <div className="flex flex-row gap-4 justify-center">
        <div>
        <SidebarMenu />
        </div>
        <div>
          <PrimaryButton />
      <CardSet />
      <PrimaryButton />
      </div>
      </div>
      
      <Footer />
      
      
    </>
  )
}

export default App;
