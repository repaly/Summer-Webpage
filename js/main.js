jQuery(document).ready(function ($) {
    var jssor_1_SlideoTransitions = [
        [{b: -1, d: 1, o: -0.7}],
        [{b: 900, d: 2000, x: -379, e: {x: 7}}],
        [{b: 900, d: 2000, x: -379, e: {x: 7}}],
        [{b: -1, d: 1, o: -1, sX: 2, sY: 2}, {
            b: 0,
            d: 900,
            x: -171,
            y: -341,
            o: 1,
            sX: -2,
            sY: -2,
            e: {x: 3, y: 3, sX: 3, sY: 3}
        }, {b: 900, d: 1600, x: -283, o: -1, e: {x: 16}}]
    ];

    var jssor_1_options = {
        $AutoPlay: 1,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 3000;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
});

jQuery(document).ready(function ($) {

    var jssor_2_SlideoTransitions = [
        [{b: -1, d: 1, o: -0.7}],
        [{b: 900, d: 2000, x: -379, e: {x: 7}}],
        [{b: 900, d: 2000, x: -379, e: {x: 7}}],
        [{b: -1, d: 1, o: -1, sX: 2, sY: 2}, {
            b: 0,
            d: 900,
            x: -171,
            y: -341,
            o: 1,
            sX: -2,
            sY: -2,
            e: {x: 3, y: 3, sX: 3, sY: 3}
        }, {b: 900, d: 1600, x: -283, o: -1, e: {x: 16}}]
    ];

    var jssor_2_options = {
        $AutoPlay: 1,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_2_SlideoTransitions
        },
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_2_slider = new $JssorSlider$("jssor_2", jssor_2_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 3000;

    function ScaleSlider() {
        var containerElement = jssor_2_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_2_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
});

var config = {
    apiKey: "AIzaSyDz7vYnW7BaiYuIh2dB3tvtzDNC6GFQDJQ",
    authDomain: "volkonka-elling55.firebaseapp.com",
    databaseURL: "https://volkonka-elling55.firebaseio.com",
    projectId: "volkonka-elling55",
    storageBucket: "volkonka-elling55.appspot.com",
    messagingSenderId: "901445025885"
};
firebase.initializeApp(config);
var database = firebase.database();

database.ref('/rooms').once('value').then(function (snapshot) {
    var rooms = [];
    snapshot.forEach(function (childSnapShot) {
        rooms.push(childSnapShot.val());
    });
    console.log(rooms);
});

database.ref("/config").once('value').then(function (snap) {
    const contactsData = snap.val().contacts;
    const socialData = snap.val().social;
    var phone = contactsData.phone;
    var email = contactsData.email;

    var instagram = socialData.instagram;
    /*
     {
     "enabled" : true,
     "url" : "https://www.booking.com/"
     }
     */
    var booking = socialData.booking;
    var naYuga = socialData.naYuga;
    var airBnb = socialData.airBnb;
});

function sendFeedback(phone, name) {
    database.ref("feedback").push().set({
        "phone": phone,
        "name": name,
        "date": Date.now()
    }, function (error) {
        if (error) {
            //TODO Handle in UI
            console.log("Failed to send feedback")
        } else {
            //TODO Handle in UI
            console.log("Feedback send successfully")
        }
    });
}

function initMap() {
    var uluru = {lat: 43.867267, lng: 39.386341};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}