function loadMap() {

    var mapOptions = {center:new google.maps.LatLng(52.219883, 6.877594), zoom:15};

    var map = new google.maps.Map(document.getElementById("plaats"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(52.219883, 6.877594),
        map: map,
        draggable:true,
        animation:google.maps.Animation.BOUNCE

    });

}