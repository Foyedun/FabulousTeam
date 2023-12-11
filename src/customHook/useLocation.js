import {useLocation} from 'react-router-dom';


export const useLocationCust = () => {
    const location = useLocation();
    return location
}

