<script setup>
import { ref, onMounted } from "vue";

const cvs = ref(null);

let c;
let u = 10;
const m = {
    x: innerWidth / 2,
    y: innerHeight / 2,
};

function gc() {
    let s = "0123456789ABCDEF";
    let c = "#";
    for (let i = 0; i < 6; i++) {
        c += s[Math.ceil(Math.random() * 15)];
    }
    return c;
}

function resize() {
    cvs.value.height = innerHeight;
    cvs.value.width = innerWidth;
    for (var i = 0; i < 101; i++) {
        var r = 30;
        var x = Math.random() * (innerWidth - 2 * r) + r;
        var y = Math.random() * (innerHeight - 2 * r) + r;
        a[i] = new ob(innerWidth / 2, innerHeight / 2, 4, gc(), Math.random() * 200 + 20, 0.02);

    }
    //  a[0] = new ob(innerWidth / 2, innerHeight / 2, 40, "red", 0.05, 0.05);
    //a[0].dr();
}
function ob(x, y, r, cc, o, s) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cc = cc;
    this.theta = Math.random() * Math.PI * 2;
    this.s = s;
    this.o = o;
    this.t = Math.random() * 150;

    this.o = o;
    this.dr = function () {
        const ls = {
            x: this.x,
            y: this.y
        };
        this.theta += this.s;
        this.x = m.x + Math.cos(this.theta) * this.t;
        this.y = m.y + Math.sin(this.theta) * this.t;
        c.beginPath();
        c.lineWidth = this.r;
        c.strokeStyle = this.cc;
        c.moveTo(ls.x, ls.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();

    }
}
function anim() {
    requestAnimationFrame(anim);
    c.fillStyle = "rgba(0,0,0,0.05)";
    c.fillRect(0, 0, cvs.value.width, cvs.value.height);
    a.forEach(function (e, i) {
        e.dr();
    });

}

onMounted(() => {
    window.onmousemove = function (e) {
        m.x = e.clientX;
        m.y = e.clientY;
    };
    let a = [];
    window.onload = function myFunction() {
        c = cvs.value.getContext("2d");
        for (let i = 0; i < 10; i++) {
            let r = 30;
            let x = Math.random() * (innerWidth - 2 * r) + r;
            let y = Math.random() * (innerHeight - 2 * r) + r;
            let t = new ob(
                innerWidth / 2,
                innerHeight / 2,
                5,
                "red",
                Math.random() * 200 + 20,
                2
            );
            a.push(t);
        }
        //cvs.value.style.backgroundColor = "#700bc8";

        c.lineWidth = "2";
        c.globalAlpha = 0.5;
        resize();
        anim();
    };

    window.onresize = function () {
        resize();
    };
});
</script>
<template>
    <div class="track">
        <canvas ref="cvs" id="cw"></canvas>
    </div>
</template>

<style>
#cw {
    position: fixed;
    z-index: -1;
}

.track {
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.05);
}
</style>
