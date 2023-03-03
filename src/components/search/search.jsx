import "./search.css"
import { option } from "../../config/config"
import { useState } from "react"

export default function Search({content, helpListId="", inputId="", inputClass="", placeholder, name, callback, children=""}){

    const [procura, setProcura] = useState('')

    const checkValue = (option) => {
        setProcura(option.target.value)
    }
    // A seguinte condição ainda está por simplificar - faz as opções em função do que está escrito no input
    let options = []
    if (content === "local") {
        // Vai buscar todos os locais e filtra com o valor que está na "procura"
        const localidadesFiltradas = option.locais.map(local => local).filter((localidade => localidade.toLowerCase().includes(procura.toLowerCase())))
        // adiciona a opção ao array 
        localidadesFiltradas.map((local, i) => {
            options.push(<option value={local} className='menu_option' key={i} onMouseDown={checkValue}>{local}</option>)
        })

    } else if(content === "especial") { // Processso igual ao de cima mas para as especializações
        const especialidadesFiltradas = option.especializacoes.map(esp => esp).filter((esp => esp.toLowerCase().includes(procura.toLowerCase())))
        
        especialidadesFiltradas.forEach((especializacao, i) => {
            options.push(<option value={especializacao} className='menu_option' key={i} onMouseDown={checkValue}>{especializacao}</option>)
        })
    } else {
        ""
    }
    return (
        <div>
            <input 
                type="text" 
                id={inputId}
                className={"input_txt " + inputClass}
                placeholder={placeholder}
                name={name}
                onFocus={callback}
                onBlur={callback}
                autoComplete="off"
                onChange={(e) => {
                    setProcura(e.target.value)
                }}
                value={procura}
            />
            <div id={helpListId} className="list" hidden>
                {children === "" ? options : children}
            </div>
        </div>
    )
}