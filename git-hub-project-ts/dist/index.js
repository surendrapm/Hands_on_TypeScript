"use strict";
const getUsername = document.querySelector('#user');
const formSubmit = document.querySelector('.form');
const main_container = document.querySelector('.main-container');
async function myCustomFetch(url, options) {
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error(`Network response was not ok -status:${res.status}`);
    }
    const data = res.json();
    console.log(data);
    return data;
}
function fetchUserdata(url) {
    myCustomFetch(url, {});
}
//call all user data
fetchUserdata("https://api.github.com/users");
