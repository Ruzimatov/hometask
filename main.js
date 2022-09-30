1;
let day = +prompt("Hafta kunini kiriting ");

switch (day) {
  case 1:
    alert("Dushanba");
    break;
  case 2:
    alert("Seshanba");
    break;
  case 3:
    alert("Chorshanba");
    break;
  case 4:
    alert("Payshanba");
    break;
  case 5:
    alert("Juma");
    break;
  case 6:
    alert("Shanba");
    break;
  case 7:
    alert("Yakshanba");
    break;
  default:
    console.log("Bunday kun yoq");
}

2;
let mark = +prompt("Hafta kunini kiriting ");

switch (mark) {
  case 1:
    alert("Yomon");
    break;
  case 2:
    alert("Qoniqarsiz");
    break;
  case 3:
    alert("Qoniqarli");
    break;
  case 4:
    alert("Yaxshi");
    break;
  case 5:
    alert("Alo");
    break;
  default:
    console.log("Bunday kun yoq");
}
3

let season = +prompt("Raqam kiriting");

switch (season) {
  case 1:
  case 2:
  case 12:
    alert("qish");
    break;
  case 3:
  case 4:
  case 5:
    alert("bahor");
    break;
  case 6:
  case 7:
  case 8:
    alert("yoz");
    break;
  case 9:
  case 10:
  case 11:
    alert("kuz");
    break;
  default:
    alert("Bunday fasl yoq");
}


4
let month = +prompt('Oy raqamini kiriting')

switch (month) {
   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      alert('31-kun');
      break;
   case 4: case 6: case 9: case 11:
      alert('30-kun');
      break;
   case 2:
      alert('28-kun');
      break;
      default : console.log('Bunday oy yoq');
}

5
let scolar = +prompt('Baho kiriting')

switch (scolar) {
    case 1:
        alert('200ming');
        break;
    case 2:
        alert('350ming');
        break;
    case 3:
        alert('400ming');
        break;
    case 4:
        alert('600ming');
        break;

    case 5:
        alert('1mln');
        break;
    default: console.log('Bunday baho mavjud emas');
}