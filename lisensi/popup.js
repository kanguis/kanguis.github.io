(function () {

  const STORAGE_KEY = "_theme_license";

  window._SHOW_POPUP = function () {
    const html = `
    <div id="_lic_pop" style="
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.85);
      z-index:999999;
      display:flex;
      align-items:center;
      justify-content:center;">
      <div style="
        background:#fff;
        padding:20px;
        width:300px;
        border-radius:6px;
        text-align:center;">
        <h3>Aktivasi Lisensi</h3>
        <input id="_lic_input" placeholder="Masukkan kode lisensi"
          style="width:100%;padding:8px;margin:10px 0">
        <button id="_lic_btn"
          style="padding:8px 16px;width:100%">
          Aktifkan
        </button>
      </div>
    </div>`;

    document.body.insertAdjacentHTML("beforeend", html);

    document.getElementById("_lic_btn").onclick = function () {
      const code = document.getElementById("_lic_input").value.trim();
      if (!code) return;
      localStorage.setItem(STORAGE_KEY, code);
      location.reload();
    };
  };

  window._GET_LICENSE = function () {
    return localStorage.getItem(STORAGE_KEY);
  };

})();
