import LandingPage from './pages/LandingPage.jsx';
import Masterselection from './pages/Masterselection.jsx';
import GuessSelection from './pages/GuessSelection.jsx';
import EditSampleWOrks from './pages/EditSw';
import EditPersonalnfo from './pages/EditPersonalnfo';
import PiGuesspage from './pages/PersonalInfoGuesspage';
import SwGuesspage from './pages/SampleWorkGuesspage';

import{BrowserRouter as  Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/masterselection" element={<Masterselection />}/>
          <Route path="/guessSelection" element={<GuessSelection/>}/>
          <Route path="/editsampleworks" element={<EditSampleWOrks />}/>
          <Route path="/editpersonalinfo" element={<EditPersonalnfo/>}/>
          <Route path="/piguesspage" element={<PiGuesspage />}/>
          <Route path="/swguesspage" element={<SwGuesspage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
