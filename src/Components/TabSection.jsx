// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import useAuth from "../Hook/useAuth";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import MyPostedCard from "./MyPostedCard";
// // import MyaddCard from "./MyAddCard";
// // import MyPost from "../Pages/MyPost";

// const TabSection = () => {
//   const { user } = useAuth();
//   console.log(user);
//   const [volunteers, setVolunteers] = useState();

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await axios(
//           `${import.meta.env.VITE_API_URL}/volunteers`
//         );
//         console.log("Data from tab--------", data);
//         setVolunteers(data);
//       } catch (error) {
//         console.log("Error is", error);
//       }
//     };
//     getData();
//   }, [setVolunteers]);

//   const myAddVolunteers = volunteers?.filter(
//     (volunteer) => volunteer.contact.email === user?.email
//   );

//   return (
//     <div className="mt-10">
//       <Tabs>
//         <div className="flex justify-center text-lg font-semibold">
//           <TabList>
//             <Tab>My add</Tab>
//             <Tab>My request</Tab>
//           </TabList>
//         </div>

//         <TabPanel>
//           {myAddVolunteers?.map((volunteerData) => (
//             <MyPostedCard 
//                 key={volunteerData._id} 
//                 volunteerData={volunteerData}>
//             </MyPostedCard>
//           ))}
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 2</h2>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default TabSection;
