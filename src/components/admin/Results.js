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
        <div>
            <div>

                {data.map(res => <div className='row ts'>

                    <div className="col-sm-2 bg-primary mt-2 sty">{res.userName.username}</div>
                    <div className="col-sm-8 bg-info mt-2 sty">{res.userName.text}</div>
                    <div className="col-sm-2 bg-warning mt-2 puan sty">{res.userName.point+50}</div>
                    <span className='bord'></span>
                </div>

                )}</div>
        </div>


    )



}

export default Results