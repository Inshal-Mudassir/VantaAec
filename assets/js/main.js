
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation")});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));}
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
 const year=document.querySelectorAll("[data-year]");year.forEach(el=>el.textContent=new Date().getFullYear());
 const form=document.querySelector("#inquiryForm");
 if(form){form.addEventListener("submit",()=>{const status=form.querySelector(".form-status");if(status)status.textContent="Sending your inquiry…";});}
});
