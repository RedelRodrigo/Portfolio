(function() {
    const c = document.createElement("link").relList;
    if (c && c.supports && c.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        a(e);
    new MutationObserver(e => {
        for (const t of e)
            if (t.type === "childList")
                for (const r of t.addedNodes)
                    r.tagName === "LINK" && r.rel === "modulepreload" && a(r)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(e) {
        const t = {};
        return e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin",
        t
    }
    function a(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = s(e);
        fetch(e.href, t)
    }
}
)();
const v = {
    type: "carousel",
    perView: 1
};
new Glide(".glide",v).mount();
const g = document.querySelector("#nav-menu")
  , d = document.querySelector("#nav-toggle")
  , u = document.querySelector("#nav-close");
d && d.addEventListener("click", () => {
    g.classList.add("show-menu")
}
);
u && u.addEventListener("click", () => {
    g.classList.remove("show-menu")
}
);
const h = document.querySelectorAll(".nav__link");
function L() {
    document.querySelector("#nav-menu").classList.remove("show-menu")
}
h.forEach(o => {
    o.addEventListener("click", L)
}
);
const m = document.querySelectorAll("[data-target]")
  , y = document.querySelectorAll("[data-content]");
m.forEach(o => {
    o.addEventListener("click", () => {
        const c = document.querySelector(o.dataset.target);
        y.forEach(s => {
            s.classList.remove("qualification__active")
        }
        ),
        c.classList.add("qualification__active"),
        m.forEach(s => {
            s.classList.remove("qualification__active")
        }
        ),
        o.classList.add("qualification__active")
    }
    )
}
);
function p() {
    const o = document.getElementById("scroll-up");
    this.scrollY >= 560 ? o.classList.add("show-scroll") : o.classList.remove("show-scroll")
}
window.addEventListener("scroll", p);
const n = document.getElementById("theme-button")
  , l = "dark-theme"
  , i = "uil-sun"
  , f = localStorage.getItem("selected-theme")
  , q = localStorage.getItem("selected-icon")
  , E = () => document.body.classList.contains(l) ? "dark" : "light"
  , S = () => n.classList.contains(i) ? "uil-moon" : "uil-sun";
f && (document.body.classList[f === "dark" ? "add" : "remove"](l),
n.classList[q === "uil-moon" ? "add" : "remove"](i));
n.addEventListener("click", () => {
    document.body.classList.toggle(l),
    n.classList.toggle(i),
    localStorage.setItem("selected-theme", E()),
    localStorage.setItem("selected-icon", S())
}
);
