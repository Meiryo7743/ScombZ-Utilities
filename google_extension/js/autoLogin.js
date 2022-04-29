// ログインボタン自動クリック
const autoLogin = () => {
  if (document.domain === 'scombz.shibaura-it.ac.jp/login') {
    window.onload = () => {
      console.log('ログインボタンをクリックします')
      document.querySelector('.login-btn:nth-child(1)').click()
      console.log('ログインボタンをクリックしました')
    }
  } else {
    // Nothing
  }
}
