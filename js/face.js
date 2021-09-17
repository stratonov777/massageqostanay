let mouth = document.querySelector('.mouth'),
pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', debounce(e => {
  let x = e.clientX,
  y = e.clientY,
  height = window.innerHeight,
  width = window.innerWidth;

  if (y > height / 2) {
    mouth.classList.remove('-closed');
  } else {
    mouth.classList.add('-closed');
  }

  let deltaX = (x - width / 2) / width,
  deltaY = (y - height / 2) / height;

  [].forEach.call(pupils, pupil => {
    pupil.style.transform = `
translateX(${deltaX * 25}px)
translateY(${deltaY * 25}px)`;
  });
}), 100);


function debounce(func, ms) {
  let callAllowed = true;

  return function () {
    if (!callAllowed) {
      return;
    }

    func.apply(this, arguments);

    callAllowed = false;

    setTimeout(() => {
      callAllowed = true;
    }, ms);
  };
};