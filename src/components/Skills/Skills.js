import './Skills.css'

export const Mis_Skills = () => {
  const Skills = document.createElement('section')
  const title = document.createElement('h3')
  const Divimg = document.createElement('div')
  const HTMLimg = document.createElement('img')
  const JSimg = document.createElement('img')
  const Gitimg = document.createElement('img')
  const Visualimg = document.createElement('img')
  const CSSimg = document.createElement('img')

  Skills.id = 'Skills'
  Divimg.classList.add('ImgSkills')
  title.textContent = 'My Skills'
  HTMLimg.src = 'assets/HTML.png'
  HTMLimg.alt = 'HTML'
  HTMLimg.title = 'HTML'
  JSimg.src = 'assets/javascript.png'
  JSimg.alt = 'JavaScript'
  JSimg.title = 'JavaScript'
  Gitimg.src = 'assets/git.png'
  Gitimg.alt = 'GitHub'
  Gitimg.title = 'GitHub'
  Visualimg.src = 'assets/visual.png'
  Visualimg.alt = 'Visual Studio code'
  Visualimg.title = 'Visual Studio code'
  CSSimg.src = 'assets/CSS.png'
  CSSimg.alt = 'CSS'
  CSSimg.title = 'CSS'

  Skills.append(title)
  Skills.append(Divimg)
  Divimg.append(HTMLimg)
  Divimg.append(JSimg)
  Divimg.append(Gitimg)
  Divimg.append(Visualimg)
  Divimg.append(CSSimg)

  return Skills
}
