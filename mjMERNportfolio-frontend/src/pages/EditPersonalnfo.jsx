import { useEffect } from "react";
import axios from 'axios';
import { usePersonalInfoContext } from "../hooks/usePersonalInfoContext"; // Update the context import
import '../styles/masterpage.css';

// Components
import PersonalInfoDetails from "../components/piDetails"; // Update the component import
import PersonalInfoForm from "../components/piForm"; // Update the component import
import DarkHeader from "../components/darkHeader";

const EditPersonalInfo = () => {
  const { personalInfo, dispatch } = usePersonalInfoContext(); // Update the context usage

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const response = await axios.get('https://markjportfolio.onrender.com/api/personalInfo');
        const { data } = response;

        if (response.status === 200) {
          dispatch({ type: 'SET_PERSONAL_INFO', payload: data }); // Update the dispatch payload
        }
      } catch (error) {
        console.error('Error fetching personal information:', error);
      }
    };

    fetchPersonalInfo();
  }, [dispatch]);

  return (
    <>
      <div className="dheader">
        <DarkHeader />
      </div>
    
      <div className="swhome">
        <div className="workouts">
          {personalInfo && personalInfo.map(personalInfoItem => (
            <PersonalInfoDetails personalInfo={personalInfoItem} key={personalInfoItem._id} />
          ))}
        </div>
        <div className="swForm">
          <PersonalInfoForm />
        </div>
      </div>
    </>
  );
};

export default EditPersonalInfo;
