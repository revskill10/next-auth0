import { useContext } from 'react';
import { Auth0Context } from './Auth0Context';
const useAuth0 = () as any => useContext(Auth0Context);
export default useAuth0;
