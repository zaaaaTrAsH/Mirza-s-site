/*
  Site flow (from the mind map)
  start -> explore homepage -> Navbar | Footer | Assignment section
  Navbar : Home Page -> home page section        (index.html#home)
           TTI       -> TTI assignment page      (tti.html) -> each assignment page
           About Me  -> home page section        (index.html#about)
  Footer : About Me / Home Page / TTI  (same targets as the navbar)
  Home assignment section -> each assignment page
  Each assignment page: turn the page (< >) + download link + back to the list
*/
(function () {
  var S = window.SITE;
  var A = window.ASSIGNMENTS;

  // ---------- Navbar ----------
  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="nav-bar">' +
        '<a class="logo" href="index.html#home">Mirza\u2019s Sites</a>' +
        '<button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">' +
          '<svg viewBox="0 0 60 60"><circle cx="30" cy="9" r="8"/><circle cx="9" cy="30" r="8"/>' +
          '<circle cx="51" cy="30" r="8"/><circle cx="30" cy="51" r="8"/></svg>' +
        '</button>' +
      '</div>' +
      '<ul class="nav-menu" id="navMenu">' +
        '<li><a href="index.html#home">Home Page</a></li>' +
        '<li><a href="tti.html">TTI</a></li>' +
        '<li><a href="index.html#about">About Me</a></li>' +
      '</ul>';

    var btn = document.getElementById("navToggle");
    var menu = document.getElementById("navMenu");
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }

  // ---------- Footer ----------
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="f-site">' +
        '<h4><a href="index.html#home">' + S.name + '</a></h4>' +
        '<p>' + S.tagline + '</p>' +
      '</div>' +
      '<div class="f-assign">' +
        '<h4>Asigment :</h4>' +
        '<ul><li><a href="tti.html">TTI</a></li></ul>' +
      '</div>' +
      '<div class="f-contact">' +
        '<h4>My contact :</h4>' +
        '<p>IG : ' + S.ig + '</p>' +
        '<p>Email : <a href="mailto:' + S.email + '">' + S.email + '</a></p>' +
      '</div>' +
      '<div class="f-about">' +
        '<h4><a href="index.html#about">About me</a></h4>' +
      '</div>';
  }

  // ---------- Assignment cards (3 + 3 rows) ----------
  document.querySelectorAll("[data-cards]").forEach(function (el) {
    var card = function (a) {
      return '<a class="card" href="assignment.html?id=' + a.id + '">' +
        '<strong>' + a.title + '</strong>' +
        (a.desc ? '<span>' + a.desc + '</span>' : '') +
      '</a>';
    };
    el.innerHTML =
      '<div class="cards-row">' + A.slice(0, 3).map(card).join("") + '</div>' +
      '<div class="cards-row">' + A.slice(3).map(card).join("") + '</div>';
  });

  // ---------- Assignment viewer ----------
  var viewer = document.getElementById("viewer");
  if (viewer) {
    var id = new URLSearchParams(location.search).get("id");
    var item = A.filter(function (a) { return a.id === id; })[0];
    var title = document.getElementById("assignmentTitle");
    var num = document.getElementById("pageNum");
    var prev = document.getElementById("prevBtn");
    var next = document.getElementById("nextBtn");
    var dl = document.getElementById("downloadLink");
    var current = 0;

    if (!item) {
      title.textContent = "Not found";
      viewer.innerHTML = '<div class="empty">Assignment not found. <a href="tti.html">Back to list</a></div>';
      document.querySelector(".controls").style.display = "none";
    } else {
      title.textContent = item.title;
      document.title = item.title + " \u2013 " + S.name;
      var hasLink = item.download && item.download !== "#";
      dl.href = item.download || "#";
      var fileName = hasLink ? item.download.split("/").pop() : "";
      dl.textContent = hasLink ? "Download " + fileName : "(download link not set yet)";
      if (hasLink) {
        // local files in assets/ download directly; external links open in a new tab
        if (/^https?:/i.test(item.download)) { dl.target = "_blank"; dl.rel = "noopener"; }
        else { dl.setAttribute("download", fileName); }
      }

      var show = function () {
        if (!item.pages.length) {
          viewer.innerHTML = '<div class="empty">No pages yet.<br>Add images to <code>pages</code> in data.js</div>';
          num.textContent = "1";
          prev.disabled = next.disabled = true;
          return;
        }
        viewer.innerHTML = '<img alt="' + item.title + ' page ' + (current + 1) + '" src="' + item.pages[current] + '">';
        num.textContent = current + 1;
        prev.disabled = current === 0;
        next.disabled = current === item.pages.length - 1;
      };

      prev.addEventListener("click", function () { if (current > 0) { current--; show(); } });
      next.addEventListener("click", function () { if (current < item.pages.length - 1) { current++; show(); } });
      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") prev.click();
        if (e.key === "ArrowRight") next.click();
      });
      show();
    }
  }
})();
