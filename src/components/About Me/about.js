import './about.css'

export const Sobre_mi = () => {
  const section = document.createElement('section')
  const title = document.createElement('h3')
  const text = document.createElement('p')
  const text1 = document.createElement('p')
  const text2 = document.createElement('p')

  section.id = 'About_me'
  text.classList.add('parrafo')
  text1.classList.add('parrafo')
  text2.classList.add('parrafo')
  title.textContent = 'About me'
  text.textContent =
    'Mi experiencia radica en los coneptos basicos de algunas de las principales tecnologias, como HTML, JavaScript, CSS. Mi intencion es crear aplicaciones web eficientes y faciles de usar. '
  text1.textContent =
    ' Si bien disfruto el ambito de la programacion, tambien trato de darle importancia al equilibrio entre el trabajo y la vida personal. Fuera de la programacion soy un amante del futbol, junaterme con mis amigos y de los videojuegos.'
  text2.textContent =
    ' Cada dia me va gustando mas el mundo tecnologico y las infinitas variedades que ofrece y siempre dispuesto a afrontar los nuevos desafios o proyectos que se vayan cruzando en mi camino.'

  section.append(title)
  section.append(text)
  section.append(text1)
  section.append(text2)

  return section
}
