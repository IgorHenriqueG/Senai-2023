window.onload = () => {
    const anchors = document.querySelectorAll('.link');
    const transition_el = document.querySelector('.transition');
  
    setTimeout(() => {
      transition_el.classList.remove('is-active');
    }, 500);
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        transition_el.classList.add('is-active');

        let anchorHREF = anchor.querySelector('#hrefTarget')
        anchorHREF = anchorHREF.classList

        setInterval(() => {
          window.location.href = anchorHREF
        }, 500);
      })
    }
  }