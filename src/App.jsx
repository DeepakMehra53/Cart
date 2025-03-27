import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import  Layout  from './components/layout'
import { Home } from './pages/home'
import Detail  from './pages/detail'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail/>} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
