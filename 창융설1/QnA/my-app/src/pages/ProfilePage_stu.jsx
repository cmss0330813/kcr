import  React  from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProfileUnit from "../components/ProfileUnit";

function ProfilePage_stu() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const Logout = () => {
        console.log('로그아웃');
        dispatch(clearUser());
    }
    return(
        <>
            <Header />
            <Sidebar />
            <ProfileUnit />
            <button onClick={() => Logout()}>로그 아웃</button>

        </>
    );

}

export default ProfilePage_stu;