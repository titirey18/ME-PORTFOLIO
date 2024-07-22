import './footer.css'

export const My_footer = () => {
  const footer = document.querySelector('footer')
  const Parrafo = document.createElement('p')
  const ul = document.createElement('ul')
  const Gitnav = document.createElement('li')
  const Linknav = document.createElement('li')
  const Instanav = document.createElement('li')
  const Git = document.createElement('a')
  const Link = document.createElement('a')
  const Insta = document.createElement('a')
  const Logo1 = document.createElement('img')
  const Logo2 = document.createElement('img')
  const Logo3 = document.createElement('img')

  footer.id = 'Footer'
  ul.classList.add('navfooter')
  Gitnav.classList.add('group')
  Linknav.classList.add('group')
  Instanav.classList.add('group')
  Parrafo.textContent = 'Designed and built by Thiago Soubielle'
  Git.href = 'https://github.com/titirey18'
  Git.target = '_blank'
  Link.href = 'https://linkedin.com/in/thiagosoubielle'
  Link.target = '_blank'
  Insta.href = 'https://www.instagram.com/thiago_soubielle/'
  Insta.target = '_blank'
  Logo1.src = 'assets/git.png'
  Logo1.alt = 'Github'
  Logo1.title = 'Github'
  Logo2.src = 'assets/linkedin.png'
  Logo2.alt = 'Linkedin'
  Logo2.title = 'Linkedin'
  Logo3.src = 'assets/instagram.png'
  Logo3.alt = 'Instagram'
  Logo3.title = 'Instagram'

  footer.append(Parrafo)
  footer.append(ul)
  ul.appendChild(Gitnav)
  ul.appendChild(Linknav)
  ul.appendChild(Instanav)
  Gitnav.appendChild(Git)
  Linknav.appendChild(Link)
  Instanav.appendChild(Insta)
  Git.appendChild(Logo1)
  Link.appendChild(Logo2)
  Insta.appendChild(Logo3)
}
