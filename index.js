let in_wrap = document.getElementById('in-wrap');
let number = document.getElementById('number');

let element = in_wrap.children;
let array_ = [element];
let array_length;

array_.forEach(function(e) {
  array_length = e.length - 1;
});

in_wrap.style.width = array_length * 700 + 700 + 'px';

let count = 0;
let move_slide = 0;

function count_img(count) {
  number.innerHTML = count + 1;
}

document.getElementById('next').addEventListener('click', function() {
  if (count < array_length) {
    move_slide += 700;
    in_wrap.style.right = move_slide + 'px';
    count++;
    count_img(count);
  }
});

document.getElementById('back').addEventListener('click', function() {
  if (count > 0 && count <= array_length) {
    move_slide -= 700;
    in_wrap.style.right = move_slide + 'px';
    count--;
    count_img(count);
  }
});
