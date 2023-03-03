import { useState, useEffect, useRef } from "react"
import { motion } from 'framer-motion'
import "./help.css"
import "./filter.css"

/* Para melhorara a organização - Criar mais uma função e exportá-la*/
export function Help({typeH="hwp", title, value, classnameHelp = ""}) {
    const [answerShow, setAnswerShow] = useState("not")
    const answers = []
    value.forEach(answer => {
        answers.push(<div key={answers.length}>{answer}</div>)
    })
    return (
        typeH === 'hwp' ? 
            <div className={"help " + classnameHelp}>
                <div className="explain">
                    <div className="explain-text">
                        <div className="text_black">
                            {value[0]}
                        </div>
                        <div>
                            {value[1]}
                        </div>
                    </div>
                </div>
                <div className="number">
                    <div className="circulo">
                        {title}
                    </div>
                </div>
            </div>
        :
            <div className="questionNanswers">
                <div className={answerShow==="yes" ? "question is-open": "question"} onClick={()=>{setAnswerShow(answerShow === "not" ? "yes" : "not")}}>
                    <div className="content">{title}</div>
                </div>
                <div className={answerShow==="yes" ? "answer is-open" : "answer"}>
                    <div className="content">{answers}</div>
                </div>
            </div>

    )
}


export function FilterN({type}){
    return (
        <>
        <h2>--------{type}--------</h2>
        <div className="carrossel">
            <div className="container-carrossel">
                {imagesTag}
            </div>
        </div>
        </>
    )
}

export function Filter({lst_img_src, createDiv=false}){
    const carrossel = useRef()
    const [width, setWidth] = useState(0)

    const color = () =>{
        const number = Math.floor(Math.random() * (Math.floor(5)-Math.ceil(1)) + Math.ceil(1))
        switch (number){
            case 1:
                return "backGreen"
            case 2:
                return "backGrey"
            case 3:
                return "backSkyBlue"
            case 4:
                return "backSeaGreen"
            default:
                return "backBlue"
        }
    }

    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, [])

    return (
        <motion.div ref={carrossel} className="carrossel" whileTap={{cursor:"grabbing"}}>
            <motion.div className="inner" drag="x" dragConstraints={{right:0, left:-width}}>
                {lst_img_src.map((src, i) => (
                    <motion.div  key={i}>
                        {createDiv ? 
                            <div className={"carrossel-img " + color()}>
                                <img src={src} alt="" className="img-resize-help"/>
                            </div>
                        : 
                            <img src={src} alt="" className="carrossel-img"/>
                        }
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}