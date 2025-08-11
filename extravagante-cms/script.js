
document.addEventListener('DOMContentLoaded', function(){
  // Dropdown toggle
  document.querySelectorAll('.dropbtn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.parentElement.classList.toggle('open');
    });
  });

  // Mobile toggle
  const togg = document.querySelector('.mobile-toggle');
  const sidebar = document.querySelector('.sidebar');
  if(togg){
    togg.addEventListener('click', ()=> sidebar.classList.toggle('open'));
  }

  // Fade-in observer
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  }, {threshold:0.12});
  document.querySelectorAll('.fade-in').forEach(el=> io.observe(el));

  // Simple form success handler (Netlify will handle actual submission)
  const form = document.querySelector('form[name="contact"]');
  if(form){
    form.addEventListener('submit', ()=>{
      // Let Netlify handle, but show small thanks (progressive enhancement)
      setTimeout(()=> alert('Thanks — message submitted.'), 500);
    });
  }
});
