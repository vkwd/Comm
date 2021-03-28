function d() {
    if ("" === e() || 3500 > e() || 250000 < e())
        return f.textContent = " Basic Pay invalid", !0;

    if ("" === g() || 1920 > (new Date(g())).getFullYear() || 1990 < (new Date(g).getFullYear()))
        return f.textContent = "Date of birth invalid", !0;
    if ("" === h() || new Date().getFullYear() < (new Date(h())).getFullYear() |
        1960 > (new Date(h())).getFullYear() || isNaN(h()))
        return f.textContent =
            "Date of Retirement invalid", !0;
    !0;
    //l.textContent = "";
    f.textContent = "";
    return !1;
}

function mreset() {
    //l.textContent = '';
    f.textContent = '';
}

function e() { return document.querySelector("#BPay").value }

function g() { return document.querySelector("#dob").value }

function h() { return new Date(document.querySelector("#dor").value) }

function m() {
    var a = new Date(g());
    if (!isNaN(a) && 1920 < a.getFullYear() && 1990 > a.getFullYear()) {
        //alert(a);
        var b = new Date(h());
        //console.log(b.getFullYear());
        var c = b.getFullYear() - a.getFullYear(),
            k = b.getMonth() - a.getMonth();
        (0 > k || 0 === k && b.getDate() < a.getDate()) && c--;
        a = c + 1;
        return document.querySelector("#agNbd").value = a
    }
    return !1
}

function n() {
    let a = m(),
        b = {
            17: 19.28,
            18: 19.2,
            19: 19.11,
            20: 19.01,
            21: 18.91,
            22: 18.81,
            23: 18.7,
            24: 18.59,
            25: 18.47,
            26: 18.34,
            27: 18.21,
            28: 18.07,
            29: 17.93,
            30: 17.78,
            31: 17.62,
            32: 17.46,
            33: 17.29,
            34: 17.11,
            35: 16.92,
            36: 16.72,
            37: 16.52,
            38: 16.31,
            39: 16.09,
            40: 15.87,
            41: 15.64,
            42: 15.4,
            43: 15.15,
            44: 14.9,
            45: 14.64,
            46: 14.37,
            47: 14.1,
            48: 13.82,
            49: 13.54,
            50: 13.25,
            51: 12.95,
            52: 12.66,
            53: 12.35,
            54: 12.05,
            55: 11.73,
            56: 11.42,
            57: 11.1,
            58: 10.78,
            59: 10.46,
            60: 10.13,
            61: 9.81,
            62: 9.48,
            63: 9.15,
            64: 8.82,
            65: 8.5,
            66: 8.17,
            67: 7.85,
            68: 7.53,
            69: 7.22,
            70: 6.91,
            71: 6.6,
            72: 6.3,
            73: 6.01,
            74: 5.72,
            75: 5.44,
            76: 5.17,
            77: 4.9,
            78: 4.65,
            79: 4.4,
            80: 4.17,
            81: 3.94,
            82: 3.72,
            83: 3.52,
            84: 3.32,
            85: 3.13
        };

    a = b[a];

    return document.getElementById("CF").value = a
}

const f = document.querySelector(".message-container");
document.querySelector("button").addEventListener("click", function() {
    if (!d()) {
        f.textContent = "";
        var a = m(),
            b = n();
        BPay = e();
        BPay = BPay / 2;

        var c = Math.ceil(12 * BPay / 3 * n());
        c = document.getElementById("CV").value = c;
        document.querySelector('#first').innerHTML =
            `Age Next Birthday <b>: ${a}
   <br> Commutation Factor: ${b}`;
        document.querySelector('#second').innerHTML =
            `Commutaion Value :  ₹${c}`;
        document.querySelector(
            '#third'
        ).innerHTML = `Basic Pension: ₹${Math.round(
(BPay*100)/100)}
<br>Commuted Pension:₹${Math.ceil(BPay/3)}`;
        document.querySelector('#fourth').innerHTML =
            `<br>
            Reduced Pension <br>       
            after commutation :₹${
Math.floor(BPay - BPay/3)} </b>`;
    }
});