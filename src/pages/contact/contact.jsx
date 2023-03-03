import { useState } from "react"
import "./contact.css"

export default function Contact(){
    document.getElementsByTagName("title")[0].innerHTML = "BookMed - Contactos" 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [error, setError] = useState('')

    /**
     * Funcção usada para verificar se os campos estão ou não fazios 
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        let errorMsg = "Falta inserir os seguintes campos:\n"
        if(name.length === 0){
            errorMsg += "'name'\n"
        }if(email.length === 0){
            errorMsg += "'email'\n"
        }if(msg.length === 0){
            errorMsg += "'msg'\n"
        }
        if(!errorMsg.endsWith("campos:\n")){
            setError(errorMsg)
        }else {
            setError('')
            console.log("Tudo ok")
        }
    }
    return (
        <div className="background">
            <section className="contact-content">
                {/* A seguinte divisória faz todo o formulário para enviar a mensagem */}
                <div className="contact-form">
                    <h2>Entrar em contacto</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="names" className="ipn-contact" placeholder="Insire o seu nome" onChange={e=>setName(e.target.value)}/>
                        <input type="text" name="email" className="ipn-contact" placeholder="Insire o seu email" onChange={e=>setEmail(e.target.value)}/>
                        <textarea className="textarea-contact" placeholder="Escreva a sua mensagem" name="msg" onChange={e=>setMsg(e.target.value)}/>
                        <input type="submit" value="Enviar" className="btn-submit"/>
                    </form>
                    <div className={"msg-error" + (error === "" ? "" : " showError")}>
                        {error}
                    </div>
                </div>
                {/* A seguinte divisória divide-se nas seguintes secções: Morada, Contactos Telefónicos e Redes Socias */}
                <div className="other-contacts">
                     <section className="address"> {/* Secção da Morada */}
                        <div className="other-contacts-title">
                            Morada da sede
                        </div>
                        <div className="other-contacts-content">
                            <p>Rua das horas Nº59 - 2º andar</p>
                            <p>Código postal: 9050-520, Funchal</p>
                        </div>
                    </section>
                    <section className="phone"> {/* Secção dos Contactos telefónicos*/}
                        <div className="other-contacts-title">
                            Contactos telefónicos e email
                        </div>
                        <div className="other-contacts-content">
                            <li>
                                <p><span>Telefone:</span></p>
                                <p>&ensp;&ensp;&ensp;&ensp;291 365 988</p>
                                <p>&ensp;&ensp;&ensp;&ensp;291 778 569</p>
                            </li>
                            <li>
                                <p><span>Email:</span></p>
                                <p>&ensp;&ensp;&ensp;&ensp;geral@bookmed.pt</p>
                            </li>
                        </div>
                    </section>
                    <section className="social-media"> {/* Secção das Redes socias */}
                        <div className="other-contacts-title">
                            redes socias
                        </div>
                        <div className="other-contacts-content socialmedia">
                            Facebook Instagram Twitter
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}