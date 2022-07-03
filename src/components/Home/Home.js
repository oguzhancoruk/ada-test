import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TestPage from '../Page/Test-page'
import { changeCount, getText, changeDisabled, chanceAnswerCountA, chanceAnswerCountB, changePuan, chanceResultShow } from '../../redux/test.slice'
import Result from '../Page/result'
import axios from 'axios'

function Home() {

  const count = useSelector(ts => ts.test.count)
  const disable = useSelector(ts => ts.test.disabled)
  const puan = useSelector(ts => ts.test.puan)
  const answer = useSelector(ts => ts.test.cevap)
  const item = useSelector(ts => ts.test.newItem)
  const resultShow = useSelector(ts => ts.test.resultShow)
  const userName = useSelector(ts => ts.test.userName)
  const dispatch = useDispatch()
  const texts = [{
    text1: "Aleyna'yı tanımıyorsunuz. Daha çok zaman ayırın",
    text2: "Aleyna sizinle arkadaşlık ediyor. Ama olmazzsa olmaz değilsiniz. Birşeyler değişmeli!!",
    text3: "Fena değil. İyi yoldasının",
    text4: "O kişi sizsiniz. Aleyna'yı çok iyi tanıyorsunuz.",
    text5: "Aleyna'nın vaktini boşa harcamayın.Onunla asla arkadaşlık edemezsiniz."
  }]
  let answers = ""

  if (puan >= 0 && puan < 100) {
    answers = texts.map(res => res.text1)
  }
  else if (puan >= 100 && puan < 250) {
    answers = texts.map(res => res.text2)
  }
  else if (puan >= 250 && puan < 350) {
    answers = texts.map(res => res.text3)
  }
  else if (puan >= 350) {
    answers = texts.map(res => res.text4)
  }
  else {
    answers = texts.map(res => res.text5)
  }

  if (resultShow === true) {
    return (

      <div className='text' >
        <span className='text'>A.D.A TEST</span>

        <Result />
      </div>
    )
  }
  return (
    <div  >
      <div className='ts' >
        <span className='text '>A.D.A TEST</span>

      </div>

      <TestPage />
      <div className='mt-5 ts '>
        <button className='next' disabled={disable}

          onClick={() => {
            if (count === 10) {
              dispatch(changeDisabled(true))
              dispatch(chanceResultShow(true))
              dispatch(getText(answers))
              axios.post("http://localhost:9000/api/user", {
                username: userName,
                point: puan,
                text: answers
              }).then((res) => console.log(res))

            }
            else {
              dispatch(changeCount(count + 1))
            }

            if (answer === item.cevap) {
              dispatch(changePuan(puan + 50))
            }
            else {
              dispatch(changePuan(puan - 40))
            }
            dispatch(chanceAnswerCountA(false))
            dispatch(chanceAnswerCountB(false))


          }}>Sonraki </button>
      </div>
    </div>
  )
}

export default Home