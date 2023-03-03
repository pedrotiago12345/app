import "./page404.css"

export default function Page404(){
    document.getElementsByTagName("title")[0].innerHTML = "BookMed - ERRO" 
    return (
        <div className="page404">
            <h1 className="title">ERRO</h1>
            <div className="img_div">
                <img src="http://192.168.1.4:4000/img/404-number.png" className="img"/>
            </div>
            <div className="subtitle">
                A página que voçê está tentar aceder não existe<br/>
                Use o menu acima ou aceda <a href="/" className="conect">aqui</a> á nossa página inicial
            </div>
        </div>
    )
}