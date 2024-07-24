import './Project.css'

const createImage = (src, title, alt) => {
  const img = document.createElement('img')
  img.src = src
  img.title = title
  img.alt = alt
  return img
}

const createTextElement = (tag, textContent) => {
  const element = document.createElement(tag)
  element.textContent = textContent
  return element
}

const createButton = (text, href) => {
  const button = document.createElement('button')
  const link = document.createElement('a')
  button.textContent = text
  link.href = href
  link.target = '_blank'
  link.appendChild(button)
  return link
}

const createArticle = (imgSrc, imgTitle, imgAlt, name, description, link) => {
  const article = document.createElement('article')
  article.classList.add('Vista')

  const img = createImage(imgSrc, imgTitle, imgAlt)
  const nameElement = createTextElement('h4', name)
  const descriptionElement = createTextElement('p', description)
  const buttonLink = createButton('View App', link)

  article.appendChild(img)
  article.appendChild(nameElement)
  article.appendChild(descriptionElement)
  article.appendChild(buttonLink)

  return article
}

export const My_projects = () => {
  const section = document.createElement('section')
  section.id = 'Projects'

  const title = createTextElement('h3', 'My Projects')
  const divArticle = document.createElement('div')
  divArticle.classList.add('divFlex')

  const project1 = createArticle(
    'assets/Captura de pantalla 2024-07-17 124108.png',
    'Proyecto1',
    'Proyecto1',
    'Web de Zapatillas',
    'Las mejores zapatillas del mercado y a un precio increible.',
    'https://cosmic-beijinho-1d1a28.netlify.app/'
  )

  const project2 = createArticle(
    'assets/Captura de pantalla 2024-07-17 123839.png',
    'Proyecto2',
    'Proyecto2',
    'Gallery de Fotos',
    'Galeria con una amplia variedad de todo tipos de fotos.',
    'https://main--heroic-torrone-017876.netlify.app/'
  )

  section.append(title)
  section.append(divArticle)
  divArticle.append(project1)
  divArticle.append(project2)

  return section
}
