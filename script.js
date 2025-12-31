// Mobile nav toggles
function attachNav(toggleId, navId){
  const t=document.getElementById(toggleId);
  const n=document.querySelector('#'+navId);
  if(!t||!n) return;
  t.addEventListener('click',()=>n.classList.toggle('show'));
}
attachNav('navToggle','nav');
attachNav('navToggle2','nav2');

// Simple contact form handler: validate and open mailto fallback
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('contactForm');
  const toast=document.getElementById('toast');
  if(!form) return;
  form.addEventListener('submit',(e)=>{
    // If the form is configured to post to an external action (Formspree), allow normal submit
    if(form.action && form.action.includes('formspree')){
      // Let browser submit the form normally (redirect handled by Formspree)
      return;
    }
    e.preventDefault();
    const name=form.name.value.trim();
    const email=form.email.value.trim();
    const phone=form.phone.value.trim();
    const message=form.message.value.trim();
    if(!name||!email||!message){
      showToast('Please complete required fields.',toast);
      return;
    }
    // Basic email pattern
    const re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!re.test(email)){
      showToast('Please enter a valid email address.',toast);
      return;
    }

    // Try to open mail client with prefilled subject/body
    const subject=encodeURIComponent('Website inquiry from '+name);
    const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`);
    const mailto=`mailto:hello@devesh.com?subject=${subject}&body=${body}`;
    // Use location change to open default mail client on Android/iOS/Windows
    window.location.href = mailto;
    showToast('Opening your mail app…',toast);
    form.reset();
  });
});


function showToast(msg, el){
  if(!el) return alert(msg);
  el.textContent = msg; el.hidden=false;
  setTimeout(()=>el.hidden=true,3000);
}

// Simple slider implementation
function setupSlider(){
  const slider = document.getElementById('heroSlider');
  if(!slider) return;
  const slides = Array.from(slider.querySelectorAll('.slide'));
  let idx = 0;
  const prev = slider.querySelector('.slider-prev');
  const next = slider.querySelector('.slider-next');
  function show(i){
    slides.forEach((s,si)=> s.setAttribute('aria-hidden', si!==i ? 'true' : 'false'));
  }
  show(0);
  function nextSlide(){ idx = (idx+1) % slides.length; show(idx); }
  function prevSlide(){ idx = (idx-1 + slides.length) % slides.length; show(idx); }
  let timer = setInterval(nextSlide,4000);
  slider.addEventListener('mouseenter',()=>clearInterval(timer));
  slider.addEventListener('mouseleave',()=> timer = setInterval(nextSlide,4000));
  if(next) next.addEventListener('click',()=>{ nextSlide(); });
  if(prev) prev.addEventListener('click',()=>{ prevSlide(); });
}
document.addEventListener('DOMContentLoaded', setupSlider);

// Social share helper
function sharePage(){
  if(navigator.share) {
    navigator.share({title:document.title, url:location.href}).catch(()=>{});
  } else {
    // fallback: copy URL
    navigator.clipboard?.writeText(location.href).then(()=> alert('Link copied'))
  }
}
