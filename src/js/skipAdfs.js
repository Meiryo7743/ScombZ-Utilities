// Skip ADFS
export default () => {
  const currentLocation = window.location.origin
  if (currentLocation === 'https://adfs.sic.shibaura-it.ac.jp') {
    window.addEventListener('DOMContentLoaded', skipADFS())
  } else {
    // Nothing
  }
}

const skipADFS = () => {
  console.log('ADFSをスキップします')
  const continueButton = document.getElementById('continueButton')
  continueButton.click()
  console.log('ADFSをスキップしました')
}
