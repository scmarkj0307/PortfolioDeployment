import '../styles/masterselection.css'
import DarkHeader from '../components/darkHeader'
import { useNavigate } from 'react-router-dom';

function GuessSelection() {
  const navigate = new useNavigate();
  
  const ch1Click = () => {
    navigate('/swguesspage');
  }

  const ch2Click = ()=>{
    navigate('/piguesspage')
  }

  return (
    <>
     <DarkHeader/>

      <div className="mscontainer">
          <div className="choices">
            <div className="ch1" onClick={ch1Click}><h2>SEE SAMPLE WORKS</h2></div>
            <div className="ch2" onClick={ch2Click}><h2>SEE PERSONAL INFO</h2></div>
          </div>
      </div>
    </>
    
  )
}

export default GuessSelection