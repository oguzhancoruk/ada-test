import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import TestPage from '../Page/Test-page'
import { changeCount,changeDisabled,chanceAnswerCountA,chanceAnswerCountB, changePuan,chanceResultShow} from '../../redux/test.slice'
import Result from '../Page/result'

function Home() {

  const count=useSelector(ts=>ts.test.count)
  const disable = useSelector(ts => ts.test.disabled)
  const puan = useSelector(ts => ts.test.puan)
  const answer = useSelector(ts => ts.test.cevap)
  const item = useSelector(ts => ts.test.newItem)
  const resultShow=useSelector(ts=>ts.test.resultShow)
  const dispatch=useDispatch()
 
  
  if (resultShow === true) {
    return (
   
      <div >
        <span className='text'>A.D.A TEST</span>
        <Result />
      </div>
      
    
   
  )} 
  return (
  <div  >
    <div  >
        <span className='text'>A.D.A TEST</span>
             
    </div>
          
          <TestPage />
          <div className='mt-5'>
              <button className='next' disabled={disable} onClick={()=>{
                  if(count===10){
                    dispatch(changeDisabled(true))
                    dispatch(chanceResultShow(true))
                   
                    
                  }
                  else {
                      dispatch(changeCount(count+1))
                  }

                  if(answer===item.cevap)
                  {
                    dispatch(changePuan(puan+50))
                  }
                  else{
                    dispatch(changePuan(puan-40))
                  }
                  dispatch(chanceAnswerCountA(false))
                  dispatch(chanceAnswerCountB(false))
                 
                    
                  
              }}>Sonraki </button>
          </div>
  </div>
  )
}

export default Home