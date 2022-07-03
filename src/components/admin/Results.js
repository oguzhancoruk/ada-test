import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
function Results() {

    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        axios.get("http://localhost:9000/api/user").then(res => setData(res.data))
    }, [])




    return (
        <div>
            <div>

                {data.map(res => <div className='row ts'>

                    <div className="col-sm-2 bg-primary mt-2 sty">{res.userName.username}</div>
                    <div className="col-sm-8 bg-info mt-2 sty">{res.userName.text}</div>
                    <div className="col-sm-2 bg-warning mt-2 puan sty">{res.userName.point}</div>
                    <span className='bord'></span>
                </div>

                )}</div>
        </div>


    )



}

export default Results