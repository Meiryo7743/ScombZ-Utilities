// メニューを閉じる
export default () => {
  console.log('メニューを閉じます')
  const closeButton = document.getElementById('sidemenuClose')
  if (closeButton && s2b($settings_exit_auto)) {
    closeButton.click()
    if (
      !document.getElementById('sidemenu').classList.contains('sidemenu-close')
    ) {
      document.getElementById('sidemenu').classList.add('sidemenu-close')
    }
    if (
      !document.getElementById('pageMain').classList.contains('sidemenu-hide')
    ) {
      document.getElementById('pageMain').classList.add('sidemenu-hide')
    }
    console.log('メニューを閉じました')
  }
}
