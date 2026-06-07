$(document).ready(function () {
  /*top-menu*/

  //start-add-class-top-menu
  // test
  // $(".harmony-menu li").addClass("harmony-menu-li");
  // $(".harmony-menu li a").addClass("harmony-menu-a");
  // $(".harmony-menu li.harmony-menu-li>ul").addClass("harmony-menu-li-ul");

  // test

  $(".harmony-menu li a img").addClass("harmony-menu-a-img");
  $(".harmony-menu li a span").addClass("harmony-menu-a-span");
  //end-add-class-top-menu

  //start-add-class-mobile-menu
  $(".harmony-mobile-menu li ").addClass("mobile-menu-li");
  $(".harmony-mobile-menu li.mobile-menu-li a").addClass("mobile-menu-a");
  $(".harmony-mobile-menu li.mobile-menu-li>ul").addClass("mobile-menu-li-ul");
  //end-add-class-mobile-menu

  //start-add-class-horizontal-menu
  $(".harmony-menu-horizontal li ").addClass("menu-horizontal-li");
  $(".harmony-menu-horizontal li.menu-horizontal-li a").addClass("menu-horizontal-a");
  $(".harmony-menu-horizontal li.menu-horizontal-li a span").addClass("harmony-menu-a-span");
  $(".harmony-menu-horizontal li.menu-horizontal-li a img").addClass("harmony-menu-a-img");
  $(".harmony-menu-horizontal>li.menu-horizontal-li>ul").addClass(
    "menu-horizontal-li-ul"
  );
  $(".harmony-menu-horizontal li.menu-horizontal-li>ul ul").addClass(
    "menu-horizontal-li-ul-ul"
  );
  $(".menu-horizontal-li li.menu-horizontal-li:has(ul)>a").addClass(
    "h-header-a"
  );
  $(".menu-horizontal-li li.menu-horizontal-li:not(:has(ul)) > a").addClass(
    "h-hover-a"
  );
  //end-add-class-horizontal-menu

  //start-add-class-mobile-menu-accordion
  $(".harmony-mobile-menu-accordion li ").addClass("mobile-menu-li");
  $(".harmony-mobile-menu-accordion li.mobile-menu-li a").addClass(
    "mobile-menu-a"
  );
  $(".harmony-mobile-menu-accordion li.mobile-menu-li>ul").addClass(
    "mobile-menu-li-ul"
  );
  //end-add-class-mobile-menu-accordion

  //start-add-menu-bar
  $(
    ".harmony-menu>li.harmony-menu-li:has(ul),.harmony-menu-horizontal>li.menu-horizontal-li:has(ul)"
  )
    .children("a")
    .append('<span class="angle-down"></span>');

  $(".harmony-menu li ul li:has(ul)")
    .children("a")
    .append('<span class="angle-left"></span>');
  //end-add-menu-bar

  //start-add-mobile-menu
  $(".harmony-mobile-menu li:has(ul)")
    .children("a")
    .append('<span class="angle-left"></span>');

  //add-mobile-menu-accordion
  $(".harmony-mobile-menu-accordion li:has(ul)")
    .children("a")
    .addClass("add_class")
    .append('<span class="angle-down"></span>');

  if ($("html").hasClass("h-ltr")) {
    $(".harmony-mobile-menu li>ul").prepend(
      '<li class="menu-mobile-back"><div class="mobile-menu-a harmony-menu-back"><span class="angle-left"></span><span class="harmony-menu-back">Back</span></div></li>'
    );
  } else {
    $(".harmony-mobile-menu li>ul").prepend(
      '<li class="menu-mobile-back"><div class="mobile-menu-a harmony-menu-back"><span class="angle-left"></span><span class="harmony-menu-back">برگشت</span></div></li>'
    );
  }

  //end-add-mobile-menu

  
/*start-mobile-menu-function*/
 $(".harmony-mobile-menu a").on("click", function (e) {
   var $nextElement = $(this).next();
   if ($nextElement.is("ul")) {
     e.preventDefault(); // جلوگیری از تغییر صفحه
     $(".navbar-menu-mobile").addClass("Harmony-transform");
     $(".menu-mobile").addClass("Harmony-transform");
     $(this).parent().parent().addClass("Harmony-transform");
     $nextElement.addClass("show");
   }
 });

  $(".harmony-menu-back").on("click", function () {
     var $menu = $(this).parent().parent(".mobile-menu-li-ul");
     $menu.removeClass("show");

     var $transformParent = $menu.parent().parent(".Harmony-transform");
     $transformParent.removeClass("Harmony-transform");
   });



  // accardeon

  $(".harmony-mobile-menu-accordion a").on("click", function (e) {
    var $this = $(this);
    var $submenu = $this.next("ul");

    if ($submenu.length) {
      e.preventDefault();

      var isActive = $this.hasClass("active");

      $this.toggleClass("active", !isActive);
      $submenu.slideToggle(!isActive);

      if (!isActive) {
        // Find all siblings of the current parent li and their descendants to remove active class and slide up
        $this
          .closest("li")
          .siblings()
          .find("a")
          .removeClass("active")
          .next("ul")
          .slideUp();
      }
    }
  });

});
