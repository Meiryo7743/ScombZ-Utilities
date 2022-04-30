// ログインボタン自動クリック
export default () => {
  const currentLocation = window.location.origin + window.location.pathname
  if (currentLocation === 'https://scombz.shibaura-it.ac.jp/login') {
    window.addEventListener('DOMContentLoaded', skipLoginPage())
  } else {
    // Nothing
  }
}

const skipLoginPage = () => {
  console.log('ログインボタンをクリックします')
  const loginButton = document.querySelector('#comAuth > div > a:nth-child(1)')
  loginButton.click()
  console.log('ログインボタンをクリックしました')
}
