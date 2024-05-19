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

function App() {

  return (
    <>
    <LandingPage />
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

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LandingPage from "./components/LandingPage";
// import Sign from './components/Sign';

// const App = () => (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={LandingPage} />
//       {/* <Route path="/login" component={Sign} /> */}
//     </Switch>
//   </Router>
// );

// export default App