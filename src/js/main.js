import {gsap} from "gsap";

(function searchForm() {
  const $openSearchFormBtn = document.querySelector('.open-search-form-btn-js')
  const $closeSearchFormBtn = document.querySelector('.close-search-form-btn-js')
  const $searchForm = document.querySelector('.search-form-js')
  const $searchFormInput = document.querySelector('.search-form-input-js')
  const searchFormTl = gsap.timeline({paused: true})

  searchFormTl
    .to($searchForm, {display: 'flex'})
    .from($searchForm, {opacity: 0, x: 50, duration: 0.2})

  const clickOutSide = e => {
    if (!$searchForm.contains(e.target)) closeForm()
  }

  const openForm = () => {
    searchFormTl
      .play()
      .eventCallback('onComplete', () => {
        $searchFormInput.focus()
        document.body.addEventListener('click', clickOutSide)
      })
  }

  const closeForm = () => {
    searchFormTl.reverse()
    document.body.removeEventListener('click', clickOutSide)
  }

  $openSearchFormBtn.addEventListener('click', openForm)
  $closeSearchFormBtn.addEventListener('click', closeForm)

  $searchForm.addEventListener('submit', e => {
    e.preventDefault()
    $searchFormInput.value = ''
    searchFormTl.reverse()
    console.log('search form submitted')
  })
})();

(function dropdownMenu() {
  const $dropdownMenu = document.querySelector('.dropdown-menu-js')
  const $dropdownMenuOpenBtn = document.querySelector('.dropdown-menu-open-btn-js')
  const $dropdownMenuCloseBtn = document.querySelector('.dropdown-menu-close-btn-js')

  const dropdownMenuTl = gsap.timeline({paused: true})

  dropdownMenuTl
    .to($dropdownMenu, {display: 'block'})
    .from($dropdownMenu, {opacity: 0, y: -50, duration: 0.2})

  $dropdownMenuOpenBtn.addEventListener('click', () => dropdownMenuTl.play())
  $dropdownMenuCloseBtn.addEventListener('click', () => dropdownMenuTl.reverse())
})();
