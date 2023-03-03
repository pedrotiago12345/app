import {Help} from "../../components/help/component";
import { faq_pacientes } from "../../config/config";
import { Link } from "react-router-dom"
import "./faq.css"

export default function Faq(){
    document.getElementsByTagName("title")[0].innerHTML = "BookMed - FAQ" 
    let questions = []
    faq_pacientes.forEach(help=>{
        questions.push(<Help key={help[0]} typeH="faq" title={help[0]} value={help[1]}/>)
    })
    return (
        <>
            <h2>Perguntas e respostas frequentes</h2>
            {questions} 
            <div className="center">
                <div className="questionNotFound">
                    Não encontrou o que procurava
                    <div className="link-faq"><Link to={"/contact"} className="link">Fazer a pergunta</Link></div>
                    Clique no botão acima e faça a pergunta
                </div>
            </div>
        </>
    )
}