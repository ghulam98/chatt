
import './App.css';
// import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';



function App() {




  return (


    <Router>
      <Routes>
      <Route exact path="/" element={<Join/>} ></Route>
      <Route exact path="/chat" element={<Chat/>} ></Route>
      </Routes>
    </Router>

  );
}

export default App;
