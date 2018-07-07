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

database.ref("/config").once('value').then(function (snap) {
    const contactsData = snap.val().contacts;
    const socialData = snap.val().social;
    var phone = contactsData.phone;
    var email = contactsData.email;

    var instagram = socialData.instagram;
    var booking = socialData.booking;
    var naYuga = socialData.naYuga;
    var airBnb = socialData.airBnb;
});


document.addEventListener("click", function(e) {

  if (e.target.className === 'all-photos') {
    modalRender(rooms[e.target.value])
  }
  if (e.target.className === 'modal fade' || e.target.className === 'btn col-12 d-sm-none close-modal') {
    modalUnmount()
  }

  if (e.target.className === 'mt-5 submit-info') {
    let phone = $('input[name="user_phone"]').val();
    let name = $('input[name="user_name"]').val();
    if (phone && name) {
      sendFeedback(phone, name)
    }
  }
});

function sendFeedback(phone, name) {
    database.ref("feedback").push().set({
        "phone": phone,
        "name": name,
        "date": Date.now()
    }, function (error) {
        if (error) {
            let htmlElement = '<h1>Что-то пошло не так. Повторите попытку позже либо свяжитесь с нами по телефону или по почте</h1>'
            $('#submit-info').empty()
            $('#submit-info').append(htmlElement)
        } else {
            let htmlElement = '<h1>Спасибо, скоро свяжемся!</h1>'
            $('#submit-info').empty()
            $('#submit-info').append(htmlElement)
        }
    });
}

database.ref('/rooms').once('value').then(function (snapshot) {
    let date = new Date();
    let currentMonth = date.getMonth();
    let insertingElements = '';
    snapshot.forEach(function (childSnapShot) {
        rooms.push(childSnapShot.val());
    });
    rooms.forEach(function (index) {
        let minPrice = Math.min.apply(Math, index.prices.slice(currentMonth, currentMonth+3));
        let image = '<img class="rounded" data-u="image" src=' + index.images[0] + '/>'
        let html = '                    <div data-p="225.00">\n' +
                                        image +
            '                        <div class="description-room">\n' +
            '                            <button class="all-photos" data-toggle="modal" data-target="#exampleModal" value="' + index.sortIndex +  '">Все фото</button>\n' +
            '                            <div class="overflow-container">\n' +
            '                               <h5>'+ index.title + ' • от ' + minPrice + 'р. за ночь</h5>\n' +
            '                               <p>' + index.description + '</p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>';
        insertingElements += html;
    });
    $('#jssor_2 .room-slides').append(insertingElements);

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
})});



function modalUnmount() {
  $('#jssor_3').remove();
  $('.modal-body .description-room').remove();
}

function modalRender(index) {
  let jslider = '<div id="jssor_3"'+
'                         style="position:relative;margin:0 auto;top:0px;left:0px;width:1300px;height:700px;overflow:hidden;visibility:hidden;">'+
'                        <!-- Loading Screen -->'+
'                        <div data-u="loading" class="jssorl-009-spin"'+
'                             style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">'+
'                            <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="img/spin.svg"/>'+
'                        </div>'+
'                        <div id="modal-slides" data-u="slides"'+
'                             style="cursor:default;position:relative;top:0px;left:0px;width:1300px;height:700px;overflow:hidden;">'+
'                        </div>'+
'                        <!-- Bullet Navigator -->'+
'                        <div data-u="navigator" class="jssorb032" style="position:absolute;bottom:12px;right:12px;"'+
'                             data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">'+
'                            <div data-u="prototype" class="i" style="width:16px;height:16px;">'+
'                                <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">'+
'                                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>'+
'                                </svg>'+
'                            </div>'+
'                        </div>'+
'                        <!-- Arrow Navigator -->'+
'                        <div data-u="arrowleft" class="jssora051" style="width:65px;height:65px;top:0px;left:25px;"'+
'                             data-autocenter="2" data-scale="0.75" data-scale-left="0.75">'+
'                            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">'+
'                                <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>'+
'                            </svg>'+
'                        </div>'+
'                        <div data-u="arrowright" class="jssora051" style="width:65px;height:65px;top:0px;right:25px;"'+
'                             data-autocenter="2" data-scale="0.75" data-scale-right="0.75">'+
'                            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">'+
'                                <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>'+
'                            </svg>'+
'                        </div>'+
'                    </div>';
  $('.modal-body').append(jslider);


  //Modal window
  let date = new Date();
  let currentMonth = date.getMonth();
  let month=[
     'Январь',
     'Февраль',
     'Март',
     'Апрель',
     'Май',
     'Июнь',
     'Июль',
     'Август',
     'Сентябрь',
     'Октябрь',
     'Ноябрь',
     'Декабрь'
  ];
  let insertModalImages = '';
  let insertModalDescription = '';
          index.images.forEach(function(roomImage) {
            insertModalImages += '<div data-p="225.00">\n' +
                                    '<img data-u="image" src=' + roomImage + '>\n' +
                                 '</div>'
          })
          let monthList = month.slice(currentMonth, currentMonth + 6);
          let priceList = index.prices.slice(currentMonth, currentMonth + 6);
          if (monthList.length < 6 ) {
            monthList.concat(month.slice(0, 6 - monthList.length))
            priceList.concat(index.prices.slice(0, 6 - monthList.length))
          }
          insertModalDescription = '<div class="description-room row position-static">' +
              '<div class="col-12 col-sm-7 col-lg-8">' +
                  '<h5>' + index.title + '</h5>' +
                  '<p>' + index.description + '</p>' +
              '</div>' +
              '<div class="col-12 col-sm-5 col-lg-4 prices">' +
                  '<div class="row">' +
                      '<div class="col-6">' +
                          'Цена за <br>' +
                          '<b>' + monthList[0] + ':</b> <br>' +
                          monthList[1] + ': <br>' +
                          monthList[2] + ': <br>' +
                          monthList[3] + ': <br>' +
                          monthList[4] + ': <br>' +
                          monthList[5] + ':' +
                      '</div>' +
                      '<div class="col-6">' +
                          '<br>' +
                          '<b>' + priceList[0] + '/ночь</b><br>' +
                          priceList[1] + 'р/ночь<br>' +
                          priceList[2] + 'р/ночь<br>' +
                          priceList[3] + 'р/ночь<br>' +
                          priceList[4] + 'р/ночь<br>' +
                          priceList[5] + 'р/ночь' +
                      '</div>'
                  '</div>'
              <'/div>'
          '</div>'

          $('#jssor_3 #modal-slides').append(insertModalImages);
          $('.modal-body').append(insertModalDescription);
          initializeSlider($);
}

function initializeSlider($) {
  var jssor_3_SlideoTransitions = [
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

  var jssor_3_options = {
      $AutoPlay: 1,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $CaptionSliderOptions: {
          $Class: $JssorCaptionSlideo$,
          $Transitions: jssor_3_SlideoTransitions
      },
      $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$
      }
  };

  var jssor_3_slider = new $JssorSlider$("jssor_3", jssor_3_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 3000;

  function ScaleSlider() {
      var containerElement = jssor_3_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;

      if (containerWidth) {

          var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

          jssor_3_slider.$ScaleWidth(expectedWidth);
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
}



var rooms = [];

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
