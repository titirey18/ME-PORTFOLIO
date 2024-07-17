import './Proyect.css'

export const My_proyects = () => {
  const Proyect = document.createElement('section')
  const title = document.createElement('h3')
  const divarticle = document.createElement('div')
  const Proyect1 = document.createElement('article')
  const Proyect2 = document.createElement('article')
  const Img1 = document.createElement('img')
  const Img2 = document.createElement('img')
  const Name1 = document.createElement('h4')
  const Name2 = document.createElement('h4')
  const text1 = document.createElement('p')
  const text2 = document.createElement('p')
  const Button1 = document.createElement('button')
  const Button2 = document.createElement('button')
  const Link1 = document.createElement('a')
  const Link2 = document.createElement('a')

  Proyect.id = 'Proyects'
  divarticle.classList.add('divFlex')
  title.textContent = 'My Proyects'
  Img1.src = 'assets/Captura de pantalla 2024-07-17 124108.png'
  Img1.title = 'Proyecto1'
  Img1.alt = 'Proyecto1'
  Img2.src = 'assets/Captura de pantalla 2024-07-17 123839.png'
  Img2.title = 'Proyecto2'
  Img2.alt = 'Proyecto2'
  Name1.textContent = 'Web de Zapatillas'
  Name2.textContent = 'Gallery de Fotos'
  text1.textContent =
    'Las mejores zapatillas del mercado y a un precio increible.'
  text2.textContent = 'Galeria con una amplia variedad de todo tipos de fotos'
  Button1.textContent = 'View App'
  Button2.textContent = 'View App'
  Link1.href = 'https://cosmic-beijinho-1d1a28.netlify.app/'
  Link2.href = 'https://main--heroic-torrone-017876.netlify.app/'
  Link1.target = '_blank'
  Link2.target = '_blank'
  Proyect1.classList.add('Vista')
  Proyect2.classList.add('Vista')

  Proyect.append(title)
  Proyect.append(divarticle)
  divarticle.append(Proyect1)
  divarticle.append(Proyect2)
  Proyect1.appendChild(Img1)
  Proyect1.appendChild(Name1)
  Proyect1.appendChild(text1)
  Link1.appendChild(Button1)
  Proyect1.appendChild(Link1)
  Proyect2.appendChild(Img2)
  Proyect2.appendChild(Name2)
  Proyect2.appendChild(text2)
  Link2.appendChild(Button2)
  Proyect2.appendChild(Link2)

  return Proyect
}
