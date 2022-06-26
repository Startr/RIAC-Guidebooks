new Vue({
  el: '#v-for-object',
  data: {
  "object": {
    "title": "Love and Absance",
    "author": "Jane Doe",
    "publishedAt": "2019-10-12",
    "detail": {
      "test": "test"
    },
    "detail": {
      "test2": "test"
    }
  }
}
})

function pagination() {
  var offset = $(document).scrollTop();
  var windowHeight = $(window).height();
  var $body = $("body");

  switch (true) {
    case offset > windowHeight * 3.75:
      $body.removeClass().addClass("page-5");
      break;
    case offset > windowHeight * 2.75:
      $body.removeClass().addClass("page-4");
      break;
    case offset > windowHeight * 1.75:
      $body.removeClass().addClass("page-3");
      break;
    case offset > windowHeight * 0.75:
      $body.removeClass().addClass("page-2");
      break;
    default:
      $body.removeClass().addClass("page-1");
  }
}

if ($("body .main section").length != $("#pagination li").length) {
  $("#pagination").empty();
  for (each of $("body .main section"))
    $("#pagination").append('<li><a href="#' + each.id + '"></a></li>');
}

pagination();

$(document).on("scroll", pagination);

$(document).on("click", 'a[href^="#"]', function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});
