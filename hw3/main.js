var input = document.getElementById("input") ;
var main = document.getElementById("main") ;
var root = document.getElementById("root") ;
var count = 0 ;
var number = 0 ;

input.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {  
        if(count == 0) {
            root.insertAdjacentHTML('beforeend', '<footer class="todo-app__footer" id="todo-footer"><div class="todo-app__total" id="total"></div><ul class="todo-app__view-buttons"><button id="allbtn">All</button><button id="activebtn">Active</button><button id="completedbtn">Completed</button></ul><div class="todo-app__clean" id="clean"><button id="clearbtn">Clear completed</button></div></footer>');
            main.insertAdjacentHTML('beforeend', `<ul class="todo-app__list" id="todo-list"></ul>`);
        }
        var inputvalue = input.value ;
        count++ ;
        number++ ;
        var todolist = document.getElementById("todo-list") ;
        todolist.insertAdjacentHTML('beforeend', `
        <li class="todo-app__item">
                <div class="todo-app__checkbox">
                    <input type="checkbox" id="${count}" class="chb" onclick="func()">
                    <label for="${count}">
                    </label>
                </div>
                <h1 class="todo-app__item-detail" id="todo${count}">
                    ${inputvalue}
                </h1>
                <img src="./img/x.png" class="todo-app__item-x" alt="x" >
        </li>
        `);

        var total = document.getElementById("total") ;
        total.innerHTML = `
        ${number} left
        ` ;
        input.value = "" ;
    }
});

function func() {
    var chb = document.getElementsByClassName('chb') ;
    number = count ;
    for(var i = 0 ; i <= count ; i++) {
        var todo = document.getElementById("todo"+ (i+1))
        if(chb[i].checked) {
            number-- ;
            var total = document.getElementById("total") ;
            total.innerHTML = `
            ${number} left
            ` ;
            todo.style.textDecoration = "line-through" ;
            todo.style.opacity = "0.5" ;
        }
        else {
            var total = document.getElementById("total") ;
            total.innerHTML = `
            ${number} left
            ` ;
            todo.style.textDecoration = "none" ;
            todo.style.opacity = "initial" ;
        }
    }
    
}


