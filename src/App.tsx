import {
  ChakraProvider,
  Heading,
  Container,
  Text
} from "@chakra-ui/react";
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import LandingPage from "./components/LandingPage";
import Sign from './components/Sign';
import { Outlet } from "react-router";

function App() {

  return (
    <>
    <Outlet />
    </>
  )
}

export default App

// import {
//   ChakraProvider,
//   Heading,
//   Container,
//   Text
// } from "@chakra-ui/react";
// import { useState } from 'react'
// import Navbar from "./components/Navbar";
// import Background from "./components/Background";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LandingPage from "./components/LandingPage";
// import Sign from './components/Sign';

// export const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <LandingPage />
//         </Route>
//         <Route path="/login"> 
//           <Sign />
//         </Route>
//       </Switch>
//     </Router>
//   )
// }
