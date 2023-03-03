import Calender from "../../components/calender/calender";
import Search from "./../../components/search/search";
import './home.css'
import { Filter } from "./../../components/help/component"
import { cityImages, espImages } from "../../config/config";

/* Os seguintes arrays serão para enviar para o json */
const city_img = cityImages
const esp_img = espImages

/*script para a animação no título da do site*/
class txt_type {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    tick() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            this.tick();
        }, delta);
    }
}

const execute = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new txt_type(elements[i], JSON.parse(toRotate), period);
        }
    }
    console.log("Chegou aqui")
};

/* Função usada para mostrar as ajudas ao utilizador */
const help = (id) => {
    if (document.getElementById(id).hidden){
        document.getElementById(id).hidden = false
    }else {
        document.getElementById(id).hidden = true
    }
}

/* As 3 funções seguintes são usadas na barra de search */
const helpEspecializacao = () => {
    help("especializacao")
}

const helpLocalizacao = () => {
    help("local")
}

const helpDate = () => {
    help("data")
}

export default function Home(){
    document.getElementsByTagName("title")[0].innerHTML = "BookMed" 
    //execute()

    /*
    -------------------------------------------------------------------------------------------------------------------
    --  Na Segunda parte receberá essa informação a partir da componente do servidor                                 --
    -------------------------------------------------------------------------------------------------------------------
    */

    return (
        <>
            <section className="form_busca">
                <div id="title_form"> {/* Ainda não está pronto - tentar com useSate */}
                    <div className="static_text">
                        Procure o seu 
                    </div>
                    <div className="typewrite" data-period="1000" data-type='[ "médico", "especialista"]'>
                        <span className="wrap">{window.screen.width <= 769 ? "Médico ou Especialista" : ""}</span>
                    </div>
                </div>
                <form action="/list-doctors">
                    <div className="inputs">
                        <Search content="especial" placeholder="Especialização" name="esp" inputClass="border_left" helpListId="especializacao" inputId="especial-inp" callback={helpEspecializacao} callbackChange={() => console.log("Está na esp")} />
                        <Search content="local" placeholder="Localização" name="lcl" inputClass="border_color" helpListId="local" inputId="local-inp" callback={helpLocalizacao} callbackChange={() => console.log("Está na lcl")}/>
                        <Search content="data" placeholder="data" helpListId="data" inputClass="border_right resize" inputId="date-inp" callback={helpDate}>
                            <Calender />
                        </Search>
                    </div>
                    <input type="submit" value="Pesquisar" className="btn-submit"/>
                </form>
            </section>
            <section className="helping">
                    <div className="help-city">
                        <p>Aqui mostra os médicos que existem em cada cidade</p>
                        <Filter lst_img_src={city_img}/>
                    </div>
                    <div className="help-doctors">
                        <p>Aqui mostra as cidades que têm uma determinada especialidade</p>
                        <Filter lst_img_src={esp_img} createDiv={true}/>
                    </div>
            </section>
        </>
    )
}