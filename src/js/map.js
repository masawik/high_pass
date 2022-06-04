import ymaps from 'ymaps'
import gsap from 'gsap'

class Map {
  constructor() {
    this.$mapContainer = document.querySelector('.map-js')
    this.$closeMapInfoBtn = document.querySelector('.map-info__close-btn-js')
    this.$openMapInfoBtn = document.querySelector('.map-info__open-btn-js')
    this.$mapInfoBlock = document.querySelector('.map-info-js')

    this.maps = null
    this.map = null
  }

  async initializeMap() {
    try {
      this.maps = await ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      this.map = new this.maps.Map(this.$mapContainer, {
        center: [55.761670695581714, 37.61847402181028],
        controls: [],
        zoom: 14
      }, {suppressMapOpenBlock: true})
    } catch (error) {
      console.error("error while loading Yandex map", error)
    }
  }

  disableMapBehaviors(behaviors = ['drag', 'scrollZoom']) {
    this.map.behaviors.disable(behaviors)
  }

  enableMapBehaviors(behaviors = ['drag', 'scrollZoom']) {
    this.map.behaviors.enable(behaviors)
  }

  removeBlackWhiteFilter() {
    this.$mapContainer.classList.remove('map--black-white-filter')
  }

  addBlackWhiteFilter() {
    this.$mapContainer.classList.add('map--black-white-filter')
  }

  initializeAnimation() {
    const mapInfoTl = gsap.timeline({paused: true, defaults: {duration: 0.3}})
    const animationParams = this.$mapInfoBlock.clientHeight > 200 ? {x: -500} : {y: 200}

    mapInfoTl
      .to(this.$mapInfoBlock, animationParams)
      .to(this.$mapInfoBlock, {display: 'none'}, '<')
      .to(this.$openMapInfoBtn, {display: 'block'}, '<')
      .from(this.$openMapInfoBtn, {opacity: 0}, '<')

    const closeMapInfo = () => {
      mapInfoTl.play()
      this.enableMapBehaviors()
      this.removeBlackWhiteFilter()
    }

    const openMapInfo = () => {
      mapInfoTl.reverse()
      this.disableMapBehaviors()
      this.addBlackWhiteFilter()
    }
    this.$closeMapInfoBtn.addEventListener('click', closeMapInfo)
    this.$openMapInfoBtn.addEventListener('click', openMapInfo)
  }

  async init() {
    await this.initializeMap()
    this.disableMapBehaviors()

    const myPlacemark = new this.maps.Placemark(
      [55.76821389659309, 37.62759539240239],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./images/map/point.svg",
        iconImageSize: [12, 12],
      }
    )

    this.map.geoObjects.add(myPlacemark)
    this.map.container.fitToViewport()

    this.initializeAnimation()
  }
}

(async function map() {
  const map = new Map()
  await map.init()
})()
