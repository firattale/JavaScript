// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect 
// the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.


convertToRGB("#f4e3d8");
// Your color is RGB(244, 227, 216)

function convertToRGB(str) {
  // put each char into an array and remove #
  let strArr = str.split("")
  strArr.shift();
  for (let i = 0; i < strArr.length; i++) {
    // check the value of string number
    if (strArr[i] <= 10) {
      strArr[i] = Number(strArr[i])
    }
    switch (strArr[i]) {
      case "a":
        strArr[i] = 10;
        break;
      case "b":
        strArr[i] = 11;
        break;
      case "c":
        strArr[i] = 12;
        break;
      case "d":
        strArr[i] = 13;
        break;
      case "e":
        strArr[i] = 14;
        break;
      case "f":
        strArr[i] = 15;
        break;
      default:
        break;
    }
  }
  let red = (16 * strArr[0]) + strArr[1];
  let green = (16 * strArr[2]) + strArr[3];
  let blue = (16 * strArr[4]) + strArr[5];
  console.log(`Your color is RGB(${red}, ${green}, ${blue})`);
}

convertToHex(231, 55, 145);
// Your Hex Number is #E73791


function convertToHex(red, green, blue) {
  let r1 = parseInt(red / 16);
  let r2 = red % 16;
  let g1 = parseInt(green / 16);
  let g2 = green % 16;
  let b1 = parseInt(blue / 16);
  let b2 = blue % 16;
  let strArr = [r1, r2, g1, g2, b1, b2];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] < 10) {
      strArr[i] = strArr[i].toString();
    }
    switch (strArr[i]) {
      case 10:
        strArr[i] = "A";
        break;
      case 11:
        strArr[i] = "B";
        break;
      case 12:
        strArr[i] = "C";
        break;
      case 13:
        strArr[i] = "D";
        break;
      case 14:
        strArr[i] = "E";
        break;
      case 15:
        strArr[i] = "F";
        break;
      default:
        break;
    }
  }

  console.log(`Your Hex Number is #${strArr[0]}${strArr[1]}${strArr[2]}${strArr[3]}${strArr[4]}${strArr[5]}`);
}
