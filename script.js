/* =========================
   HELPER
========================= */
function isMobile() {
  return window.innerWidth <= 768;
}

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.querySelector(".cr-navbar");

window.addEventListener("scroll", () => {
  navbar.style.background =
    window.scrollY > 50 ? "#1f1f1f" : "#232323";
});

/* =========================
   DESKTOP DROPDOWNS
   (Categories, News)
========================= */
document.querySelectorAll(".dropdown").forEach(drop => {
  const btn = drop.querySelector(".drop-btn");

  btn.addEventListener("click", e => {
    e.stopPropagation();

    // Close other dropdowns
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== drop) d.classList.remove("open");
    });

    drop.classList.toggle("open");
  });
});

// Close dropdowns on outside click
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach(d => {
    d.classList.remove("open");
  });
});

/* =========================
   PROFILE (DESKTOP + MOBILE)
========================= */
const profile = document.querySelector(".profile");
const profileMenu = document.querySelector(".profile-menu");

profile.addEventListener("click", e => {
  e.stopPropagation();

  // MOBILE → open mobile profile menu
  if (isMobile()) {
    mobileMenu.classList.remove("active");
    mobileProfileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
    return;
  }

  // DESKTOP → toggle profile dropdown
  profile.classList.toggle("open");

  // Close nav dropdowns
  document.querySelectorAll(".dropdown").forEach(d => {
    d.classList.remove("open");
  });
});

// Close desktop profile menu on outside click
document.addEventListener("click", e => {
  if (!profile.contains(e.target)) {
    profile.classList.remove("open");
  }
});

/* =========================
   HORIZONTAL ROW SCROLL
   (DESKTOP ONLY)
========================= */
document.querySelectorAll(".row-wrapper").forEach(wrapper => {
  const row = wrapper.querySelector(".row-scroll");
  const leftBtn = wrapper.querySelector(".scroll-btn.left");
  const rightBtn = wrapper.querySelector(".scroll-btn.right");

  if (!row || !leftBtn || !rightBtn) return;

  const scrollAmount = 320;

  leftBtn.addEventListener("click", () => {
    row.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    row.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

/* =========================
   MOBILE MENUS
========================= */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

const mobileProfileMenu = document.getElementById("mobileProfileMenu");
const closeProfileMenu = document.getElementById("closeProfileMenu");

/* Hamburger → Mobile NAV menu */
hamburger.addEventListener("click", () => {
  mobileProfileMenu.classList.remove("active");
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

/* Close NAV menu */
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
});

/* Close PROFILE menu */
closeProfileMenu.addEventListener("click", () => {
  mobileProfileMenu.classList.remove("active");
  document.body.style.overflow = "";
});

/* =========================
   SAFETY RESET ON RESIZE
========================= */
window.addEventListener("resize", () => {
  if (!isMobile()) {
    mobileMenu.classList.remove("active");
    mobileProfileMenu.classList.remove("active");
    document.body.style.overflow = "";
    profile.classList.remove("open");
  }
});
