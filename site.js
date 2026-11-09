/* Cabecera y pie compartidos: edítalos aquí y cambian en las 4 páginas. */
(function(){
var p=location.pathname.split('/').pop()||'index.html';
var L=[['index.html','Inicio'],['quienes-somos.html','Quiénes somos'],['logros.html','Logros'],['eventos.html','Eventos']];
document.getElementById('h').innerHTML='<nav aria-label="Principal"><a class="brand" href="index.html"><img src="logo.png" alt="Logo de Horizontes de Papel">Horizontes de Papel</a>'+
L.map(function(x){return '<a class="l'+(p===x[0]?' on':'')+'" href="'+x[0]+'">'+x[1]+'</a>'}).join('')+'<a class="d" href="index.html#donacion">Donar</a></nav>';
document.getElementById('f').innerHTML='<div class="wrap"><div><strong style="font:800 1.2rem Outfit,sans-serif">Horizontes de Papel</strong><small>Lectura en centros juveniles</small></div><ul>'+
'<li><a href="https://www.instagram.com/horizontesdepapel.pe/" target="_blank" rel="noopener">Instagram</a></li>'+
'<li><a href="https://www.facebook.com/profile.php?id=61576280146818" target="_blank" rel="noopener">Facebook</a></li>'+
'<li><a href="https://www.tiktok.com/@horizontesdepapel.pe" target="_blank" rel="noopener">TikTok</a></li>'+
'<li><a href="https://www.youtube.com/@HorizontesdePapel" target="_blank" rel="noopener">YouTube</a></li>'+
'<li><a href="https://wa.me/51916786670" target="_blank" rel="noopener">WhatsApp +51 916 786 670</a></li>'+
'<li><a href="mailto:horizontesdepapel.pe@gmail.com">horizontesdepapel.pe@gmail.com</a></li></ul></div>';
document.querySelectorAll('.copy').forEach(function(b){b.addEventListener('click',function(){
var t=document.getElementById(b.dataset.t).textContent,o=b.textContent;
(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){b.textContent='Copiado'},function(){b.textContent='No se pudo copiar'});
setTimeout(function(){b.textContent=o},1800)})});
})();
