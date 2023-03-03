export const menu_lang = {
    ingles: {
        comoFunciona: "How It Works",
        contactos: "Contacts",
        faq: "FAQ",
        blogue: "Blog",
        idioma: "Language",
        entrar: "Get In",
        checkin: "Check Query"
    },
    portugues: {
        comoFunciona: "Como Funciona",
        contactos: "Contactos",
        faq: "FAQ",
        blogue: "Blogue",
        idioma: "Idioma",
        entrar: "Entrar",
        checkin: "Verificar a consulta",
        teste: "vnsadlknv"
    },
    alemao:{
        comoFunciona: "Wie es Funktioniert",
        contactos: "Kontakte",
        faq: "FAQ",
        blogue: "Bloggen",
        idioma: "Sprache",
        entrar: "Betreten",
        checkin: "Abfrage Prüfen"
    },
}

/**
 * Usado para traduzir os idiomas no texto a ser mostrado no menu
 */
const langName = {
    ingles: "English",
    portugues: "Português",
    alemao: "Deutsch",
    italiano: "Italiano"
}


/**
 * Retorna todos os idiomas diponíveis para o menu do site principal
 */
export const checkMenuLang = () => {
    const menuOptions = ["comoFunciona", "contactos", "faq", "blogue", "idioma", "entrar", "checkin"]
    const idiomas = Object.keys(menu_lang)
    const langToShow = {}
    idiomas.forEach(lang => {
        try {
            menuOptions.forEach((opt, index) => {
                if (!menu_lang[lang][opt]){  // Se não houver tradução, o idioma não pode ser apresentado
                    throw `Menu -> Não traduzido: ${lang} - ${opt}`
                }
            })

            // Só vai realizar a proxima instrução se não for lançado nenhuma exceção
            langToShow[lang] = langName[lang]
        } catch (e){
            console.log("Ainda no JS #### ",e)
        }
    })
    return langToShow
}

/**
 * Para verificar se tem a tradução do nome do idioma no array langName
 */
const checkHasLangName = (lang) => {
    return langName[lang] !== undefined
}