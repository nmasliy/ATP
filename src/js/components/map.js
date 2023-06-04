const mapBlock = document.querySelector('#contacts-map');
let map = null;

if (mapBlock) {
	const addressesItems = document.querySelectorAll('.contacts__tabs li');

	let center = JSON.parse(addressesItems[0].dataset.coords);

	ymaps.ready(function () {
		map = new ymaps.Map('contacts-map', {
			center: center,
			zoom: 15,
			controls: [],
		});

		var myIcon = ymaps.templateLayoutFactory.createClass(
			'<div class="contacts__map-icon"> <span>' +
				'{{ properties.iconCaption }}' +
				'</span> </div>'
		);

		// Заполняем карту стартовыми локациями
		addressesItems.forEach((el) => {
			var placemark = new ymaps.Placemark(
				JSON.parse(el.dataset.coords),
				{
					iconCaption: el.dataset.title,
				},
				{
					iconLayout: myIcon,
				}
			);

			map.geoObjects.add(placemark);
		});
	});
}

export function setCenter(coords) {
  map?.setCenter(JSON.parse(coords));
}
