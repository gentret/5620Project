/*!
* Start Bootstrap - New Age v6.0.4 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

// Object Literals
// User Profile
let user = {
    name: 'Barry',
    age: 12,
    email: 'barry@youremail.com',
    location: 'Encino',
    blogs: ['why mac & cheese rules', '10 things to make with frijoles'],
    learningRegimen: ['Memory Palace', 'Dyslexia'],
    //Method attached to the user
    login: function() {
        console.log('The Memory Athlete has logged in.');
    },
    logout: function(){
        console.log('The Memory Athlete has logged out.');
    },
    userLogBlogs: function() {
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

// List the user blogs
user.userLogBlogs();

//Cant see this
//console.log("Que" + this);



console.log(user);
console.log(user.learningRegimen);

// Memory Coach profile
let memoryCoach = {
    name: 'Uriel',
    age: 46,
    email: 'uavila@youremail.com',
    location: 'los angeles',
    blogs: ['Why Navigation Rules', '10 Ways to Find Your Way!'],
    trainingRegimen: ['Memory Palace', 'Dominic System', 'Dyslexia'],
    //Method attached to the memoryCoach
    login: function() {
        console.log('The Memory Coach has logged in.');
    },
    logout: function(){
        console.log('The Memory Coach has logged out.');
    },
    coachLogBlogs: function() {
        console.log('this Coach has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};


console.log(memoryCoach);
console.log(memoryCoach.trainingRegimen);
console.log("Memory Training Blogs: " + memoryCoach.blogs);

// Over-ride user name with CIS5620 Hacker
console.log("Hi, I am " + user['name'] + ' from ' + user['location'] + " " + "learning how to remeber math rules and formulas.");
user['name'] = 'Anonymous CIS5620 Hacker';
console.log("My user name, Barry, has been switched to " + user['name']);

// Student log-in
console.log("The Memory Athlete type is an " + typeof user);
user.login();
user.logout();


// Memory Coach log-in
console.log("The Memory Coach type is an " +typeof memoryCoach);
memoryCoach.login();
memoryCoach.logout();

// const name = 'uriel';
// name.toUpperCase();


// 