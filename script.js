const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open ? 'true' : 'false');
});
document.querySelectorAll('#main-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const target = new Date('2026-12-01T09:30:00+05:30').getTime();
function updateCountdown(){
  const diff = target - Date.now();
  const vals = diff > 0 ? [
    Math.floor(diff/86400000),
    Math.floor(diff/3600000)%24,
    Math.floor(diff/60000)%60,
    Math.floor(diff/1000)%60
  ] : [0,0,0,0];
  ['days','hours','minutes','seconds'].forEach((id,i)=>document.getElementById(id).textContent=String(vals[i]).padStart(2,'0'));
}
updateCountdown(); setInterval(updateCountdown,1000);
