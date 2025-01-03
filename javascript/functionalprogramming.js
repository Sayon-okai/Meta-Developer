// Task 1: consoleStyler function
function consoleStyler(color, background, fontSize, txt) {
    let message = "%c" + txt;
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style);
  }
  
  // Task 2: celebrateStyler function
  function celebrateStyler(reason) {
    let fontStyle = "color: tomato; font-size: 50px";
    if (reason === "birthday") {
      console.log(`%cHappy birthday`, fontStyle);
    } else if (reason === "champions") {
      console.log(`%cCongrats on the title!`, fontStyle);
    } else {
      console.log(`%c${reason}`, fontStyle);
    }
  }
  
  // Task 3: Running both functions
  consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
  celebrateStyler('birthday');
  
  // Task 4: styleAndCelebrate function
  function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
  }
  
  // Running styleAndCelebrate with custom arguments
  styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
  