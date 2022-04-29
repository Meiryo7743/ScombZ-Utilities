// Skip ADFS
const skipADFS = () => {
  if (document.domain === 'adfs.sic.shibaura-it.ac.jp') {
    console.log('ADFSをスキップします')
    document.getElementById('continuecontinueButton').click()
    console.log('ADFSをスキップしました')
  } else {
    // Nothing
  }
}
