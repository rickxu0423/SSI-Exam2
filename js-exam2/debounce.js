function debounce(fn, wait) {
   let timer;
   return function() {
       const context = this, args = arguments;
       clearTimeout(timer);
       timer = setTimeout(() => fn.apply(context, args), wait)
   }
}