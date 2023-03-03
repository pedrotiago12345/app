import Menu from "../menu/menu"
import "./header.css"
import { Link } from "react-router-dom"

export default function Header() {  
    return (
      <nav>
        <Link to={"/"}><label id="logo">Meu Logo</label></Link>
        <Menu />
	    </nav>
    )
}

  