console.log('js-que-02 page loded...!');

      let boxes = new Array(6);
      for (let i = 0; i < 6; i++) {
        boxes[i] = document.getElementById('box-' + (i + 1));
      }

      //color
      let pink = 'pink';
      let violet = 'violet';
      let red = 'red';
      let forestgreen = 'forestgreen';
      let blue = 'blue';
      let yellow = 'yellow';
      let colors = [pink, violet, red, forestgreen, blue, yellow];

      //main
      let currentBox = 0;
      let currentColor = 5;

      function changeColor() {
        for (let index = 0; index < boxes.length; index++) {
          boxes[index].style.backgroundColor = colors[currentColor];
          calColorIndex();
        }
        changeColorIndex();
      }

      function calColorIndex() {
        currentColor = (currentColor + 1) % colors.length;
      }

      function calBoxIndex() {
        currentBox = (currentBox + 1) % boxes.length;
      }

      function changeColorIndex() {
        currentColor = (currentColor + colors.length - 1) % colors.length;
      }

      setInterval(changeColor, 1000);