import './Experience.css'

export const My_Experience = () => {
  const section = document.createElement('section')
  const DivExperience = document.createElement('div')
  const DivStudies = document.createElement('div')
  const Experience = document.createElement('h3')
  const Studies = document.createElement('h3')
  const Title = document.createElement('p')
  const Title1 = document.createElement('p')
  const Title2 = document.createElement('p')
  const Title3 = document.createElement('p')

  section.id = 'Experience'
  DivExperience.classList.add('miexperiencia')
  DivStudies.classList.add('miestudios')
  Experience.textContent = 'Experience'
  Studies.textContent = 'Studies'
  Title.textContent = 'Titulo en bacillerato de Economias.'
  Title1.textContent = 'Desarrollo web. Cursando actualmente en ThePower'
  Title2.textContent =
    'Camarero. • Atencion al cliente. • Servicio en mesa y barra. • Preparación de bebidas.'
  Title3.textContent =
    'Dependiente. • Recibir y atender al cliente. • Cierre y cobro de los pagos. • Control de inventarios.'

  section.append(DivExperience)
  section.append(DivStudies)
  DivExperience.appendChild(Experience)
  DivExperience.appendChild(Title2)
  DivExperience.appendChild(Title3)
  DivStudies.appendChild(Studies)
  DivStudies.appendChild(Title)
  DivStudies.appendChild(Title1)

  return section
}
