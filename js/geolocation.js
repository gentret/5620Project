function initMap() {
    //Map type style arrays. This will limit the feature types
    

    // 
    let mapOptions0 = {
        // Centering we will add latiude and longitude for geo locations
        // A single map with Lat and Long
        // center: new google.maps.LatLng'34.06809512', '-118.1001461'),
        
        // A map array with multiple lati and long
        center: { lat: 34.0661000, lng: -118.16901461},
                
        // Zoom range is 1 to 20. 1 world 20 buildings
        zoom: 17,

        // This map ID should provide the saved settings
        mapId: '22ada4804059a981',
        
    }
    
    let mapOptions1 = {
        // Centering we will add latiude and longitude for geo locations
        // center: new google.maps.LatLng'34.06809512', '-118.17001461'),
        
        // A map array with multiple lati and long
        center: { lat: 34.0642500, lng: -118.17001461},  

        // Zoom range is 1 to 20. 1 world 20 buildings
        zoom: 20,
        mapTypeId: 'satellite',

        // This map ID should provide the saved settings
        mapId: '22ada4804059a981'
    }
    let mapOptions2 = {
        // Centering we will add latiude and longitude for geo locations
        // center: new google.maps.LatLng'34.06809512', '-118.17001461'),
        
        // A map array with multiple lati and long
        center: { lat: 34.0643000, lng: -118.17001461},
                

        // Zoom range is 1 to 20. 1 world 20 buildings
        zoom: 20,
        mapTypeId: 'satellite',

        // This map ID should provide the saved settings
        mapId: '22ada4804059a981'
     }
     let mapOptions3 = {
        // Centering we will add latiude and longitude for geo locations

        // A map array with multiple lati and long
        center: { lat: 34.0643000, lng: -118.16961461},
                

        // Zoom range is 1 to 20. 1 world 20 buildings
        zoom: 20,
        mapTypeId: 'satellite',

        // This map ID should provide the saved settings
        mapId: '22ada4804059a981'
     }

     let mapOptions4 = {
        center: { lat: 34.0650000, lng: -118.17061461},
        zoom: 20,
        mapTypeId: 'satellite',
        mapId: '22ada4804059a981'
     }
     let mapOptions5 = {
        center: { lat: 34.0660000, lng: -118.17061461},
        zoom: 20,
        mapTypeId: 'satellite',
        mapId: '22ada4804059a981'
     }
     let mapOptions6 = {
        center: { lat: 34.0669000, lng: -118.16905461},
        zoom: 20,
        mapTypeId: 'satellite',
        mapId: '22ada4804059a981'
     }
     let mapOptions7 = {
        center: { lat: 34.0675000, lng: -118.16820461},
        zoom: 20,
        mapTypeId: 'satellite',
        mapId: '22ada4804059a981'
     }
     let mapOptions8 = {
        center: { lat: 34.0675000, lng: -118.16850461},
        zoom: 20,
        mapTypeId: 'satellite',
        mapId: '22ada4804059a981'
     }
     let mapOptions9 = {
        center: { lat: 34.0683000, lng: -118.16900461},
        zoom: 20,
        mapTypeId: 'satellite',
        mapId: '22ada4804059a981'
     }
     let mapOptions10 = {
        center: { lat: 34.0677000, lng: -118.16750461},
        zoom: 20,
        mapTypeId: 'satellite',
        mapId: '22ada4804059a981'
     }
    
    

    // First Google Map
    // Then pass the map options object to the map constructor
    let map = new google.maps.Map(document.getElementById('map'), mapOptions0);
    
    // For multiple locations on the map
    // Another google.maps.Map()
    let map1 = new google.maps.Map(document.getElementById('map1'), mapOptions1);
    let map2 = new google.maps.Map(document.getElementById('map2'), mapOptions2);
    let map3 = new google.maps.Map(document.getElementById('map3'), mapOptions3);
    let map4 = new google.maps.Map(document.getElementById('map4'), mapOptions4);
    let map5 = new google.maps.Map(document.getElementById('map5'), mapOptions5);
    let map6 = new google.maps.Map(document.getElementById('map6'), mapOptions6);
    let map7 = new google.maps.Map(document.getElementById('map7'), mapOptions7);
    let map8 = new google.maps.Map(document.getElementById('map8'), mapOptions8);
    let map9 = new google.maps.Map(document.getElementById('map9'), mapOptions9);
    let map10 = new google.maps.Map(document.getElementById('map10'), mapOptions10);
    

    
    
    // Tilting the google image by 45 degrees. 0 is top view
    map.setTilt(45);
    
    map.setMapTypeId('satellite');

    document.getElementById('tilt').innerHTML = map.getTilt();
    

}
