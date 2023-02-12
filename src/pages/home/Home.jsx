import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import List from '../list/List'
const Home = () => {
    return (
        <>
        
        <div className='nav'>
            <Navbar/>
            </div>
                <div className="home">
            <div className='side'>
            <Sidebar/>
            </div>
        
           <div className="homeContainer">
               <div className='user-head'>
                   <h3>USERS</h3>
               </div>
               <div className="widgets">
                   <Widget />
               </div>
                <List />
           </div>
       </div>
        </>
    )
}



export default Home;