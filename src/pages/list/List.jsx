import React, {useEffect, useState} from 'react'
import { Link, useSearchParams, useParams } from 'react-router-dom'
import './list.scss'
import axios from 'axios'
import New from '../new/New'
import { useLocation } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
const List = ({}) => {

 

 const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then(res =>  {

      setUsers(res.data)
      console.log(res.data)
    })
    
    
  }, [])
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">

        </div>
        <div className='cardBody'>
        <table className='table '>
        <thead className='bg-light text-black'> 
          <tr>
            <td>ORGANIZATION</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>PHONE NUMBER</td>
            <td>Date Joined</td>
            <td>Status</td>
            </tr>
        
        </thead>
        <tbody>
            {
               users && users.map((user) => (
               
                  <tr key={user.id}>
                    
                    <td data-label='Organization'>{user.orgName}</td>
                    
                  
                     <td data-label='Username'>{user.email}</td>
                     <td data-label='Email'>{user.userName}</td>
                     <td data-label='Phone Number'>{user.phoneNumber}</td>
                     <td data-label='Date Joined'>{user.createdAt}</td>
                     <td data-label='Status'></td>
                     <Link to={`/users/${user.id}`}>

                     <td>....</td>
                     </Link>
                  </tr>
                
               ))
            }
        </tbody>
      </table>
        </div>
      </div>
      
    </div>

    
  )
}




export default List;
