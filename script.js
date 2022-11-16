let burger = document.getElementById('burger');
let navigation = document.getElementById('nav');

burger.addEventListener('click',function() {
    burger.classList.toggle('openedBurger');
    // navigation.classList.toggle('column');
})
burger.addEventListener('click',function() {
    navigation.classList.toggle('column')
})

// form

let input = document.querySelector('.input-form');
let addButton = document.querySelector('.btnAdd');
let ul = document.querySelector('.ul-items');
let clearAll = document.querySelector('.clearall');
let form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let inpuValue = input.value;
    if (inpuValue == ' ') {
      return;
    }
    let li = document.createElement('li');

    let trash = document.createElement('i');
    trash.classList.add('fa-solid');
    trash.classList.add('fa-trash');
    trash.addEventListener('click', function() {
        li.remove();
    })
  
    
    li.textContent = inpuValue;
  
    
    ul.appendChild(li);
    li.appendChild(trash);
    input.value = ' ';
  });
  
  clearAll.addEventListener("click", function () {
    ul.innerHTML = ' ';
  });
