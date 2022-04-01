console.log("connected");

function increment() {
    let count = document.querySelector(".count");
    let value = Number(count.innerHTML);

    if (value >= 10000) {
        alert("Can not go any higher");
    
        return value;
    } else {
        value += 1;
    
        return value;
    }
}

function decrement() {
    let count = document.querySelector(".count");
    let value = Number(count.innerHTML);

    if (value <= 0) {
        alert("Can not go any lower");

        return 0;
    } else {
        value -= 1;

        return value;
    }
}
