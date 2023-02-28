document.addEventListener('DOMContentLoaded', () => {
   let count = document.querySelector('.count');
   let counter = 0;
   let [decrBtn, resetBtn, increaseBtn] = ['decr', 'reset', 'increase'].map(cls => document.querySelector(`.${cls}`))

   console.log(decrBtn, resetBtn, increaseBtn);

   function setColor() {
      count.style.color = (counter > 0 ? 'green' : (counter === 0 ? 'black' : 'red'));
   }
   decrBtn.addEventListener('click', () => {
      count.innerHTML = (--counter).toString();
      setColor();
   });
   increaseBtn.addEventListener('click', () => {
      count.innerHTML = (++counter).toString();
      setColor();
   });
   resetBtn.addEventListener('click', () => {
      counter = 0;
      count.innerHTML = '0';
      setColor();
   });

});