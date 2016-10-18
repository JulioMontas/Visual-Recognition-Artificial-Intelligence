window.onload = function() {

  var searchBtn = document.getElementById('submit-btn');

  searchBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var imageTagSearch = document.getElementById('search-tag').value;

    document.getElementById("tags-result-search").src = imageTagSearch;

    // background change from URL search.
    // var backgroundColor = document.querySelector('body');
    // document.body.style.backgroundImage = "url(" + imageTagSearch + ")";

    Clarifai.initialize({
      'clientId': clientIdKey,
      'clientSecret': clientSecretKey
    });
    // get a token
    function getToken() {
      Clarifai.getToken().then(
        handleResponse,
        handleError
      );
    };

    // get tags with an array of images
    function getTags() {
      Clarifai.getTagsByUrl([imageTagSearch]).then(
        handleResponse,
        handleError
      );
    };
    function getColors() {
        Clarifai.getColorsByUrl(imageTagSearch).then(
          handleResponse,
          handleError
        );
        console.log('handleResponse:', handleResponse);
      };

    function handleResponse(response){
      console.log('Tag Data:', response.results[0].result.tag.classes);
      console.log('Tag Probs:', response.results[0].result.tag.probs);
      console.log('Tag status_msg:', response.status_msg);
      console.log('Tag status_code:', response.status_code);

      // Loop this pleaseee.
      document.getElementById("tags-result-1").innerHTML = response.results[0].result.tag.classes[0];
      document.getElementById("tags-result-2").innerHTML = response.results[0].result.tag.classes[1];
      document.getElementById("tags-result-3").innerHTML = response.results[0].result.tag.classes[2];
      document.getElementById("tags-result-4").innerHTML = response.results[0].result.tag.classes[3];
      document.getElementById("tags-result-5").innerHTML = response.results[0].result.tag.classes[4];
      document.getElementById("tags-result-6").innerHTML = response.results[0].result.tag.classes[5];
      document.getElementById("tags-result-7").innerHTML = response.results[0].result.tag.classes[6];
      document.getElementById("tags-result-8").innerHTML = response.results[0].result.tag.classes[7];
      document.getElementById("tags-result-9").innerHTML = response.results[0].result.tag.classes[8];
      document.getElementById("tags-result-10").innerHTML = response.results[0].result.tag.classes[9];
      document.getElementById("tags-result-11").innerHTML = response.results[0].result.tag.classes[10];
      document.getElementById("tags-result-12").innerHTML = response.results[0].result.tag.classes[11];
      document.getElementById("tags-result-13").innerHTML = response.results[0].result.tag.classes[12];
      document.getElementById("tags-result-14").innerHTML = response.results[0].result.tag.classes[13];
      document.getElementById("tags-result-15").innerHTML = response.results[0].result.tag.classes[14];
      document.getElementById("tags-result-16").innerHTML = response.results[0].result.tag.classes[15];
      document.getElementById("tags-result-17").innerHTML = response.results[0].result.tag.classes[16];
      document.getElementById("tags-result-18").innerHTML = response.results[0].result.tag.classes[17];
      document.getElementById("tags-result-19").innerHTML = response.results[0].result.tag.classes[18];
      document.getElementById("tags-result-20").innerHTML = response.results[0].result.tag.classes[19];

      document.getElementById("tags-result-probs-1").innerHTML = response.results[0].result.tag.probs[0];
      document.getElementById("tags-result-probs-2").innerHTML = response.results[0].result.tag.probs[1];
      document.getElementById("tags-result-probs-3").innerHTML = response.results[0].result.tag.probs[2];
      document.getElementById("tags-result-probs-4").innerHTML = response.results[0].result.tag.probs[3];
      document.getElementById("tags-result-probs-5").innerHTML = response.results[0].result.tag.probs[4];
      document.getElementById("tags-result-probs-6").innerHTML = response.results[0].result.tag.probs[5];
      document.getElementById("tags-result-probs-7").innerHTML = response.results[0].result.tag.probs[6];
      document.getElementById("tags-result-probs-8").innerHTML = response.results[0].result.tag.probs[7];
      document.getElementById("tags-result-probs-9").innerHTML = response.results[0].result.tag.probs[8];
      document.getElementById("tags-result-probs-10").innerHTML = response.results[0].result.tag.probs[9];
      document.getElementById("tags-result-probs-11").innerHTML = response.results[0].result.tag.probs[10];
      document.getElementById("tags-result-probs-12").innerHTML = response.results[0].result.tag.probs[11];
      document.getElementById("tags-result-probs-13").innerHTML = response.results[0].result.tag.probs[12];
      document.getElementById("tags-result-probs-14").innerHTML = response.results[0].result.tag.probs[13];
      document.getElementById("tags-result-probs-15").innerHTML = response.results[0].result.tag.probs[14];
      document.getElementById("tags-result-probs-16").innerHTML = response.results[0].result.tag.probs[15];
      document.getElementById("tags-result-probs-17").innerHTML = response.results[0].result.tag.probs[16];
      document.getElementById("tags-result-probs-18").innerHTML = response.results[0].result.tag.probs[17];
      document.getElementById("tags-result-probs-19").innerHTML = response.results[0].result.tag.probs[18];
      document.getElementById("tags-result-probs-20").innerHTML = response.results[0].result.tag.probs[19];
    };

    function handleError(err){
      console.log('promise error:', err);
    };

    getTags();
    getColors();


  }); // end click fxn
}; // end window onload fxn
