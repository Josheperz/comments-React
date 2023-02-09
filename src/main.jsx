import ReactDOM from 'react-dom/client'
import { App } from './App'
import './scss/index.scss'
import {HashRouter, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <HashRouter>
    <Routes>
        <Route path="/" element={<App/>}></Route>
    </Routes>
  </HashRouter>
  
  </>
  
)
