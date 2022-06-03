export class Overflow {
  static disable() {
    document.body.style.overflow = 'hidden'
  }

  static enable() {
    document.body.style.overflow = ''
  }
}

export const setTabIndex = ($el, value) => $el.tabIndex = value