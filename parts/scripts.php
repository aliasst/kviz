<!--Scripts-->
<link rel="stylesheet" href="css/jquery.fancybox.min.css">
<script src="js/jquery.min.js"></script>
<script src="js/jquery.fancybox.min.js" defer=""></script>
<script src="js/jquery.maskedinput.min.js" defer=""></script>
<script src="slick/slick.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/jquery.ui.touch-punch.min.js"></script>
<script src="js/main.js" defer=""></script>
<!-- Roistat Counter Start -->
<script>
    (function(w, d, s, h, id) {
        w.roistatProjectId = id; w.roistatHost = h;
        var p = d.location.protocol == "https:" ? "https://" : "http://";
        var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
        var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
    })(window, document, 'script', 'cloud.roistat.com', 'b5ed221ef565897397bf4381e689d3cf');
</script>
<!-- Roistat Counter End -->