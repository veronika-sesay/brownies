const chciVidetRecept = prompt(
  'Chceš vidět recept na výborné brownies? (ano/ne)',
);

const recept = document.querySelector('#recept');

if (chciVidetRecept === 'ano') {
  recept.classList.remove('recipe__hide');
} else {
  document.body.innerHTML = `<h3>Děláš dobře, nebudeš tlustá!</h3>`;
}

let odpoved;
const chciVidetPostup = () => {
  if (chciVidetRecept === 'ano') {
    odpoved = prompt('Už máš nakoupeno? (ano/ne)');
  } else {
    document.body.innerHTML = `<h3>Měj se fajn!</h3>`;
  }
};
setTimeout(chciVidetPostup, 5000);

const postup = document.querySelector('#postup');
const anoChciVidetPostup = () => {
  if (chciVidetRecept === 'ano') {
    if (odpoved === 'ano') {
      postup.classList.remove('recipe__instructions--hide');
    } else {
      document.body.innerHTML += `<strong>Tak si nejdřív nakup a pak ti povím co s tím.</strong>`;
    }
  } else {
    document.body.innerHTML = `<h3>Na shledanou!</h3>`;
  }
};

setTimeout(anoChciVidetPostup, 6000);

//Funkce na brownies :-)

const rozpustenaCokolada = (cokolada, maslo) => {
  if (cokolada + maslo) {
    return `Mám dobrý základ pro brownies`;
  }
  return `Zdrclo se mi to, přidám pár lžic horké vody a rozmíchám`;
};

const vejceSCukrem = (vejce, cukr) => {
  if (vejce + cukr) {
    return `Bude to výborné!`;
  }
  return `Brownies asi nebudou`;
};

const sucheIngredience = (mouka, kypriciPrasek, sul, chilli) => {
  if (mouka + kypriciPrasek + sul + chilli) {
    return `Hezky mi to rovnoměrně naběhne`;
  }
  return `Jsem líná, nasypu to tam rovnou a něco z toho vyleze`;
};

const brownies = (
  rozpustenaCokolada,
  vejceSCukrem,
  sucheIngredience,
  trouba,
) => {
  if (rozpustenaCokolada + vejceSCukrem + sucheIngredience + trouba) {
    return `Hurá, upekla jsem výborné brownies!`;
  }
  return `Za stálého míchání vylejeme do záchoda`;
};
