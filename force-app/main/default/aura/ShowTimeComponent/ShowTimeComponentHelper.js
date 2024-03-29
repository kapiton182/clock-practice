({
  showTime: function (cmp) {
    var date = new Date();
    var h = date.getUTCHours() + cmp.get('v.timeOffset');
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
      h = 12;
    }

    if (h < 0) {
      h = 24 + h;
    }

    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    var time = `${h}:${m}:${s} ${session}`;
    cmp.set('v.time', time);

    setTimeout(() => this.showTime(cmp), 1000);
  },
})
