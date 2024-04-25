
const animatedItems = document.querySelectorAll('.animated-items');

if (animatedItems.length > 0) {
  window.addEventListener('scroll', animateOnScroll);
  function animateOnScroll() {
    for (let index = 0; index < animatedItems.length; index++) {
      const animatedItem = animatedItems[index];
      const animatedItemHeight = animatedItem.offsetHeight;
      const animatedItemOffset = offset(animatedItem).top;
      const animatedStart = 4;

      let animatedPoint = window.innerHeight - animatedItemHeight / animatedStart;

      if (animatedItemHeight > window.innerHeight) {
        animatedPoint = window.innerHeight - window.innerHeight / animatedStart;
      }

      if ((scrollY > animatedItemOffset - animatedPoint) && (scrollY < animatedItemOffset + animatedItemHeight)) {
        animatedItem.classList.add('active');
      } else {
        if (!animatedItem.classList.contains('animated-no-hide')) {
          animatedItem.classList.remove('active');
        }
      }
    }
  }
  function offset(elem) {
    const rect = elem.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animateOnScroll();
  }, 300);
}