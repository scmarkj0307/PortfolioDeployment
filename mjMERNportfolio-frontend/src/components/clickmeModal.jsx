import { useState } from 'react';
import VerifyModal from '../components/verfiyModal';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';  // Import PropTypes


import '../styles/clickmemodal.css';
import Robot from '../assets/Icons/enterpw.png'

function ClickmeModal({ closeModal }) {
  const navigate = useNavigate();
  const [openVerifyModal, setOpenVerifyModal]  = useState(false)

  const handleButtonClick = () => {
    // Navigate to the "/guess" route
    navigate('/guessSelection');
  };

  return (
    <div className="modalBackground">
      {openVerifyModal && <VerifyModal closeModal={setOpenVerifyModal}/>}
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="body">
          <div className="imageContainer">
           <img src={Robot} alt="Your Icon" />
          </div>
        </div>
        <div className="title">
          <h1>Are you my master?</h1>
        </div>
        <div className="footer">
        <button onClick={handleButtonClick}><p>NO, I&apos;M A GUEST</p></button>
          <button
            onClick={()=>{
              setOpenVerifyModal(true)
          }}
          ><p>YES IM YOUR MASTER</p></button>

        </div>
      </div>
    </div>
  );
}

ClickmeModal.propTypes = {
  closeModal: PropTypes.func.isRequired,  // Specify the expected prop type and mark it as required
};

export default ClickmeModal;