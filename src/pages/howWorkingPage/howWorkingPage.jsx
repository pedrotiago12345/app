import {Help} from "../../components/help/component"
import "./howWorkingPage.css"
import { howWorkingSteps_pacientes } from "../../config/config"

export default function WorkingPage(){
    document.getElementsByTagName("title")[0].innerHTML = "BookMed - Como Funciona" 
    let steps = []
    let titleNumber = 1
    howWorkingSteps_pacientes.forEach(step => {
        steps.push(<Help key={titleNumber} title={titleNumber} value={step} classnameHelp={titleNumber%2 === 0 ? "reverse": ""}/>)
        titleNumber++
    })
    console.log("largura: ",window.screen.width, "altura:", window.screen.height)
    return (
        <div className="size">
            {steps}
        </div>
    )
}