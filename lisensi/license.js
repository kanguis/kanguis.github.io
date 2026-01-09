(function () {

  window._0xLIC = function () {

    const API = "https://script.google.com/macros/s/AKfycbxooNPMpr2iRXUelNSstMh8_vJpeLv6SSn7W7YrxEHT4B8h6IXjMgMsdccukorMfcvq/exec";
    const domain = location.hostname;
    const license = _GET_LICENSE();

    // jika belum input lisensi
    if (!license) {
      _SHOW_POPUP();
      return;
    }

    fetch(API + "?domain=" + domain + "&license=" + license)
      .then(r => r.json())
      .then(d => {
        if (!d || d.length === 0) {
          _KILL_();
        }
      })
      .catch(() => {
        _KILL_();
      });
  };

})();
