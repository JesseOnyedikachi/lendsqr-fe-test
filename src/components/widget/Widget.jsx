import React, { useState, useEffect} from 'react'
import './widget.scss'
import axios from "axios";
import Table from '@mui/material/Table';
import { getUsers } from '../../API/index'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
const Widget = () => {

 const  [loading, setLoading] = useState(false);
 const  [dataSource, setDataSource] = useState([])

 useEffect(() => {
  setLoading(true)
  getUsers().then((res) => {
    setDataSource(res.guarantor);
  })
 }, []);
  
      

 
  return (
    <>
    <div className='w-box'>

    <div className="widget">
    
      <div className="left">
        <PersonOutlinedIcon className="person" />
        <span className='title2'>USERS</span>
        <span className='counter'>2,453</span>
      </div>
      
    </div>

<div className="widget">
<div className="left">
  <PersonOutlinedIcon className="person" />
  <span className='title2'>ACTIVE USERS</span>
  <span className='counter'>2,453</span>
</div>

</div>

<div className="widget">
      <div className="left">
        <PersonOutlinedIcon className="person" />
        <span className='title2'>USERS WITH LOANS</span>
        <span className='counter'>12,453</span>
      </div>
      
  </div>

  <div className="widget">
      <div className="left">
        <PersonOutlinedIcon className="person" />
        <span className='title2' style={{}}>USERS WITH SAVINGS</span>
        <span className='counter'>102,453</span>
      </div>
      
  </div>
    </div>
    
    </>
  )
}

export default Widget
