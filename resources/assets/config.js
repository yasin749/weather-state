export default config = {
    weatherState : {
        // ikinci bir api kullanabilme ihtimaline karşı "openweathermap" objesi açıldı.
        openweathermap : {
            api: {
                appid : '4cf9deb8b16a507d993b036c4991b7eb',
                url : {
                    data : 'http://api.openweathermap.org/data/2.5/weather',
                    icon : 'http://openweathermap.org/img/w/04d.png'
                }
            },
            cities : {
                istanbul: {
                    "id": 745044,
                    "name": "Istanbul",
                    "country": "TR",
                },
                ankara: {
                    "id": 323786,
                    "name": "Ankara",
                    "country": "TR",
                },
                izmir: {
                    "id": 311044,
                    "name": "İzmir",
                    "country": "TR",
                },
                antalya: {
                    "id": 323776,
                    "name": "Antalya",
                    "country": "TR",
                },
                adana: {
                    "id": 325363,
                    "name": "Adana",
                    "country": "TR",
                },
            }
        }
    }
}

