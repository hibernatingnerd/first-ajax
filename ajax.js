document.addEventListener("DOMContentLoaded", function() {
  $.ajax( {
    url: "http://first-ajax-api.herokuapp.com/",
    method: "GET",
    dataType: "text"
  }).done(function(data) {
    console.log('loaded!');
  });
//get the clink event to call ajax function
  var stepOne = document.querySelector('.stepOne');
  var stepSeven =  document.querySelector('.stepSeven');
  var stepEight = document.querySelector('.stepEight');
  var stepEightcontainer =  document.querySelector('#step8');
  var stepNine = document.querySelector('.stepNine');

  stepOne.addEventListener('click', function() {
  //make your ajax call
   var response = $.ajax( {
     url: 'http://first-ajax-api.herokuapp.com/ping',
     method: 'GET',
     dataType: 'text'
  } ).done(function (responseData) {
    console.log(responseData);
    document.getElementById('step3456').append(responseData)
    //Here in the callback, we have a variable called responseData
    //that holds the content of the server's response,
    //in this case, a simple string
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log(errorThrown);
    //In this callback, everyone panic! Our request has failed!
    //Quickly, apologize to the user and try to fix it!
  }).always(function () {
    console.log('hey the function finish running!');
    //Well, I'm not really sure how that went, and I don't care
    //All I know is, it's over.
  });;
  });

  stepSeven.addEventListener('click', function() {
  //make your ajax call
   var response = $.ajax( {
     url: 'http://first-ajax-api.herokuapp.com/count',
     method: 'GET',
     dataType: 'text'
    }).done(function (responseData) {
    console.log(responseData);
    });
  });

  stepEight.addEventListener('click', function() {
  //make your ajax call
   var response = $.ajax( {
     url: 'http://first-ajax-api.herokuapp.com/time',
     method: 'GET',
     data: {timezone: 'Pacific/Honolulu'},
     dataType: 'text'
  } ).done(function (responseData) {
    console.log(responseData);
    divTag = document.createElement('div');
    pTag = document.createElement('p');
    pTag.append(responseData);
    stepEightcontainer.append(divTag);
    stepEightcontainer.append(pTag);
    //Here in the callback, we have a variable called responseData
    //that holds the content of the server's response,
    //in this case, a simple string
  });
});

stepNine.addEventListener('click', function(e) {
// make ajax call
  var resopnse = $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    method: 'GET',
    dataType: 'Html',
  }).done(function(data){
    console.log('i was clicked');
    var aCarResponseEle = document.createElement('div');
          aCarResponseEle.innerHTML = data;
      document.querySelector('#stepNineList').append(aCarResponseEle);
  });



})






});
