import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from "./component/body.jsx"
import Login from "./component/login.jsx"

import { Provider } from 'react-redux'
import { store } from './utiles/appStore.js'
import About from './component/about.jsx'
import Home from './component/home.jsx'
function App() {


  return (
    <>
    <Provider store={store}>
    <BrowserRouter basename='/'>
    <Routes>
      
      <Route path='/' element={<Body />}>
      <Route path = '/' element={<Home />}/>
      <Route path = '/login' element={<Login />}/>
      <Route path = '/about' element={<About />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    
    </>
  )
}

export default App
