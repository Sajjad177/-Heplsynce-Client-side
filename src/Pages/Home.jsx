import Banner from "../Components/Banner";
import Campaigns from "../Components/Campaigns";
import Donation from "../Components/Donation";
import VolunteerNeedNow from "../Components/VolunteerNeedNow";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VolunteerNeedNow></VolunteerNeedNow>
            <Campaigns></Campaigns>
            <Donation></Donation>
        </div>
    );
};

export default Home;