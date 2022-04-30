// Saves options to chrome.storage
const save_options = () => {
  const year = document.getElementById('year').value
  const fac = document.getElementById('fac').value
  const login_auto = document.getElementById('login_auto').checked
  const adfs_auto = document.getElementById('adfs_auto').checked
  const menu_exit_auto = document.getElementById('menu_exit_auto').checked
  const submenu = document.getElementById('submenu').checked
  const exam = document.getElementById('exam').checked
  const additional_lms = document.getElementById('additional_lms').checked
  const finished_report = document.getElementById('finished_report').checked
  chrome.storage.sync.set(
    {
      year: year,
      fac: fac,
      login_auto: login_auto,
      adfs_auto: adfs_auto,
      menu_exit_auto: menu_exit_auto,
      submenu: submenu,
      exam: exam,
      additional_lms: additional_lms,
      finished_report: finished_report
    },
    function () {
      // Update status to const user know options were saved.
      const status = document.getElementById('status')
      status.textContent = '保存されました'
    }
  )
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restore_options = () => {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      year: '2021',
      fac: 'ko1',
      login_auto: true,
      adfs_auto: true,
      menu_exit_auto: true,
      submenu: true,
      exam: true,
      additional_lms: true,
      finished_report: true
    },
    function (items) {
      document.getElementById('year').value = items.year
      document.getElementById('fac').value = items.fac
      document.getElementById('login_auto').checked = items.login_auto
      document.getElementById('adfs_auto').checked = items.adfs_auto
      document.getElementById('menu_exit_auto').checked = items.menu_exit_auto
      document.getElementById('submenu').checked = items.submenu
      document.getElementById('exam').checked = items.exam
      document.getElementById('additional_lms').checked = items.additional_lms
      document.getElementById('finished_report').checked = items.finished_report
    }
  )
}

document.addEventListener('DOMContentLoaded', restore_options)
document.getElementById('save').addEventListener('click', save_options)
