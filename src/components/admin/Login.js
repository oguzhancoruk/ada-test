import { findAllByTestId } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getadminShow, user_post } from '../../redux/test.slice'
import Results from '../admin/Results'
function Login() {

    const dispatch = useDispatch()



    const data = [{
        user: "adatest@gmail.com",
        password: "bobo1234"
    }]
    const [user, setUser] = useState()
    const [pas, setPass] = useState()
    console.log(user, pas)

    if (user === "adatest@gmail.com" & pas === "bobo1234") {

        return (
            <Results />
        )
    }

    return (
        <div className='container login' >
            <div className=' col-sm-6 '>

                <form onChange={(e) => {
                    e.preventDefault()
                }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Kullanıcı Adı</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e) => setUser(e.target.value)

                        } />
                        <div id="emailHelp" className="form-text">  </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required onChange={(e) => setPass(e.target.value)


                        } />
                    </div>

                    <button type="submit" className="btn btn-primary"
                        onClick={() => {
                            dispatch(user_post(false))
                        }}>Giriş</button>
                </form>
            </div>
        </div>
    )
}
export default Login