import './Experience.css'

export const My_Experience = () => {
  const section = document.createElement('section')
  const DivExperience = document.createElement('div')
  const DivStudies = document.createElement('div')
  const Divh3 = document.createElement('div')
  const Experience = document.createElement('h3')
  const Studies = document.createElement('h3')
  const Title = document.createElement('p')
  const Title1 = document.createElement('p')
  const Title2 = document.createElement('p')
  const Title3 = document.createElement('p')

  section.id = 'Experience'
  Divh3.classList.add('Titulos')
  DivExperience.classList.add('miexperiencia')
  DivStudies.classList.add('miestudios', 'hidden')
  Experience.textContent = 'Experience'
  Studies.textContent = 'Studies'
  Title.textContent = '• Titulo en bacillerato de Economias.'
  Title1.textContent = '• Desarrollo web: Cursando actualmente en ThePower'
  Title2.innerHTML = `Camarero.<br>
    • Atención al cliente.<br>
    • Servicio en mesa y barra.<br>
    • Preparación de bebidas.`
  Title3.innerHTML = `Dependiente.<br>
    • Recibir y atender al cliente.<br>
    • Cierre y cobro de los pagos.<br>
    • Control de inventarios.`

  section.append(Divh3)
  Divh3.appendChild(Experience)
  Divh3.appendChild(Studies)
  section.append(DivExperience)
  section.append(DivStudies)
  DivExperience.appendChild(Title2)
  DivExperience.appendChild(Title3)
  DivStudies.appendChild(Title)
  DivStudies.appendChild(Title1)

  const Activeclass = () => {
    Experience.classList.remove('Active')
    Studies.classList.remove('Active')
  }

  Experience.addEventListener('click', () => {
    Activeclass()
    Experience.classList.add('Active')
    DivExperience.classList.remove('hidden')
    DivStudies.classList.add('hidden')
  })

  Studies.addEventListener('click', () => {
    Activeclass()
    Studies.classList.add('Active')
    DivExperience.classList.add('hidden')
    DivStudies.classList.remove('hidden')
  })

  Experience.classList.add('Active')

  return section
}
