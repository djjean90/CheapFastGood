const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const fast = document.querySelector('#fast');
const cheap = document.querySelector('#cheap');

console.log(toggles);

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => doTrick(e.target))
);

function doTrick(theClicked) {
  if (good.checked && fast.checked && cheap.checked) {
    if (theClicked === good) {
      fast.checked = false;
    }
    if (theClicked === fast) {
      cheap.checked = false;
    }
    if (theClicked === cheap) {
      good.checked = false;
    }
  }
}
