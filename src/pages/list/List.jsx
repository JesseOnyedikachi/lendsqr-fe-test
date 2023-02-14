import React, {useEffect, useState} from 'react'
import { Link, useSearchParams, useParams } from 'react-router-dom'
import './list.scss'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import UserActions from './UserActions';
import moment from 'moment'
const userTableStyles={
  height:'465px',
};

// users
const List = ({}) => {

  const [pageSize,setPageSize]=useState(7)
  
 const [users, setUsers] = useState([])
//  calling users
  useEffect(() => {
    axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then(res =>  {
      setUsers(res.data)
      console.log(res.data)
    })
    
    
  }, []);
 
  // populating table
  const columns = [
    { field: 'orgName', headerName: 'ORGANIZATION', width: 250 },
    { field: 'userName', headerName: 'USERNAME', width: 150 },
    { field: 'email', headerName: 'EMAIL', width: 250 },
    { field: 'phoneNumber', headerName: 'PHONE NUMBER', width: 200 },
    { field: 'createdAt', headerName: 'DATE JOINED', width: 150, renderCell: params=>moment(params.row.createdAt).format('DD-MM-YYYY') },
    { field: 'status', headerName: 'STATUS', width: 100, renderCell: params=> <UserActions/> },
    {field:'',renderCell:(users)=>{
      return  <Link to={`/users/${users.id}`} style={{ textDecoration: 'none'}}>
        <div className='dot' style={{
          transform: 'rotate(90deg)',
          fontWeight: '600',
          fontSize: '18px',
          color: '#545F7D'
        }}>...</div>
        </Link>
              }
    ,width:10},
  ];
  return (

    <div className='card'>

      <DataGrid
      rows={users}
      columns={columns}
      loading={!users.length}
      sx={userTableStyles}
      pagination
      pageSize={pageSize}
      onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
      rowsPerPageOptions={[7,30,60,100]}
        />
        
    </div>
  )
}




export default List;
