import axios from 'axios'
import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { user_post, getUserName, getAdmin, getUserDisabled } from '../../redux/test.slice'
import { Link } from "react-router-dom";


function User() {
    const username = useSelector(ts => ts.test.userName)
    var disabled = false
    const dispatch = useDispatch()

    if (username === "") {
        disabled = true
    }


    return (
        <div className='container-fluid '>
            <div className='admin '>

                <Link to='admin'><button className='btn btn-primary' onClick={() => {
                    dispatch(getAdmin(true))
                    dispatch(user_post(false))
                }}>A.D.A GİRİŞ</button></Link></div>
            <div className='row user'>


                <div  >
                    <span className='text'>A.D.A TEST</span>

                </div>
                <div>
                    <form  >

                        <div className='container-fluid mt-5'>
                            <input type="text" required="boş kalamaz" placeholder='Kullanıcı Adı' onChange={(e) => dispatch(getUserName(e.target.value)



                            )


                            } />

                        </div>





                        <div className='user-div'>
                            <button disabled={disabled} className=' btn btn-primary' ><a className='user-btn btn btn-primary ' href="home">Teste Başla</a></button>
                        </div>

                    </form>
                </div>

            </div>

        </div>

    )
}

export default User