import './Contacto.css'

export const My_contact = () => {
  const Contacto = document.createElement('article')
  const h4 = document.createElement('h4')
  const Parrafo = document.createElement('p')
  const From = document.createElement('form')
  const Firstname = document.createElement('input')
  const Lastname = document.createElement('input')
  const Email = document.createElement('input')
  const Mensaje = document.createElement('textarea')
  const Button = document.createElement('button')

  Contacto.id = 'Contact'
  h4.textContent = 'Ponerse en contacto'
  Parrafo.textContent =
    'En busqueda de nuevas oportunidades para trabajas con grandes empresas o personas. Si le interesa, por favor ponganse en contacto.'
  From.classList.add('Contactame')
  Firstname.placeholder = 'First name'
  Lastname.placeholder = 'Last name'
  Email.placeholder = 'Email address'
  Mensaje.placeholder = 'Message'
  Button.textContent = 'Send'
  Firstname.classList.add('Envio')
  Lastname.classList.add('Envio')
  Email.classList.add('Envio')
  Mensaje.classList.add('Envio2')

  Contacto.append(h4)
  Contacto.append(Parrafo)
  Contacto.append(From)
  From.appendChild(Firstname)
  From.appendChild(Lastname)
  From.appendChild(Email)
  From.appendChild(Mensaje)
  From.appendChild(Button)

  return Contacto
}
