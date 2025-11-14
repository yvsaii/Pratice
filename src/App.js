// import Login from './Components/Login'
import Home from './Components/Home'
// import Aboutus from './Components/Aboutus'
import Registration from './Components/Registration'
import {Route ,  Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Registration />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
