(function(){
  var SALT="kangis";

  function decrypt(e){
    try{
      var t=atob(e).split("|");
      if(t[0]!==SALT) return null;
      return t[1];
    }catch(_){
      return null;
    }
  }

  window._L=function(){
    var el=document.getElementById("theme-license");
    if(!el){
      _W("Widget lisensi tidak ditemukan.");
      return;
    }

    var enc=el.innerText.trim();
    var license=decrypt(enc);

    if(!license){
      _W("Lisensi rusak atau tidak valid.");
      return;
    }

    var api="https://script.google.com/macros/s/AKfycbz06Xs5aKT14CPffTOYvhNWzbHiTQiKXd05PP-yxK5FXyTI-QVWXT1wFoC2mHhpVJJY/exec";
    var domain=location.hostname;

    fetch(api+"?license="+license+"&domain="+domain)
      .then(r=>r.json())
      .then(j=>{
        if(!j || j.status!=="active"){
          _W("Lisensi tidak cocok dengan domain.");
        }
      })
      .catch(()=>{
        _W("Gagal terhubung ke server lisensi.");
      });
  };
})();

