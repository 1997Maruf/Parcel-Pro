import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const MyProfile = () => {

    const {user} = useContext(AuthContext);
    
    return (
        <div>
           
        </div>
    );
};

export default MyProfile;