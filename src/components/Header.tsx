import { Logo } from "./Logo";

export function Header(){
  return (
    <header className="w-full py-5 flex items-center justify-center bg-emerald-800 border-b border-gray-600 " >
      <div className="flex items-center justify-between" >
          <Logo/>
          <strong className="text-2xl text-gray-100 ml-2 block" >Bem Vindo | </strong>
          <p>Evento dev</p>
      </div>
    </header>
  )
}