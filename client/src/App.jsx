
import './App.css'
import{Route,Routes} from "react-router-dom";
import IndexPage from './assets/pages/indexPage';
import LoginPage from './assets/pages/LoginPage';
import Layout from './Layout';
function App() {
  return (
    <Routes>
      <Route path= "/" element={<Layout />}>
      <Route index element={<IndexPage />}/>
    <Route path="/login" element={<LoginPage />}/>
      </Route>
</Routes> 
  
  )
}

export default App
