const tweetList=document.getElementById('tweet-list');

eventListeners();

function eventListeners(){
    //adding tweet
    document.querySelector('#form').addEventListener('submit', newtweet);
    //removing Tweet
    tweetList.addEventListener('click', removeTweet)
    //printing the tweets form local storage
    document.addEventListener('DOMContentLoaded',localStorageOnLoad)
}

//functions
function newtweet(e){
e.preventDefault();
const tweet = document.getElementById('tweet').value;

const removeBtn = document.createElement('a');
removeBtn.textContent='X';
removeBtn.classList='remove-tweet';

const li = document.createElement('li');
li.textContent=tweet;

li.appendChild(removeBtn);

tweetList.appendChild(li);

addTweetLocalStorage(tweet);
}

function removeTweet(e){
if(e.target.classList.contains('remove-tweet')){
    e.target.parentElement.remove();
}

removeTweetLocalStorage(e.target.parentElement.textContent);
}

function addTweetLocalStorage(tweet){
let tweets=getTweetsLocalStorage();
tweets.push(tweet);
localStorage.setItem('tweets',JSON.stringify(tweets));
}

function getTweetsLocalStorage(){
    let tweets;
    const tweetsLS=localStorage.getItem('tweets');

    if(tweetsLS===null){
        tweets=[];
    } else{
        tweets=JSON.parse(tweetsLS);
    }

    return tweets;
}

function localStorageOnLoad(tweet){
    let tweets=getTweetsLocalStorage(tweet);

    tweets.forEach(tweet => {
        const removeBtn = document.createElement('a');
        removeBtn.textContent='X';
        removeBtn.classList='remove-tweet';

        const li = document.createElement('li');
        li.textContent=tweet;

        li.appendChild(removeBtn);

        tweetList.appendChild(li);
    });
}

function removeTweetLocalStorage(tweet){

let tweets=getTweetsLocalStorage();

//removes x from the tweet
const tweetDelete=tweet.substring(0,tweet.length-1);

//looping through the tweets
tweets.forEach(function(tweetLS,index){
if(tweetDelete===tweetLS){
tweets.splice(index,1);
}
})

//save the data to local storage
localStorage.setItem('tweets',JSON.stringify(tweets));

}