import { Profile } from "./profile/Profile";
import profileUsers from '../user.json';
export const App = () => {
  return <div><Profile items={profileUsers} /></div>
  
};
