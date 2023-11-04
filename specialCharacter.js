let inputArea = document.getElementById("field");
let spc = document.getElementsByClassName("spc");
let quote = document.getElementsByClassName("tu");
Qt = ['"', "'"];
[...quote].forEach((v) => {
  v.id = `${Qt[0]}•${Qt[1]}`;
});

inputArea.addEventListener("keypress", (e) => {
  [...spc].forEach((item) => {
    if (item.id) {
      let IDarr = item.id.split("•");
      for (let v of IDarr) {
        if (v == e.key) {
          item.style.backgroundColor = "rgb(175, 30, 30)";
        }
        setTimeout(() => {
          item.style.backgroundColor = "rgb(255,255,255,255)";
        }, 100);
      }
    }
  });
});
