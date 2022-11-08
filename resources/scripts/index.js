const star = '★';
const starEmpty = '☆';
const starsElement = document.getElementById('stars');
const reviewsElement = document.getElementById('reviews');
const nextElement = document.getElementById('next');
const prevElement = document.getElementById('prev');
const removeItem = document.getElementById('removeItem');
const addItem = document.getElementById('addItem');
const amount = document.getElementById('amount');

const userCart = {
    amount: 0
}

amount.innerHTML = userCart.amount;


function gradeInStars (stars) {
    return star.repeat(stars) + starEmpty.repeat(5-stars);
}

function amountOfReviews (amount) {
    return `${amount} reviews`
}

starsElement.innerHTML = gradeInStars(3);
reviewsElement.innerHTML = amountOfReviews(110);


let grads = 0;

function updateDish() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
        console.log(data.meals[0].strMealThumb);
        console.log(data.meals[0].strMeal);
        document.getElementById('imageSalad').src = data.meals[0].strMealThumb;
        document.querySelector('#title h1').innerHTML = data.meals[0].strMeal;
    });
}
prevElement.addEventListener('click', ()=>{
    grads += 360;
    document.getElementById('imageSalad').style.transform = `rotate(${grads}deg)`;
    updateDish();
});
nextElement.addEventListener('click', ()=>{
    grads -= 360;
    document.getElementById('imageSalad').style.transform = `rotate(${grads}deg)`;
    updateDish();
});

removeItem.addEventListener('click', ()=>{
    if (userCart.amount > 0){
        userCart.amount--;
        amount.innerHTML = userCart.amount;
    }else{
        alert('Amount is already 0')
    }
});
addItem.addEventListener('click', ()=>{
    userCart.amount++;
    amount.innerHTML = userCart.amount;
    if (userCart.amount === 10) {
        alert('Wow! you really like salad');
    }
});