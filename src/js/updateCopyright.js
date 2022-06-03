(function updateCopyrightYear() {
  const $el = document.querySelector('.copyright-js')
  const currentText = $el.textContent
  $el.textContent = currentText.slice(0, -4) + new Date().getFullYear()
})()