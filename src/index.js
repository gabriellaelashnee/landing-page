function tickets() {
  let name = prompt("What is your name?");
  let age = prompt("What is your age?");

  if (age <= 20) {
    alert(name + ",Unfortunately you cannot purchase tickets🙁");
  } else {
    let email = prompt("What is your email?");
    alert(
      name +
        " " +
        ",We'll be in touch by email, meanwhile get your favorite teams merchandise🏏 on https://shop.icc-cricket.com/en/"
    );
  }
}

let changeButton = document.querySelector("button");
changeButton.addEventListener("click", tickets);
