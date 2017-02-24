$(document).ready(function() {

  function getData() {

    $('body').append('<h1>Poor Man\'s\ Reddit</h1>')
      .append('<div class="container"></div>');


    var payload;

    $.get('https://www.reddit.com/r/awww.json').done(function(json) {

      payload = json.data.children;

      showData(payload);

    });

  }

  function showData(payload) {

    payload.forEach(function(post) {

      console.log(post);

      $('.container').append('<div class="infoBox"><h3 class="title">' + post.data.title + '</h3><p class="author">User: ' + post.data.author + '</p><a href=' + post.data.preview.images[0].resolutions[2].url + ' data-lightbox=' + post.data.id + '><img src=' + post.data.thumbnail + '></a></div>');

    });

  }

  getData();

});
