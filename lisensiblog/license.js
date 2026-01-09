(function(){
  window._L=function(){
    var el=document.getElementById("theme-license");
    if(!el){
      _W("Widget lisensi tidak ditemukan.");
      return;
    }

    var license=el.textContent.trim();
    if(!license){
      _W("Kode lisensi belum diisi.");
      return;
    }

    var api="https://script.google.com/macros/s/AKfycbxooNPMpr2iRXUelNSstMh8_vJpeLv6SSn7W7YrxEHT4B8h6IXjMgMsdccukorMfcvq/exec";
    var domain=location.hostname;

    fetch(api+"?license="+license+"&domain="+domain)
      .then(r=>r.json())
      .then(j=>{
        if(!j || j.status!=="active"){
          _W("Kode lisensi salah atau domain tidak terdaftar.");
        }
      })
      .catch(()=>{
        _W("Gagal terhubung ke server lisensi.");
      });
  };
})();
