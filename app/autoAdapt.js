// 自适应脚本
!function () {
    function e() {
        var e = n.getBoundingClientRect().width;
        e / m > 640 && (e = 640 * m);
        var t = e / 16;
        n.style.fontSize = t + "px", d.rem = i.rem = t
    }

    var t, i = window, a = window.lib || (window.lib = {}), r = i.document, n = r.documentElement,
        o = r.querySelector('meta[name="viewport"]'), l = r.querySelector('meta[name="flexible"]'), m = 0, s = 0,
        d = a.flexible || (a.flexible = {});
    if (o) {
        var p = o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        p && (s = parseFloat(p[1]), m = parseInt(1 / s))
    } else if (l) {
        var c = l.getAttribute("content");
        if (c) {
            var u = c.match(/initial\-dpr=([\d\.]+)/), f = c.match(/maximum\-dpr=([\d\.]+)/);
            u && (m = parseFloat(u[1]), s = parseFloat((1 / m).toFixed(2))), f && (m = parseFloat(f[1]), s = parseFloat((1 / m).toFixed(2)))
        }
    }
    if (!m && !s) {
        var v = (i.navigator.appVersion.match(/android/gi), i.navigator.appVersion.match(/iphone/gi)),
            h = i.devicePixelRatio;
        m = v ? h >= 3 && (!m || m >= 3) ? 3 : h >= 2 && (!m || m >= 2) ? 2 : 1 : 1, s = 1 / m
    }
    if (n.setAttribute("data-dpr", m), !o)if (o = r.createElement("meta"), o.setAttribute("name", "viewport"), o.setAttribute("content", "initial-scale=" + s + ", maximum-scale=" + s + ", minimum-scale=" + s + ", user-scalable=no"), n.firstElementChild) n.firstElementChild.appendChild(o); else {
        var x = r.createElement("div");
        x.appendChild(o), r.write(x.innerHTML)
    }
    i.addEventListener("resize", function () {
        clearTimeout(t), t = setTimeout(e, 300)
    }, !1), i.addEventListener("pageshow", function (i) {
        i.persisted && (clearTimeout(t), t = setTimeout(e, 300))
    }, !1), e(), d.dpr = i.dpr = m, d.refreshRem = e, d.rem2px = function (e) {
        var t = parseFloat(e) * this.rem;
        return "string" == typeof e && e.match(/rem$/) && (t += "px"), t
    }, d.px2rem = function (e) {
        var t = parseFloat(e) / this.rem;
        return "string" == typeof e && e.match(/px$/) && (t += "rem"), t
    }
}();
/**
 * Created by huran on 2017/3/30.
 */
