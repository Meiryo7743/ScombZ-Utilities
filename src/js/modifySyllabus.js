import detectRedirect from './syllabus/detectRedirect'
import improveSyllabusView from './syllabus/improveSyllabusView'

// シラバス適用
export default () => {
  const currentLocation = window.location.origin
  if (currentLocation === 'https://syllabus.sic.shibaura-it.ac.jp') {
    detectRedirect()
    improveSyllabusView()
  } else {
    // Nothing
  }
}
