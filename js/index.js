// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((onePep) => {
    if (state.mushrooms) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach((onePep) => {
    if (state.whiteSauce) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((onePep) => {
    if (state.glutenFreeCrust) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  btn=document.getElementsByClassName('btn');
  if (state.pepperoni) {
    btn[0].classList.add('active')
  }else{
    btn[0].classList.remove('active')
  }
  if (state.mushrooms) {
    btn[1].classList.add('active')
  }else{
    btn[1].classList.remove('active')
  }
  if (state.greenPeppers) {
    btn[2].classList.add('active')
  }else{
    btn[2].classList.remove('active')
  }
  if (state.whiteSauce) {
    btn[3].classList.add('active')
  }else{
    btn[3].classList.remove('active')
  }
  if (state.glutenFreeCrust) {
    btn[4].classList.add('active')
  }else{
    btn[4].classList.remove('active')
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const panel=document.querySelector('.panel.price')
  
  const lista=panel.getElementsByTagName('ul')[0]
  lista.innerHTML=''
  if (state.pepperoni) {
    let novo = document.createElement('li')
    novo.innerHTML='$1 pepperoni'
    lista.appendChild(novo)
  }
  if (state.mushrooms) {
    let novo = document.createElement('li')
    novo.innerHTML='$1 mushrooms'
    lista.appendChild(novo)
  }
  if (state.greenPeppers) {
    let novo = document.createElement('li')
    novo.innerHTML='$1 green peppers'
    lista.appendChild(novo)
  }
  if (state.whiteSauce) {
    let novo = document.createElement('li')
    novo.innerHTML='$3 white sauce'
    lista.appendChild(novo)
  }
  if (state.glutenFreeCrust) {
    let novo = document.createElement('li')
    novo.innerHTML='$5 gluten-free crust'
    lista.appendChild(novo)
  }
  
  total=10
  for (let value of [...lista.children]){
    total+=Number(value.innerHTML[1])
    
  }
  totalTag=panel.getElementsByTagName('strong')[0]
  totalTag.innerHTML=`$${total}`
  

}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
