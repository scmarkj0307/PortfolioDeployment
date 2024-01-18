import { useEffect} from "react"
import axios from 'axios';
import { useSampleWorksContext } from "../hooks/useSampleWorksContext";
import '../styles/masterpage.css'

//components
import SampleWorksDetails from "../components/swDetails"
import SampleWorksForm from "../components/swForm"
import DarkHeader from "../components/darkHeader"


const EditSw = () => {
  const { sampleWorks, dispatch } = useSampleWorksContext()

  useEffect(() => {
    const fetchSampleWorks  = async () => {
      try {
        const response = await axios.get('https://markjportfolio.onrender.com/api/sampleWorks');
        const { data } = response;

        if (response.status === 200) {
          dispatch({type: 'SET_SAMPLEWORKS', payload:data})
        }
      } catch (error) {
        console.error('Error fetching sample works:', error);
      }
    };

    fetchSampleWorks();
  }, [dispatch]);

  return (
  <>
  <div className="dheader">
    <DarkHeader/>
    </div>
    
    <div className="swhome">
      <div className="workouts">
        {sampleWorks && sampleWorks.map(sampleWork  => (
          <SampleWorksDetails sampleWork={sampleWork} key={sampleWork._id} />
         
        ))}
      </div>
      <div className="swForm">
       <SampleWorksForm />
      </div>
    </div>
    </>
  )
}
export default EditSw