import "./menu.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { checkMenuLang, menu_lang } from "../../config/lang"
import { useEffect } from "react"

export default function Menu(){
    const [menu, setMenu] = useState("desative") // Menu com o botão de hamburguer
    const [languageMenu, setLanguageMenu] = useState("desative") // Para fazer o drop do menu dos idiomas
    const [language, setLanguage] = useState("portugues")

    const activeMenu = () => { // Apenas é usado para po menu em versão de hamburguer
      setMenu(menu === "active" ? "desative" : "active")
    } 

    const activeLanguageDrop = () => { // Menu do idioma - ainda falta a versão telemóvel
      setLanguageMenu(languageMenu === "active" ? "desative" : "active")
    }
    const menuLang = menu_lang[language] // Vai buscar o idioma pretendido

    /**
     * Neste momento ainda está a verificar só a tradução do menu, mas terá de ser o site todo
     * @returns As opções de idiomas para todo o site (exceto nos artigos - ainda ser trabalhado)
     */
    const langsOptionHTML = () => {
      const langOptionHTML = []
      const objectLang = checkMenuLang()
      const langKeys = Object.keys(objectLang)
      langKeys.forEach((key, index) => {
        langOptionHTML.push(<li key={index} onClick={() => setLanguage(key)}>{objectLang[key]}</li>)
      })
      return langOptionHTML
    }
    
    return (
      <>
        <div className="center-hamber">
          <div className="hamber" onClick={activeMenu}>
            <div className={"bar1" + (menu === "active" ? " change" : "")}></div>
            <div className={"bar2" + (menu === "active" ? " change" : "")}></div>
            <div className={"bar3" + (menu === "active" ? " change" : "")}></div>
          </div>
        </div>
        <ul className={"menu" + (menu === "active" ? " active" : "")}>
          <li><Link to={"/how-working"} className="link">{menuLang.comoFunciona}</Link></li>
          <li><Link to={"/contact"} className="link">{menuLang.contactos}</Link></li>
          <li><Link to={"/faq"} className="link">{menuLang.faq}</Link></li>
          <li><Link to={"/blog"} className="link">{menuLang.blogue}</Link></li>
          <li>
            <div className="link" onClick={activeLanguageDrop}>
              {menuLang.idioma}
            </div>
            <ul className={"drop-content" + (languageMenu === "active" ? " showMenu" : "")}>
              {langsOptionHTML()}
            </ul>
          </li>
          <li><a href={"http://192.168.1.4:3000"} className="link">{menuLang.entrar}</a></li>
        </ul>
      </>
    )
}