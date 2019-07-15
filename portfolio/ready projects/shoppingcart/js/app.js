//variables

const courses=document.querySelector('#courses-list'),
      shoppingCartContent=document.querySelector('#cart-content tbody'),
      clearCartBtn=document.querySelector('#clear-cart');






//event listeners
loadEventListeners();

function loadEventListeners(){
    //when add button is clicked
courses.addEventListener('click',buy);

//when remove button is clicked
shoppingCartContent.addEventListener('click',removeCourse);

//when clear cart is clicked
clearCartBtn.addEventListener('click',clearCart)
}





//functions
function buy(e){

e.preventDefault();

if(e.target.classList.contains('add-to-cart')){

    const course=e.target.parentElement.parentElement;
    getCourseInfo(course);
}

}

//read the course info function
function getCourseInfo(course){

    const courseinfo={
        image:course.querySelector('img').src,
        title:course.querySelector('h4').textContent,
        price:course.querySelector('.price span').textContent,
        id:course.querySelector('a').getAttribute('data-id')
    };

    //add to the cart 

    addToCart(courseinfo);

}

//adding to cart

function addToCart(course){

    const row=document.createElement('tr');

    row.innerHTML=`
    <tr>
        <td>
        <img src="${course.image}">
        </td>

        <td> ${course.title}</td>

        <td> ${course.price}</td>
    
        <td> 
        <a href="#" class="remove" data-id="${course.id}">X</a> 
        </td>
    
    </tr>
    `;
    shoppingCartContent.appendChild(row);

    //add courses to local storage
    saveIntoStorage(course);
}

//save into storage
function saveIntoStorage(course){
    let courses=getFromStorage();
    courses.push(course);
    localStorage.setItem('courses',JSON.stringify('courses'));
}

//get values from storage
function getFromStorage(){
    let courses;

    if(localStorage.getItem('courses') === null){
        courses=[];
    } else{
        courses=JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}


//removes the course from the cart

function removeCourse(e){

    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }
}

// removes all courses using clear cart button
function clearCart(){
    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}