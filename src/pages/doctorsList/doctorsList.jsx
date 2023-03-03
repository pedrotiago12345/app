import { TicketDoctor } from "../../components/ticket/ticket"
import "./doctorsList.css"

export default function DoctorsList(){
    let urlAtual = window.location.href
    let urlClass = new URL(urlAtual)
    let esp_get = urlClass.searchParams.get("esp")
    let lcl_get = urlClass.searchParams.get("lcl")
    
    return (
        <>
            <h2>Lista de médicos</h2>
            <p>especializacao: {esp_get}</p>
            <p>Local: {lcl_get}</p>
            <hr/>
            <TicketDoctor doctorName="Chibanga" nameImg="chinbanga.png" doctorClass={5}/>
            <TicketDoctor doctorName="Chibanga" nameImg="chinbanga.png" doctorClass={5}/>
        </>
    )
}