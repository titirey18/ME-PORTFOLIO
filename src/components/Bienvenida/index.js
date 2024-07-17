import './index.css'

export const Bienvenida = () => {
  const Bienvenida = document.createElement('section')
  const Divnombre = document.createElement('div')
  const MEimg = document.createElement('img')
  const p = document.createElement('p')
  const h1 = document.createElement('h1')
  const h2 = document.createElement('h2')

  Bienvenida.classList.add('Bienvenida')
  p.textContent = 'Hola! Mi nombre es'
  h1.textContent = 'THIAGO SOUBIELLE'
  h2.textContent = 'Soy un web Developer'
  MEimg.src = 'assets/D748732F-D308-4E91-AF85-20756DC1AC4E.jpg'

  Bienvenida.appendChild(Divnombre)
  Divnombre.appendChild(p)
  Divnombre.appendChild(h1)
  Divnombre.appendChild(h2)
  Bienvenida.appendChild(MEimg)

  return Bienvenida
}
