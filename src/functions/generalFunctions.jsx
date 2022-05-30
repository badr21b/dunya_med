export function scrollToTop() {
   return  window.onbeforeunload = function () {
       window.scrollTo(0, 0);
   }

}
