$(document).ready(function () {
window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("Fade-In").classList.add("show");
    }, 3000);
    
    setTimeout(() => {
        document.getElementById("Fade-img").classList.add("show");
      }, 4000);
    setTimeout(() => {
        document.getElementById("fade-chair-main").classList.add("show");
      }, 5000);
    setTimeout(() => {
        document.getElementById("fade-text-main").classList.add("show");
      }, 5000);
  });
  $(document).ready(function () {
    const ICONS = [
      { x: 520, y: 505, title: "نمایندگی فرش نقش تبریز", desc: "کاشان، انتهای بلوار امام رضا" },
      { x: 680, y: 350, title: "نمایندگی فرش ماندگار", desc: "کاشان، محله لتحر، خیابان حسن‌آبادی" },
      { x: 295, y: 260, title: "نمایندگی فرش ژاوا", desc: "کاشان، شهرک ولیعصر، بلوار خلیج فارس" },
      { x: 385, y: 290, title: "نمایندگی فرش امرالد", desc: "خیابان ولیعصر، بالاتر از پارک ملت" },
    ];
  
    const svg = document.getElementById("Iran");
    const mapWrap = document.getElementById("map-wrap");
    const iconsLayer = document.getElementById("icons-layer");
    const callout = document.getElementById("map-callout");
  
    // گرفتن المان‌های h3 و p داخل callout
    const calloutTitle = document.getElementById("callout-title");
    const calloutDesc = document.getElementById("callout-desc");
  
    let currentIcon = null;
    const createdIcons = [];
  
    function svgPointToClient(svgel, x, y) {
      const pt = svgel.createSVGPoint();
      pt.x = x;
      pt.y = y;
      const ctm = svgel.getScreenCTM();
      if (!ctm) return { x: 0, y: 0 };
      const global = pt.matrixTransform(ctm);
      return { x: global.x, y: global.y };
    }
  
    function createAllIcons() {
      iconsLayer.innerHTML = "";
      ICONS.forEach((cfg) => {
        const wrapper = document.createElement("div");
        wrapper.className = "icon-wrapper";
        wrapper.dataset.svgX = cfg.x;
        wrapper.dataset.svgY = cfg.y;
        wrapper.dataset.title = cfg.title;
        wrapper.dataset.desc = cfg.desc;
  
        const pulse = document.createElement("div");
        pulse.className = "pulse-circle";
  
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-location-dot map-icon";
  
        wrapper.appendChild(pulse);
        wrapper.appendChild(icon);
        iconsLayer.appendChild(wrapper);
  
        wrapper.addEventListener("click", function (evt) {
          evt.stopPropagation();
          if (currentIcon === wrapper) {
            hideCallout();
            currentIcon = null;
          } else {
            showCalloutForIcon(wrapper);
            currentIcon = wrapper;
          }
        });
  
        createdIcons.push(wrapper);
      });
    }
  
    function updateIconPositions() {
      const wrapRect = mapWrap.getBoundingClientRect();
      createdIcons.forEach((wrapper) => {
        const x = parseFloat(wrapper.dataset.svgX);
        const y = parseFloat(wrapper.dataset.svgY);
        const p = svgPointToClient(svg, x, y);
        const left = p.x - wrapRect.left;
        const top = p.y - wrapRect.top;
        wrapper.style.left = left + "px";
        wrapper.style.top = top + "px";
      });
    }
  
    function showCalloutForIcon(wrapper) {
      const x = parseFloat(wrapper.dataset.svgX);
      const y = parseFloat(wrapper.dataset.svgY);
      const p = svgPointToClient(svg, x, y);
  
      let offsetX, offsetY;
  
      if (window.innerWidth <= 1024) {
        offsetX = 13;  // مقدار کوچیک‌تر برای عرض کمتر از 1024px
        offsetY = -8;
      } else {
        offsetX = 17;  // مقدار پیش‌فرض برای عرض بزرگ‌تر
        offsetY = -15;
      }
  
      const wrapRect = mapWrap.getBoundingClientRect();
      const relLeft = (p.x - wrapRect.left) + offsetX;
      const relTop = (p.y - wrapRect.top) + offsetY;
  
      if (callout.style.display === "block") {
        hideCallout();
        setTimeout(() => {
          // محتوا رو بعد از بسته شدن ست کن
          calloutTitle.textContent = wrapper.dataset.title;
          calloutDesc.textContent = wrapper.dataset.desc;
  
          callout.style.left = relLeft + "px";
          callout.style.top = relTop + "px";
          callout.style.display = "block";
          callout.setAttribute("aria-hidden", "false");
          callout.classList.remove("active");
          requestAnimationFrame(() => callout.classList.add("active"));
        }, 700);
      } else {
        // حالت باز شدن مستقیم
        calloutTitle.textContent = wrapper.dataset.title;
        calloutDesc.textContent = wrapper.dataset.desc;
  
        callout.style.left = relLeft + "px";
        callout.style.top = relTop + "px";
        callout.style.display = "block";
        callout.setAttribute("aria-hidden", "false");
        callout.classList.remove("active");
        requestAnimationFrame(() => callout.classList.add("active"));
      }
    }
  
    function hideCallout() {
      callout.classList.remove("active");
      callout.setAttribute("aria-hidden", "true");
      setTimeout(() => {
        callout.style.display = "none";
      }, 700);
    }
  
    document.addEventListener("click", () => {
      if (currentIcon !== null) {
        hideCallout();
        currentIcon = null;
      }
    });
  
    window.addEventListener("resize", updateIconPositions);
    window.addEventListener("scroll", updateIconPositions);
  
    createAllIcons();
    setTimeout(updateIconPositions, 80);
  
    let tries = 0;
    const tryInterval = setInterval(() => {
      try { updateIconPositions(); } catch (e) {}
      tries++;
      if (tries > 10) clearInterval(tryInterval);
    }, 200);
  });




  $('.slider.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    rtl:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    smartSpeed: 1000,
    center:false,     
    stagePadding:5,    
    responsive:{
        0:{
            items:1,
            dots:true,
            nav:false,
            margin:35,
            stagePadding:56,   
        },
        600:{
            items:2,
            stagePadding:70,   
            margin:30
        },
        1024:{
            items:3,  
            dots:false,
            nav:true,
        },
        1440:{
          items:4,  
          dots:false,
          nav:true
      }
    }
  });

  
});
