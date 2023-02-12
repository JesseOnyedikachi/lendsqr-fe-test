// import React from 'react'
import React, {useEffect, useState} from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import { useParams} from 'react-router-dom'

const Single = () => {
  const params  = useParams();
  const [user, setUsers] = useState()
  useEffect(() => {
    const singUserApiUrl = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`
    axios.get(singUserApiUrl)
    .then(res => setUsers(res.data))
    
    console.log("Params", params)
  }, [params])
  return (
    

     <div>
      { user && (
        
       <>
       <div className='nav'><Navbar/></div>
       <div className='new'>
        <div className='side'>
          <Sidebar/>
        </div>
       <div className='newContainer'>
       <div className='user-head'>
                <h3>USERS</h3>
            </div>
        <div className='top'>
       <div className='left'>
          <img src={user.profile.avatar}
          alt={user.email}/>
          <div>
            <h3>{user.userName}</h3>
          </div>
        </div>
        <div className='center'>center</div>
        <div className='right'>right</div>
       </div>
       <div className='bottom' key={user.id}>
       <div>
        <h3 className='topic'>Personal Information</h3>
        <div className='sector'>
            <div>
              <p>full name</p>
              <h6>{user.profile.firstName} {user.profile.lastName}</h6>
            </div>
            <div>
              <p>phone number</p>
              <h6>{user.phoneNumber}</h6>
            </div>
            <div>
              <p>email</p>
              <h6>{user.email}</h6>
            </div>
            <div>
              <p>bvn</p>
              <h6>{user.profile.bvn}</h6>
            </div>
            <div>
              <p>gender</p>
              <h6>{user.profile.gender}</h6>
            </div>
            <div>
              <p>marital status</p>
              <h6>single</h6>
            </div>
            <div>
              <p>children</p>
              <h6>none</h6>
            </div>
            <div>
              <p>type of residence</p>
              <h6>parent's apartment</h6>
            </div>
          </div>
       </div>
                <hr style={{color:'lightgrey'}}></hr>
       <div>
            <h3 className='topic'>Education and Employment</h3>
          <div className='sector'>
            <div>
              <p>level of education</p>
              <h6>{user.education.level}</h6>
            </div>
            <div>
              <p>Employment Status</p>
              <h6>{user.education.employmentStatus}</h6>
            </div>
            <div>
              <p>Sector of employment</p>
              <h6>{user.education.sector}</h6>
            </div>
            <div>
              <p>Duration of Employment</p>
              <h6>{user.education.duration}</h6>
            </div>
            <div>
              <p>Office Email</p>
              <h6>{user.education.officeEmail}</h6>
            </div>
            <div>
              <p>monthly Income</p>
              {/* <div className='income'> */}

              <h6>${user.education.monthlyIncome[0]} - ${user.education.monthlyIncome[1]}</h6>
              
              {/* </div> */}
            </div>
            <div>
              <p>Office Email</p>
              <h6>{user.education.officeEmail}</h6>
            </div>
          </div>
       </div>
                <hr style={{color:'lightgrey'}}></hr>
       <div><h3 className='topic'>Social</h3>
       <div className='sector'>
            <div>
              <p>twitter</p>
              <h6>{user.socials.twitter}</h6>
            </div>
            <div>
              <p>facebook</p>
              <h6>{user.socials.facebook}</h6>
            </div>
            <div>
              <p>instagram</p>
              <h6>{user.socials.instagram}</h6>
            </div>
          </div>
       </div>
               <hr style={{color:'lightgrey'}}></hr>
       <div><h3 className='topic'>Guarantor</h3>
       <div className='sector'>
            <div>
              <p>level of education</p>
              <h6>{user.education.level}</h6>
            </div>
            <div>
              <p>Employment Status</p>
              <h6>{user.education.employmentStatus}</h6>
            </div>
            <div>
              <p>Sector of employment</p>
              <h6>{user.education.sector}</h6>
            </div>
            <div>
              <p>Sector of employment</p>
              <h6>{user.education.sector}</h6>
            </div>
          </div>
       </div><hr style={{color:'lightgrey'}}></hr>

       </div>
       </div> 
       </div>
       </>



   
      ) 
      }
     </div>
     
      
  
    )


  }

export default Single;
