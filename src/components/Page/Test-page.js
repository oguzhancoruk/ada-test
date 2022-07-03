import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCevap, changeItem, chanceAnswerCountB, changePuan, chanceAnswerCountA } from '../../redux/test.slice'



function TestPage() {

    const dispatch = useDispatch()
    const data = useSelector(state => state.test.item)
    const count = useSelector(ts => ts.test.count)

    const item = useSelector(ts => ts.test.newItem)


    const answerA = useSelector(ts => ts.test.answerCountA)
    const answerB = useSelector(ts => ts.test.answerCountB)
    data.ada.map(res => {


        if (res.id === count) {
            dispatch(changeItem(data.ada[res.id - 1]


            ))
        }


    })





    return (
        <div className='container'>
            <div className=' row soru'>
                <div className='col-sm-8 mt-5 '>
                    <p>{item.soru}</p>
                </div>

                <div className='col-sm-8  mt-5 resim'>
                    <div className='col-sm-4 container-fluid'>
                        <img
                            className='img-fluid'
                            src={item.resim}
                            alt="kedi" />
                        <div className='btnn mt-3 ' ><button className='btn btn-primary' disabled={answerA} onClick={(e) => {


                            if (e.target.value === item.cevap) {

                                dispatch(changeCevap(e.target.value))

                            }

                            else {

                            }

                            dispatch(chanceAnswerCountB(false))
                            dispatch(chanceAnswerCountA(true))
                        }} value={"A"}>A</button></div>

                    </div>
                    <div className='col-sm-4 container-fluid '>
                        <img
                            className='img-fluid'
                            src={item.resim2}
                            alt="köpek" />
                        <div className='btnn mt-3'> <button className='btn btn-primary' disabled={answerB} onClick={(e) => {
                            if (e.target.value === item.cevap) {
                                dispatch(changeCevap(e.target.value))


                            }
                            else {


                            }


                            dispatch(chanceAnswerCountB(true))
                            dispatch(chanceAnswerCountA(false))
                        }} value={"B"} >B</button></div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default TestPage