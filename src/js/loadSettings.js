export default () => {
  console.log('Chrome拡張機能設定を読み込んでいます')
  chrome.storage.sync.get(
    {
      year: null,
      fac: null,
      login_auto: true,
      adfs_auto: true,
      menu_exit_auto: true,
      submenu: true,
      exam: true,
      additional_lms: true,
      finished_report: true
    },
    function (items) {
      localStorage.setItem('udai:settings_year', items.year)
      localStorage.setItem('udai:settings_fac', items.fac)
      localStorage.setItem('udai:settings_login_auto', items.login_auto)
      localStorage.setItem('udai:settings_adfs_auto', items.adfs_auto)
      localStorage.setItem('udai:settings_exit_auto', items.menu_exit_auto)
      localStorage.setItem('udai:settings_submenu', items.submenu)
      localStorage.setItem('udai:settings_exam', items.exam)
      localStorage.setItem('udai:settings_additional_lms', items.additional_lms)
      localStorage.setItem(
        'udai:settings_finished_report',
        items.finished_report
      )
    }
  )

  const extensionSettings = {
    year: localStorage.getItem('udai:settings_year'),
    fac: localStorage.getItem('udai:settings_fac'),
    loginAuto: localStorage.getItem('udai:settings_login_auto'),
    adfsAuto: localStorage.getItem('udai:settings_adfs_auto'),
    exitAuto: localStorage.getItem('udai:settings_exit_auto'),
    submenu: localStorage.getItem('udai:settings_submenu'),
    exam: localStorage.getItem('udai:settings_exam'),
    additionalLms: localStorage.getItem('udai:settings_additional_lms'),
    finishedReport: localStorage.getItem('udai:settings_finished_report')
  }

  for (const item of extensionSettings) {
    console.log(item.key + item)
  }

  console.log('読み込み完了')
}

export const s2b = (str) => {
  if (str == 'true' || str === null || typeof str === 'undefined') {
    return true
  } else {
    return false
  }
}
