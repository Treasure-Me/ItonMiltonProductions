(function () {
    function injectScript() {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) return;

        // Create a script element with Cloudflare parameters
        const script = doc.createElement("script");
        script.innerHTML = `
      window.__CF$cv$params = {
        r: '9d00c7570308738a',
        t: 'MTc3MTQ1MTgzMS4wMDAwMDA='
      };
      var s = document.createElement('script');
      s.nonce = '';
      s.src = '/cdn-cgi/challenge-platform/scripts/jsd/main.js';
      document.getElementsByTagName('head')[0].appendChild(s);
    `;

        doc.getElementsByTagName("head")[0].appendChild(script);
    }

    // Create hidden iframe
    const iframe = document.createElement("iframe");
    iframe.height = 1;
    iframe.width = 1;
    iframe.style.position = "absolute";
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.border = "none";
    iframe.style.visibility = "hidden";

    document.body.appendChild(iframe);

    // Run immediately if DOM is ready, otherwise wait
    if (document.readyState !== "loading") {
        injectScript();
    } else if (window.addEventListener) {
        document.addEventListener("DOMContentLoaded", injectScript);
    } else {
        const prevOnReady = document.onreadystatechange || function () {};
        document.onreadystatechange = function (evt) {
            prevOnReady(evt);
            if (document.readyState !== "loading") {
                document.onreadystatechange = prevOnReady;
                injectScript();
            }
        };
    }
})();