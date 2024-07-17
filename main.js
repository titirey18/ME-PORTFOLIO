import { Sobre_mi } from './src/components/About Me/about'
import { Bienvenida } from './src/components/Bienvenida'
import { headernav } from './src/components/header/header'
import { My_proyects } from './src/components/Proyects/Proyect'
import { Mis_Skills } from './src/components/Skills/Skills'
import './style.css'

headernav()

const main = () => {
  const mainElement = document.querySelector('main')

  if (mainElement) {
    mainElement.append(Bienvenida())
    mainElement.append(Sobre_mi())
    mainElement.append(Mis_Skills())
    mainElement.append(My_proyects())
  } else {
    console.error('Main element not found')
  }
}

main()
