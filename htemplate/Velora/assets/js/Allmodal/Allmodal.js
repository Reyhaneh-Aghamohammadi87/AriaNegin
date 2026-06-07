$(document).ready(function () {
  // باز کردن مودال
  $(".btn-show").on("click", function () {
    $(".h-modal").removeClass("show");
    const modalName = $(this).data("modal");
    const targetModal = $(`.h-modal[data-modal="${modalName}"]`);

    // اگر المان پیدا شد
    if (targetModal.length) {
      targetModal.addClass("show");
      const dataoverlay = $(this).data("overlay");

      if (dataoverlay !== false && dataoverlay !== "false") {
        const newDiv = $('<div class="overlay"></div>');
        $("body").append(newDiv);
      }
    } else {
      console.warn("Modal not found:", modalName);
    }
  });

  // بستن با کلیک روی overlay
  $(document).on("click", ".overlay", function () {
    $(".h-modal").removeClass("show");
    $(this).remove();
  });

  // بستن با دکمه close
  $(".close").click(function () {
    $(".h-modal").removeClass("show");
    $(".overlay").remove();
  });
});

  $(function () {
    $('.text-container').each(function () {
        const $container = $(this);
        const $box = $container.find('.textBox');
        const collapsedHeight = $box.attr('data-height');
  
        $box.css('height', collapsedHeight);
  
        $container.find('.showMore').on('click', function () {
            const fullHeight = $box[0].scrollHeight + "px";
  
            $box.css('height', fullHeight);
            $(this).addClass('hidden');
            $container.find('.showLess').removeClass('hidden');
        });
  
        $container.find('.showLess').on('click', function () {
            $box.css('height', collapsedHeight);
            $(this).addClass('hidden');
            $container.find('.showMore').removeClass('hidden');
        });
      });
    });