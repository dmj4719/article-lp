const markerObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animated'); });
    }, { threshold: 0.5 });
    document.querySelectorAll('.marker-yellow,.marker-red').forEach(el => markerObs.observe(el));

    /* fadeObserver削除済み */

    const ctaObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.getElementById('fixedCta').style.display = 'block';
          ctaObs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    ctaObs.observe(document.getElementById('triggerCta'));

    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.body.style.paddingBottom = '70px';