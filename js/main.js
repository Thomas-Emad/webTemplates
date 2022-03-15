// Show Nav
let iconNav = document.getElementById("iconNav");
let num = true;
let ShowNav = () => {
  if (num === true) {
    iconNav.style.backgroundColor = "#eee";
    document.querySelector("header nav ul").style.top = "100%";
    num = false;
  } else if (num === false) {
    iconNav.style.backgroundColor = "transparent";
    document.querySelector("header nav ul").style.top = "-300%";
    num = true;
  }
};
iconNav.onclick = ShowNav;

// Hidden ul > for onclick
for (let i =0; i < 4; i++) {
  let onclickNavLi = document.getElementsByClassName("linkList")[i];
  onclickNavLi.onclick = ShowNav;
}
