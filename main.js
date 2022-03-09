const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    const chosen_food = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_food}`)
    currently_visible.forEach(function (food) {
        food.classList.remove("active");
    });

    make_visible.forEach(function (food) {
        food.classList.add("active");
    });

});

/* function e , event listener wheneber you call event listener it passes the event you emmitted into that reference, and we call that event 'e'; e is a variable for the event listener
e is the event, target is something inside the event

look over strings 
every element that is currently visible, and for each one i want to remove active from each of it's classes

when you go through a list, it's called iteration
*/