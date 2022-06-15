import React from 'react'
import { useSelector } from 'react-redux'


function Result() {

    const puan = useSelector(ts => ts.test.puan)
    

    if (puan >= 0 && puan < 100) {

        return (
            <div>Aleyna'yı tanımıyorsunuz. Daha çok zaman ayırın</div>
        )

    }
    else if (puan >= 100 && puan < 250) {
        return (<div> Aleyna sizinle arkadaşlık ediyor. Ama olmazzsa olmaz değilsiniz. Birşeyler değişmeli!!</div >)
    }

    else if (puan >= 250&&puan<350) {
        return(<div>Fena değil. İyi yoldasının</div>)

    }
    else if(puan>=350){
        return(<div>O kişi sizsiniz. Aleyna'yı çok iyi tanıyorsunuz. </div>)
    }
    else {
        return(<div>Aleyna'nın vaktini boşa harcamayın.Onunla asla arkadaşlık edemezsiniz.</div>)
    }
}

export default Result