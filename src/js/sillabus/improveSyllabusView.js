// 見やすくする by とくめいっ！
export default () => {
  if (location.href.includes('Matrix')) {
    console.log('シラバスのスタイルを変更します')
    document.querySelector('.table_sticky thead tr td').style.position =
      'static'
    const li = document.querySelectorAll(
      '.table_sticky thead:nth-child(2) tr:nth-child(1) th'
    )
    for (let i = 0; i < li.length; i++) {
      li[i].style.position = 'static'
    }

    const li2 = document.querySelectorAll(
      '.table_sticky thead:nth-child(2) tr:nth-child(2) th'
    )
    for (let i = 0; i < li.length; i++) {
      li2[i].style.position = 'static'
    }
    console.log('変更が完了しました')
  } else {
    // Nothing
  }
}
