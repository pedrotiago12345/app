import { useState } from "react"
import { Link } from "react-router-dom"
import "./ticket.css"

const testarClique = (ticket) => {
    console.log(ticket)
}

/** 
 * Estas são as tiras que são usados na página inicial do blog
 */
export function TicketBlog({title, nameImg="bg-abs.webp"}){
    const [over, setOver] = useState('not')
    return (
        <div className="ticket-content">
            <section className="image-ticket" onMouseOver={() => {setOver("yes")}} onMouseOut={() => {setOver("not")}} onClick={testarClique}>
                <div className="image-div">
                    <img src={"img/" + nameImg} className="bg-ticket"/>
                    <div className={"article" + (over === "yes" ? " show" : "")}>
                        <img src="img/artigo.png" className="img-artigo"/>
                        Ler artigo
                    </div>
                </div>
            </section>
            <p className="title-ticket">{title}</p>
        </div>
    )
}

export const TicketBlogV2 = ({title, subtitle, nameImg="bg-abs.webp"}) => {
    /* --------------------------- POR TRABALHAR --------------------------- */
    const sizing = () => {
        console.log("Já está carregado")
    }
    const clicked = () => {
        console.log("Clicado")
        console.log("numero de classes: " + document.getElementsByClassName("title-article")[0].clientHeight)
    }
    const checkedheight = () => {
        const ticketNumber = document.getElementsByClassName("title-article").length - 1
        console.log("Valor ticket:", ticketNumber)
        if(ticketNumber > 0){
        if (document.getElementsByClassName("title-article")[ticketNumber].clientHeight > 30){
            return true
        } else{
            return false
        }
        }
    }
    /* --------------------------------------------------------------------- */
    return (
        <section className="ticket2">
            <div className="img-ticket">
                <img src={"img/" + nameImg} className="bg-ticket2"/>
            </div>
            <section className="content-text">
                <div className="title-article">
                    {title}
                </div>
                <div className={"subtitle-article max-line" + (title.length > 85 ? "3": "4")}>
                    {subtitle}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, alias est! Voluptates a 
                    sit quam voluptas odit fugit maiores. Illo maxime doloribus enim debitis cumque voluptatibus aliquam excepturi 
                    minima corporis, consectetur porro sint repellendus voluptatem dignissimos eos quisquam tempore eligendi nulla 
                    doloremque ad non eius, rem molestiae aspernatur. Est, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellat.
                </div>
            </section>
        </section>
    )
}

/**
 * Estas são as tiras que vão apresentar os médicos 
 */
export function TicketDoctor({nameImg="bg-abs.webp", doctorName="", doctorDescribe="", doctorClass=""}){
    let stars_array = []
    for(let stars=0; stars<doctorClass; stars++){
        stars_array.push(<span key={stars}>&#9733;</span>)
    }
    return (
        <section className="ticket-doctor">
            <div className="img-ticket-doc">
                <img src={"img/" + nameImg} className="bg-ticket-doc"/>
            </div>
            <section className="content-doctor">
                <div className="doctor-name">
                    Dr. {doctorName}
                </div>
                <div className="describe-doctor">
                    <div>Descrição:</div> 
                    <div className="content">{doctorDescribe}sint repellendus voluptatem dignissimos eos quisquam tempore eligendi nulla 
                    doloremque ad non eius, rem molestiae aspernatur.</div>
                </div>
                <div className="classificacao">
                    {stars_array}
                </div>
            </section>
            <section className="btns-doctor">
                <div className="btn-consulta"><Link to={"/"}>ver Perfil</Link></div>
                <div className="btn-consulta"><Link to={"/contact"}>Marcar Consulta</Link></div>
            </section>
        </section>
    )
}