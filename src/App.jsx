import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './component/navbar/Layout'
import Home_Page from './pages/home_page/Home_Page'
import Conact_Page from './pages/contact_page/Conact_Page'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='' element={<Home_Page />} />
          <Route path='contact' element={<Conact_Page/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
