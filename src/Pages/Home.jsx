import Banner from "../Components/Banner";
import Donation from "../Components/Donation";
import VolunteerNeedNow from "../Components/VolunteerNeedNow";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VolunteerNeedNow></VolunteerNeedNow>
            <Donation></Donation>
        </div>
    );
};

export default Home;