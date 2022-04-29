// シラバス適用
const syllabus = () => {
  if (document.domain == 'syllabus.sic.shibaura-it.ac.jp') {
    if (
      location.href.includes('namazu') &&
      location.href.includes('ajaxmode=true')
    ) {
      console.log('ScombZからのシラバスへの遷移を検出しました')
      // 検索からの自動リンク
      const $sylSubjLink = document.getElementById('hit_1')
      const $sylSubDDTag = document.getElementsByTagName('a')
      if ($sylSubjLink) {
        console.log('科目ページに遷移します by ID')
        $sylSubjLink.click()
      } else if ($sylSubDDTag[22]) {
        console.log('科目ページに遷移します by Tag')
        window.location.href = $sylSubDDTag[22].innerHTML
      } else {
        console.log('科目が見つかりませんでした')
        document.querySelector('.namazu-result-header').innerHTML = `
                  <p>検索結果 参考ヒット数:0</p>
                  <div style="width:100%;height:100vh;">
                  <h1>シラバスデータの取得に失敗しました</h1>
                  <h3>該当する科目が見つかりませんでした。お手数おかけしますが、シラバス内で直接お探しください。</h3>
                  <h3><a href="http://syllabus.sic.shibaura-it.ac.jp/">シラバスへ</a></h3>
                  </div>
                  `
      }
    } else if (location.href.includes('Matrix')) {
      // 見やすくする by とくめいっ！
      console.log('シラバスのスタイルを変更します')
      document.querySelector('.table_sticky thead tr td').style.position =
        'static'
      let li = document.querySelectorAll(
        '.table_sticky thead:nth-child(2) tr:nth-child(1) th'
      )
      for (let i = 0; i < li.length; i++) {
        li[i].style.position = 'static'
      }

      let li2 = document.querySelectorAll(
        '.table_sticky thead:nth-child(2) tr:nth-child(2) th'
      )
      for (let i = 0; i < li.length; i++) {
        li2[i].style.position = 'static'
      }
      console.log('変更が完了しました')
    }
  }
}
