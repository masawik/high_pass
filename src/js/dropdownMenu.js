import {gsap} from "gsap";
import {Overflow} from "./utils.js";

(function dropdownMenu() {
  const $dropdownMenu = document.querySelector('.dropdown-menu-js')
  const $dropdownMenuOpenBtn = document.querySelector('.dropdown-menu-open-btn-js')
  const $dropdownMenuCloseBtn = document.querySelector('.dropdown-menu-close-btn-js')

  const dropdownMenuTl = gsap.timeline({paused: true})

  dropdownMenuTl
    .to($dropdownMenu, {display: 'block'})
    .from($dropdownMenu, {opacity: 0, y: -50, duration: 0.2})

  const open = () => {
    Overflow.disable()
    dropdownMenuTl.play()
  }

  const close = () => {
    dropdownMenuTl.reverse()
    Overflow.enable()
  }

  $dropdownMenuOpenBtn.addEventListener('click', open)
  $dropdownMenuCloseBtn.addEventListener('click', close)
})();