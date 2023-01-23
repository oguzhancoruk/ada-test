import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
function Results() {

    const [data, setData] = useState([])
   
    useEffect(() => {
        axios.get("https://ada-test.onrender.com/api/users", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
        }).then(res => setData(res.data))
    }, [])




    return (
        <div className=' col-sm-12 d-flex justify-content-center'>
            <div className='col-sm-12 mt-1'>
         
                {data.map(res => 
                
                
                <div className=' row ts bg-body rounded p-1'>

               
                    <ul className='list-group col-sm-3'>
                        <li className='list-group-item bg-info text-white'>{res.userName.username}</li>
                    </ul>
                    <ul className='list-group col-sm-6'>
                        <li className='list-group-item bg-danger text-white'>{res.userName.text}</li>
                    </ul>
                    <ul className='list-group col-sm-3'>
                        <li className='list-group-item bg-primary text-white'>{res.userName.point+50}</li>
                    </ul>
                  </div>
                  
              

                )}</div>
        </div>


    )



}

export default Results