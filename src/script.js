var dataURL = "./data/guidebook_en.json";

var App = new Vue({
  el: '#app',
  data: {
    chapters: [], // initialize empty array,
    languages: [{
      name: 'English',
      id: 'en'
    }, {
      name: 'Français',
      id: 'fr'
    }, {
      name: 'English - Old version',
      id: 'en_czech'
    }],
    lang: 'fr',
  },
  computed: {
    translatedStrings() {
      switch(this.lang) {
        case 'fr':
          return {'funFact': 'Fait intéressant:', 'didYouKnow': 'Saviez-vous que:', 'troubleshooting': 'Dépannage:'};
        case 'en_czech':
        case 'en':
          return {'funFact': 'Fun fact:', 'didYouKnow': 'Did you know:', 'troubleshooting': 'Troubleshooting:'};
      }
    }
  },
  methods: {
    edit: function (object) {
      if (object.editable !== false) {
        object.editable = true;
      }
    },
    save: function (object, event) {
      object.editable = null;
      object.title = event.target.innerText;
      console.log(object, event);
    },
    setLanguage: function (lang) {
      this.lang = lang;
      dataURL = "./data/guidebook_" + lang + ".json";
      $.getJSON(dataURL, function (data) {
        App.chapters = data.items.chapters;
      });
    }
  },
  mounted() { // when the Vue app is booted up, this is run automatically.
    var self = this // create a closure to access component in the callback below
    self.setLanguage(self.lang);
  }
})

/*
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
*/