import './header.css'

export const headernav = () => {
  const header = document.querySelector('header')
  const name = document.createElement('a')
  const ul = document.createElement('ul')
  const Aboutnav = document.createElement('li')
  const Projectsnav = document.createElement('li')
  const Skillsnav = document.createElement('li')
  const Experiencenav = document.createElement('li')
  const Contactnav = document.createElement('li')
  const About = document.createElement('a')
  const Projects = document.createElement('a')
  const Experience = document.createElement('a')
  const Skills = document.createElement('a')
  const Contact = document.createElement('a')

  name.classList.add('Minombre')
  Contact.classList.add('Contactos')

  name.textContent = 'TS'
  About.textContent = 'About Me'
  Projects.textContent = 'Projects'
  Skills.textContent = 'Skills'
  Experience.textContent = 'Experience'
  Contact.textContent = 'Contact'
  name.href = '#'
  About.href = '#'
  Projects.href = '#Projects'
  Skills.href = '#Skills'
  Experience.href = '#Experience'
  Contact.href = '#Contact'

  header.append(name)
  header.append(ul)
  ul.appendChild(Aboutnav)
  ul.appendChild(Projectsnav)
  ul.appendChild(Skillsnav)
  ul.appendChild(Experiencenav)
  ul.appendChild(Contactnav)
  Aboutnav.appendChild(About)
  Projectsnav.appendChild(Projects)
  Skillsnav.appendChild(Skills)
  Experiencenav.appendChild(Experience)
  Contactnav.appendChild(Contact)
}
