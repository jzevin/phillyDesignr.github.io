(function () {
  const $ = document.querySelector.bind(document);
  const vCtrl = (function () {
    const dom = {
      dateTime: $('.date-time')
    }
    return { dom };
  })();
  const mCtrl = (function (v) {
    //v.dom.dateTime.addEvenListener()
    function getMonthName(date) {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return months[date.getMonth()];
    }
    function getAmPm(date) {
      return date.getHours() >= 12 ? 'pm' : 'am';
    }
    function getHour(date) {
      let hrs = date.getHours();
      return hrs > 12 ? hrs - 12 : hrs === 0 ? 12 : hrs;
    }
    function padNum(num) {
      return `${num < 10 ? 0 : ''}${num}`;
    }
    function getDateTime(params) {
      const date = new Date();
      let dateTimeHtml = `
                <span class="date">
                  ${getMonthName(date)}&nbsp;
                  ${date.getDate()},&nbsp;
                  ${date.getFullYear()}&nbsp;-&nbsp;
                </span>
                <span class="time">
                  ${getHour(date)}:
                  ${padNum(date.getMinutes())}:
                  ${padNum(date.getSeconds())}
                </span>
                <span class="ampm">
                  ${padNum(getAmPm(date))}
                </span>
            `.replace(/\s/g, '');
      v.dom.dateTime.innerHTML = dateTimeHtml;
    }
    getDateTime();
    setInterval(getDateTime, 1000);
  })(vCtrl);
})();