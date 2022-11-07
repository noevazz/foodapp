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
prevElement.addEventListener('click', ()=>{
    grads += 360;
    document.getElementById('imageSalad').style.transform = `rotate(${grads}deg)`;
});
nextElement.addEventListener('click', ()=>{
    grads -= 360;
    document.getElementById('imageSalad').style.transform = `rotate(${grads}deg)`;
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