import closeSideMenu from './scombz/closeSideMenu'
import improveExamView from './scombz/improveExamView'
import hideCompletedTask from './scombz/hideCompletedTask'
import improveSideMenuView from './scombz/improveSideMenuView'

// その他
export default () => {
  const currentLocation = window.location.origin
  if (currentLocation === 'https://scombz.shibaura-it.ac.jp') {
    improveExamView()
    closeSideMenu()

    console.log('Webページ読み込み完了まで待機しています')
    window.addEventListener('load', () => {
      console.log('Webページを読み込みました')
      hideCompletedTask()
      improveSideMenuView()
    })

    console.log('すべての機能の実行が完了しました')
  } else {
    // Nothing
  }
}
