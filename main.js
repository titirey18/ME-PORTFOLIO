import { Sobre_mi } from './src/components/About Me/about'
import { Bienvenida } from './src/components/Bienvenida'
import { My_contact } from './src/components/Contacto/Contacto'
import { My_Experience } from './src/components/Experience/Experience'
import { My_footer } from './src/components/footer/footer'
import { headernav } from './src/components/header/header'
import { My_projects } from './src/components/Projects/Project'
import { Mis_Skills } from './src/components/Skills/Skills'
import './style.css'

headernav()
My_footer()

const main = () => {
  const mainElement = document.querySelector('main')

  if (mainElement) {
    mainElement.append(Bienvenida())
    mainElement.append(Sobre_mi())
    mainElement.append(Mis_Skills())
    mainElement.append(My_Experience())
    mainElement.append(My_projects())
    mainElement.append(My_contact())
  } else {
    console.error('Main element not found')
  }
}

main()
