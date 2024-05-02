
import imgPage from './assets/page.avif';
import { Login } from './components/Login';
import { Fondo } from './components/Fondo';
function App() {


  return (
    <>
      <div className="h-screen grid content-center">
        <Fondo />
          <section className="flex justify-center">
             <Login />
            <div className="page w-96 h-96">
                <img src={imgPage} className="w-full rounded-full" alt="" />
            </div>
          </section>
         <footer >by: Juan Penagos Desarrollador fullstack</footer>
      </div>
    </>
  )
}

export default App
