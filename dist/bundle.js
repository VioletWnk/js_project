(()=>{"use strict";var e,t,n,o,c,r,a,l,i,s,u;s=document.getElementById("callback"),u=document.querySelector(".modal-overlay"),document.querySelector("body").addEventListener("click",(function(e){var t=e.target;t.matches(".callback-btn")||t.matches(".button-services")||t.matches('[href="#application"]')?(s.style.display="block",u.style.display="block"):(t.closest(".modal-close")||t.matches(".modal-overlay"))&&(s.style.display="none",u.style.display="none")})),function(){document.querySelector(".header").addEventListener("click",(function(t){t.target.matches("a")&&e(t)}));var e=function(e){e.preventDefault();var t=e.target.getAttribute("href"),n=document.querySelector(t).getBoundingClientRect().top;window.scrollBy({top:n,behavior:"smooth"})}}(),l=document.querySelector(".up"),i=document.getElementById("services"),l.addEventListener("click",(function(){var e=document.querySelector("body").getBoundingClientRect().top;window.scrollBy({top:e,behavior:"smooth"})})),document.addEventListener("scroll",(function(){var e=i.getBoundingClientRect().top;l.style.display=e<16?"block":"none"})),r=document.querySelector(".accordeon"),a=r.querySelectorAll(".element"),r.addEventListener("click",(function(e){var t=e.target.closest(".element");a.forEach((function(e){e.classList.remove("active"),e.querySelector(".element-content").style.display="none"})),t.classList.add("active"),t.querySelector(".element-content").style.display="block"})),function(){var e=document.querySelector('[name="form-callback"]'),t=document.createElement("div");e.addEventListener("submit",(function(o){o.preventDefault(),e.appendChild(t);for(var c=e.querySelectorAll("input"),r=0;r<c.length;r++){if(c[r].matches('[name="tel"]')&&!c[r].value.match(/^\+?([78])?\d{6,10}$/))return void(t.textContent="Введите корректный номер телефона");if(c[r].matches('[name="fio"]')&&!c[r].value.match(/^[\t-\r \xA0\u0410-\u044F\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]{2,}$/g))return void(t.textContent='Введите "Ваше Имя"')}t.textContent="Идет отправка...";var a=new FormData(e);n(a).then((function(n){if(200!==n.status)throw new Error("status network is not 200");t.textContent="Заявка успешно отправлена",e.querySelectorAll("input").forEach((function(e){"submit"!=e.type&&(e.value="")}))})).catch((function(e){t.textContent="Произошла ошибка",console.error(e)}))}));var n=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}}(),function(){var e=document.querySelector(".top-slider"),t=document.querySelectorAll(".item"),n=document.createElement("ul");n.classList.add("slider-dots"),e.append(n),t.forEach((function(e){var t=document.createElement("li");t.classList.add("dot"),e.classList.contains("active")&&t.classList.add("active"),n.append(t)}));var o=document.querySelectorAll(".dot");n.addEventListener("click",(function(e){var n=e.target;n.matches(".dot")&&(r(t,l,"active"),r(o,l,"active"),n.matches(".dot")&&o.forEach((function(e,t){e===n&&(l=t)})),l>=t.length&&(l=0),l<0&&(l=t.length-1),a(t,l,"active"),a(o,l,"active"))}));var c,r=function(e,t,n){e[t].classList.remove(n)},a=function(e,t,n){e[t].classList.add(n)},l=0,i=function(){r(t,l,"active"),r(o,l,"active"),++l>=t.length&&(l=0),a(t,l,"active"),a(o,l,"active")},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;c=setInterval(i,e)};n.addEventListener("mouseover",(function(e){e.target.matches(".dot")&&clearInterval(c)})),n.addEventListener("mouseout",(function(e){e.target.matches(".dot")&&s()})),s()}(),e=document.querySelector(".services-carousel"),t=document.querySelector(".services-arrow"),n=e.querySelectorAll(".element"),o=0,c=Math.floor(100/3),t.addEventListener("click",(function(t){var r=t.target;r.matches(".arrow-left")&&o>0?--o:r.matches(".arrow-right")&&o<n.length-1&&++o,e.style.transform="translateX(-".concat(o*c,"%)")}))})();