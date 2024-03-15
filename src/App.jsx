
import './App.css'
import Banner from './components/Banner/Banner'
import Cooking from './components/Cooking/Cooking'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <div className='text-center mt-24'>
      <h1 className='font-semibold text-5xl'>Our Recipes</h1>
      <p className='text-[#150B2B99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
      </div>
      <div className='flex'>
        <Recipes></Recipes>
        <Cooking></Cooking>
      </div>
      
    </div>
  )
}

export default App
