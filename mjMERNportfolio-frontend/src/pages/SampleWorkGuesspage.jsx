import  {useEffect,useState}from 'react'
import DarkHeader from '../components/darkHeader'
import SwDetails from '../components/swDetails'
import axios from 'axios';
import '../styles/guesspage.css'
import { useSampleWorksContext } from "../hooks/useSampleWorksContext";
import '../styles/landingpage.css' 
import Typewriter from 'typewriter-effect';

function SampleWorkGuesspage () {
  const { sampleWorks, dispatch } = useSampleWorksContext()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSampleWorks = async () => {
      try {
        const response = await axios.get('https://markjportfolio.onrender.com/api/sampleWorks');
        const { data } = response;

        if (response.status === 200) {
          dispatch({type: 'SET_SAMPLEWORKS', payload: data})
          setLoading(false); // Set loading to false when data is fetched
        }
      } catch (error) {
        console.error('Error fetching sample works:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchSampleWorks();
  }, [dispatch]);

   return (
  <div className="gpbody">
  <div className="gpheader">
    <DarkHeader/>
    </div>
    
    <div className="gphome">
    {loading ? (
          // Loading screen
          <>
          <h2 className='loader-text'><Typewriter
                                options={{
                                strings: ["Pleaseee wait, for 1-2mins to see my greatness", "Im only using free usage hosting service", "Sorry for inconvenience" , "It will only load like this for the first time", " Pleasee bare with it!!"],
                                autoStart: true,
                                loop: true,
                                }}
                        /></h2>

          <div className="loading-screen">
            <span className="loader"></span>

            
          </div>
          </>
        ) : (
      <div className="gpworkouts">
      {sampleWorks &&
            sampleWorks.map((sampleWork) => (
              <SwDetails sampleWork={sampleWork} key={sampleWork._id} showDeleteButton={false} />
            ))}
      </div>
       )}
      </div>
    </div>
  )
}

export default SampleWorkGuesspage