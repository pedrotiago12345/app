import { TicketBlog, TicketBlogV2 } from "../../components/ticket/ticket"
import "./blog.css"

export default function Blog() {
    document.getElementsByTagName("title")[0].innerHTML = "BookMed - Blog" 
    return (
        <>
            <div className="artigos">
                <TicketBlog title="Equipa de cardiologistas do hospital Central da Madeira lider na realização de transplantes, está sendo uma grande viagem"/>
                <TicketBlog title="MSC volta para a Madeira com 6 navios"/>
                <TicketBlog title="Médicos descobrem uma possivel cura geral da diabetes"/>
                <TicketBlog title="Enfermagem na madeira nomeada para prémios internacionais" nameImg="hospital.jpeg"/>
                <TicketBlog title="Foi hoje retomada as ligações entre a Madeira e o Continente" nameImg="msc.webp"/>
                <TicketBlog title="Médicos descobrem uma possivel cura geral da diabetes"/>
            </div>
            <hr/>
            <p>Esta é a segunda versão</p>
            <div className="secondParte">
                <div className="filtros">
                    Seção de filtros para os artigos do blog<br/>
                    Ignorar a cor
                </div>
                <div className="artigosV2">
                    <TicketBlogV2 title="Equipa de cardiologistas do hospital Central da Madeira lider na realização de transplantes, está sendo uma grande viagem incrivel pelo mundo fora, já são muitos prémios"/>
                    <TicketBlogV2 title="MSC volta para a Madeira com 6 navios hhhhhhhhhhhhttttttttttttttttttttttttttttttghjko"/>
                    <TicketBlogV2 title="Médicos descobrem uma possivel cura geral da diabetes"/>
                    <TicketBlogV2 title="Enfermagem na madeira nomeada para prémios internacionais" nameImg="hospital.jpeg"/>
                    <TicketBlogV2 title="Foi hoje retomada as ligações entre a Madeira e o Continente" nameImg="msc.webp"/>
                </div>
            </div>
        </>
    )
}