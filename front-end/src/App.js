import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav";
import Pics from "./Components/Pics";
import PicDetail from "./Components/PicDetail";
import FourOFour from "./Components/FourOFour";
import Home from "./Components/Home";
import EditPic from "./Components/EditPic"
import NewPic from "./Components/NewPic";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/pics" element={ <Pics />} />
        <Route path="/pics/:id" element={ <PicDetail />} />
        <Route path="/pics/new" element={<NewPic/> } />
        <Route path="/pics/:id/edit" element={<EditPic />} />
        <Route path="*" element={ <FourOFour />} />
      </Routes>
    </div>
    </Router>
  );
}


export default App;
