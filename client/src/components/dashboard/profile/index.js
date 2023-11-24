import { AdminTitle } from '../../../utils/tools'
import UserProfile from './profile';
import AuthProfile from './auth';

const AdminProfile = () => {

    return(
        <>
            <AdminTitle title="Profile"/>
            <UserProfile/>
            <AuthProfile/>
        </>
    )

}

export default AdminProfile;