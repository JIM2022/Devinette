
console.log("Bienvenue dans ce jeu de devinette !");

var nb = Number(prompt("Saisir un chiffre entre 1 et 100"));
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
// console.log("(La solution est " + solution + ")");

for (var i = 1; i <= 6; i++) {

  if (nb === solution) {
    alert("Felicitations, vous avez trouvé en : " + i + " Tours");
    console.log("Felicitations, vous avez trouvé en : " + i + " Tours");
    break;
  }
  else if (i === 6) {
    alert("Perdu : La réponse etait " + solution);
    break;
  }
  else if (nb < solution) {
    alert(nb + " est un chiffre trop Petit");
    console.log(nb + " est un chiffre trop Petit");
  }
  else {
    alert(nb + " est un chiffre trop Grand");
    console.log(nb + " est un chiffre trop Grand");
  }
  
  nb = Number(prompt("Saisir un chiffre entre 1 et 100"));
}
