import ymaps from 'ymaps'

(async function mapInit() {
  const mapContainer = document.querySelector('.map-js')

  try {
    const maps = await ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
    const map = new maps.Map(mapContainer, {
      center: [55.761670695581714,37.61847402181028],
      controls: [],
      zoom: 14
    }, {suppressMapOpenBlock: true})

    map.behaviors.disable(['drag', 'scrollZoom'])

    const myPlacemark = new maps.Placemark(
      [55.76821389659309,37.62759539240239],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./images/map/point.svg",
        iconImageSize: [12, 12],
      }
    )

    map.geoObjects.add(myPlacemark)

  } catch (error) {
    console.error("error while loading Yandex map", error)
  }
})()