import { useEffect, useState } from 'react';
import DarkHeader from '../components/darkHeader';
import PersonalInfoDetails from '../components/piDetails';
import axios from 'axios';
import '../styles/guesspage.css';
import '../styles/landingpage.css' 
import { usePersonalInfoContext } from '../hooks/usePersonalInfoContext';

function PersonalInfoGuesspage() {
  const { personalInfo, dispatch } = usePersonalInfoContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const response = await axios.get('https://markjportfolio.onrender.com/api/personalInfo');
        const { data } = response;

        if (response.status === 200) {
          dispatch({ type: 'SET_PERSONAL_INFO', payload: data });
          setLoading(false); // Set loading to false when data is fetched
        }
      } catch (error) {
        console.error('Error fetching personal information:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchPersonalInfo();
  }, [dispatch]);

  return (
    <div className="gpbody">
      <div className="gpheader">
        <DarkHeader />
      </div>

      <div className="gphome">
        {loading ? (
          // Loading screen
          <div className="loading-screen">
            <span className="loader"></span>
            {/* You can add a loading animation or any other content here */}
          </div>
        ) : (
          <div className="gpworkouts">
            {personalInfo &&
              personalInfo.map((personalInfoItem) => (
                <PersonalInfoDetails personalInfo={personalInfoItem} key={personalInfoItem._id} showDeleteButton={false} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalInfoGuesspage;
