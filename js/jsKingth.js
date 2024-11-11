const light_count = 6;
let current_light = 0;
let direction = 'RIGHT';
let intervalId = null;

updateLight = () => {
  if (direction === 'RIGHT') {
    current_light++;

    $('.box')
      .eq(current_light - 1)
      .css('background', '#32012F');
    $('.box')
      .eq(current_light - 2)
      .css('background', '#49243E');
    $('.box')
      .eq(current_light - 3)
      .css('background', '#704264');
    $('.box')
      .eq(current_light - 4)
      .css('background', '#BB8493');
    $('.box')
      .eq(current_light - 5)
      .css('background', '#DBAFA0');

    if (current_light == light_count - 1) {
      direction = 'LEFT';
    }
  } else {
    current_light--;

    $('.box')
      .eq(current_light - 1)
      .css('background', '#32012F');
    $('.box')
      .eq(current_light - 2)
      .css('background', '#49243E');
    $('.box')
      .eq(current_light - 3)
      .css('background', '#704264');
    $('.box')
      .eq(current_light - 4)
      .css('background', '#BB8493');
    $('.box')
      .eq(current_light - 5)
      .css('background', '#DBAFA0');

    if (current_light === 0) {
      direction = 'RIGHT';
    }
  }
};

$('#btn01').on('click', function () {
  clearInterval(intervalId);
  intervalId = setInterval(updateLight, 150);
});

$('#btn02').on('click', function () {
  clearInterval(intervalId);
});