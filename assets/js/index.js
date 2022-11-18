//add map
// let googleApi = import('https://maps.googleapis.com/maps/api/js?key=AIzaSyDp4mypNUkiisiumY6NRcEiE0nOY9EuOO0&callback=getMap')
function initMap(callback) {
    const uluru = {lat: 43.44502860776409, lng: -80.51556445231331};
    const map = new google.maps.Map(document.getElementById("map-block"), {
        zoom: 15,
        center: uluru,
        disableDefaultUI: true,
        stylers: [
            {color: ''},
            {visibility: 'off'},

        ]
    });

    const marker = new google.maps.Marker({
        position: uluru,
        icon: 'assets/img/carbon_location-filled.svg',
        map: map,
    });
    const infowindow = new google.maps.InfoWindow({

        content: "<p class='map-block__address-block address-block'>" +
            "<span class='address_block__header'>Voodoo</span>" +
            "<br>137 Glasgow St., Unit 115" +
            "<br>Kitchener, ON N2G 4X8" +
            "<br>Ukraine" +
            "</p>" +
            "<div class='map-block__contacts-block contacts-block'>" +
            "<br> <img class='contacts-block__img-phone' src='../../assets/img/phone.svg' alt='logo'> <span class='contacts-block__text-phone' >1-800-480-9597</span>" +
            "<br> <img class='contacts-block__img-mail' src='../../assets/img/mail.svg' alt='logo'> <span class='contacts-block__text-mail' >info@voodoo.com</span>" +
            "</div>"
    });
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    map.setOptions({styles: styles["hide"]});

}

const styles = {
    default: [],
    hide: [
        {   featureType: 'all',
            stylers: [{
                gamma: 3.5
            }]
        },
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#fcfaf6",
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bbbbbb",
                    // "gamma": 2.5
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#c9b2a6"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#dcd2be"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ae9e90"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dfd2ae"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#93817c"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a5b076"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#447530"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#e5e4e4"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d1eeff"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#92998d"
                }
            ]
        }
    ],
};


window.initMap = initMap;
// Написати метод,
// який знаходитиме на сторінці всі елементи з тегом select,
// приховуватиме їх,
// та створюватиме кастомний select згідно з макетом, на місце стандартного select.
// *не використовувати сторонні бібліотеки

//Делаем метод который находит все теги селект
//И добавляет к каждому кастомный стиль


// //
// let selectArrPracticeInstitution = [
//     {name: 'MacDonald\'s'},
//     {name: 'Tesla'},
//     {name: 'Silpo'},
// ]
//
// selectArrPracticeInstitution.forEach(e => console.log(e.name))
// let selectBlocks = document.querySelectorAll('select');
//
// for (let selectElement of selectBlocks) {
//     selectElement.classList.add("test2")
//     for (let i = 0; i < selectElement.innerHTML.length; i++) {
//         if (selectElement[i]) {
//             selectElement[i].classList.add('test3')
//             console.log(selectElement[i])
//         }
//     }
//     // console.log(selectElement.innerHTML)
// }

// if (document.querySelector('select.selectArrPracticeInstitution')) {
//     selectArrPracticeInstitution.forEach(e => bC.innerHTML += "<option>" + e.name + "</option>");
//     console.log(bC)
// }

// for (let i = 0; i < bC.length; i++) {
//     selectArrPracticeInstitution.forEach(e => bC[i].innerHTML += "<option>" + e.name + "</option>");
//     console.log(bC[i])
// }

// for (let i = 0; i < elements.length; i++) {
//     elements[i].innerHTML = `Option from test`
//     console.log(elements[i].innerHTML)
// }
