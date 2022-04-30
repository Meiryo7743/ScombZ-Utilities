import loadSettings from './js/loadSettings'
import modifyScombZ from './js/modifyScombZ'
import modifySyllabus from './js/modifySyllabus'
import skipLoginPage from './js/skipLoginPage'
import skipADFS from './js/skipADFS'

const EXTENSION_VERSION = '2.5.2'
console.log(`welcome to Scomb Utilities ver.${EXTENSION_VERSION}`)

loadSettings()
skipADFS()
skipLoginPage()
modifyScombZ()
modifySyllabus()
