$(document).ready(function () {
  // MobileNav();
  CustomSelect();
  OpenClose();
  Tabs();
  stickyHeader();
});

function MobileNav() {
  var navopener = $(".nav-opener"),
    navwrap = $(".nav"),
    links = navwrap.find("a"),
    navactive = "nav-active",
    searchOpener = $(".search-opener");

  navopener.click(function () {
    $("body").removeClass("search-active");
    $("body").toggleClass(navactive);
  });

  searchOpener.click(function (e) {
    e.preventDefault();
    $("body").toggleClass("search-active");
  });

  $(".nav li").each(function () {
    var item = $(this);
    var drop = item.find("ul");
    var link = item.find("a").eq(0);
    if (drop.length) {
      item.addClass("hasdrop");
      if (link.length)
        link
          .addClass("hasdrop-a")
          .attr({ "data-more": "", "data-outside": "" });
    }
  });

  links.click(function () {
    $(this).hasClass("hasdrop-a") ? false : $("body").removeClass(navactive);
  });
}

function OpenClose() {
  $("[data-more]").next().hide();
  $("[data-more].active").next().show();

  $("[data-more]").click(function (e) {
    e.preventDefault();
    $(this).hasClass("active")
      ? $(this).removeClass("active").next().slideUp(200)
      : $(this).addClass("active").next().slideToggle(200);

    if ($(this).closest("[data-accordion]").length) {
      $(this).parent().siblings().find("[data-more]").removeClass("active");
      $(this).parent().siblings().find("[data-more]").next().slideUp(200);
    }
  });

  $("[data-outside]")
    .next()
    .find("a:not(.hasdrop-a):not([data-more])")
    .click(function () {
      $("[data-outside]").removeClass("active").next("").slideUp(200);
    });
  $("[data-outside]").click(function (e) {
    $("[data-outside]").not(this).removeClass("active").next().slideUp(200);
  });

  $("html").on("click touchstart pointerdown MSPointerDown", function (e) {
    var target = $(e.target);

    if (
      !target.closest("[data-outside]").length &&
      !target.closest("[data-outside] + *").length
    ) {
      setTimeout(function () {
        $("[data-outside]").removeClass("active").next().slideUp(200);
      }, 200);
    }

    if (
      !target.closest("[data-outside-1]").length &&
      !target.closest("[data-outside-1] + *").length
    ) {
      setTimeout(function () {
        $("[data-outside-1]").removeClass("active").next().slideUp(200);
      }, 200);
    }
  });
}

function CustomSelect() {
  jQuery("[data-select]").each(function () {
    var item = jQuery(this),
      selectDrop = item.next(),
      linkItems = selectDrop.find("a");

    item.attr({ "data-outside": "", "data-more": "" });

    linkItems.on("click", function (e) {
      e.preventDefault();
      item.text(jQuery(this).text());
      selectDrop.slideUp(200);
      item.removeClass("active").addClass("selected");

      selectDrop.find("li").removeClass("active");
      jQuery(this).parent().addClass("active");
    });

    if (selectDrop.children().hasClass("active")) {
      item
        .text(jQuery(this).next().find(".active a").text())
        .addClass("selected");
    }
  });
}

function Tabs() {
  $("[data-tab]").click(function (e) {
    e.preventDefault();
    var tab_id = $(this).attr("data-tab");

    $(this).parent().siblings().find("[data-tab]").removeClass("active");
    $("#" + tab_id)
      .siblings()
      .removeClass("active");

    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });
  $("#" + $("[data-tab].active").data("tab")).addClass("active");
}

function stickyHeader() {
  var header = jQuery("#header");

  jQuery(window).on("scroll", function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
}
