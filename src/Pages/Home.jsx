import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Campaigns from "../Components/Campaigns";
import Donation from "../Components/Donation";
import VolunteerNeedNow from "../Components/VolunteerNeedNow";



const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <VolunteerNeedNow></VolunteerNeedNow>
            {/* Extra section blow */}
            <Campaigns></Campaigns>
            <Donation></Donation>
        </div>
    );
};

export default Home;