import { Route, Routes } from "react-router-dom"
import Blog from "./pages/blog/blog"
import Contact from "./pages/contact/contact"
import Faq from "./pages/faq/faq"
import Home from "./pages/home/home"
import Page404 from "./pages/page404/page404"
import WorkingPage from "./pages/howWorkingPage/howWorkingPage"
import DoctorsList from "./pages/doctorsList/doctorsList"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/how-working" element={<WorkingPage />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/list-doctors" element={<DoctorsList/>}/>
      <Route path="*" element={<Page404 />}/>

      {/* ---- As proximas rotas são apenas de teste ---- */}
      <Route path="/teste/um" element={<h1>Temos dois testes</h1>}>
        <Route path="um" element={<h2>Página de teste 1</h2>}/>
        <Route path="dois" element={<h2>Página de teste 2</h2>}/>
      </Route>
      {/* ----------------------------------------------- */}
    </Routes>
    </>
  )
}

export default App
