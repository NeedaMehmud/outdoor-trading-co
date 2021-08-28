import React from 'react';
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Main from "../components/Main"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
         <Nav />
         <Hero />
         <Main />
         <Newsletter />
         <Footer />
        </div>
    );
};

export default Home;






// import React from 'react';
// import { useQuery } from '@apollo/client';
// import { QUERY_USERS } from '../utils/queries';

// const Home = () => {

//     const { loading, data } = useQuery(QUERY_USERS);
//      const users = data?.users || [];

//     return (
//         <div>
//             {users.map(user => <div>{user.username}</div>)}
//         </div>
//     )
// };

// export default Home;

