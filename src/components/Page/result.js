import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'


function Result() {

    const puan = useSelector(ts => ts.test.puan)
    const userName = useSelector(ts => ts.test.userName)
    const text = useSelector(ts => ts.test.text)

    return (<div className='test-page'>
        <p className='text'>PUANINIZ: {puan}</p>
        <p>{text}</p>

    </div>
    )


}

export default Result