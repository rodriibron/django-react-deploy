

import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Navbar from './components/NavBar';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  const myWidth = 220
  const location = useLocation()
  const noNavBar = location.pathname ==="/register" || location.pathname === "/"

  return (
    <>
      {
        noNavBar ?
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>

        :

        <Navbar
        content={
          <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/create" element={<Create/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="/delete/:id" element={<Delete/>}/>
          </Routes>

        }
      />
      }
    </>
  )
}
//   return (

//     <div className="App">

//       {
//         noNavBar ?
//         <Routes>
//           <Route path="/" element={<Login/>}/>
//           <Route path="/register" element={<Register/>}/>
//         </Routes>:
//       }

//         <Navbar 
//             drawerWidth={myWidth}
//             content = {
//               <Routes>
//                 <Route path="/home" element={<Home/>}/>
//                 <Route path="/about" element={<About/>}/>
//                 <Route path="/create" element={<Create/>}/>
//                 <Route path="/edit/:id" element={<Edit/>}/>
//                 <Route path="/delete/:id" element={<Delete/>}/>
              
//               </Routes>
//             }
        
//         />
            


        
//     </div>
//   );
// }

export default App;
