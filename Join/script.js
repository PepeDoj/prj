"use strict";

let users = [
    {
        "nm" : "Alex",
        "lg" : "admin",
        "pw" : "admin1234",
        "rl" : "User"
    },

    {
        "nm" : "Usein",
        "lg" : "user",
        "pw" : "user1234",
        "rl" : "Admin"
    }
];

function LogIn() {
    let lg = document.querySelector("#lg_in");
    let pw = document.querySelector("#pw_in");   
    
    let lg_in = lg.value;
    let pw_in = pw.value;

    console.log(users);

    for(const user of users)
    {
        if(user.lg == lg_in && user.pw == pw_in && user.rl == "Admin")
        {
            document.location = "AdminRoom.html";
        }
        else if(user.lg == lg_in && user.pw == pw_in && user.rl == "User")
        {
            document.location = "UserRoom.html";
        }

        if(user.lg != lg_in && user.pw != pw_in)
        {
            
        }
    }
}

function LogUp()
{
    let nm = document.querySelector("#nm_up");
    let lg = document.querySelector("#lg_up");
    let pw = document.querySelector("#pw_up");  
    let rl = document.querySelector("#rl_up");  


    let nm_up = nm.value;
    let lg_up = lg.value;
    let pw_up = pw.value;
    let rl_up = rl.value;
       
    for(const user of users)
    {
        if(user.lg == lg_up)
        {

        }
        
        
        if((user.lg != lg_up) && (nm_up != null && lg_up != null && pw_up != null)) 
        {
            users.push({ nm: nm_up, lg: lg_up, pw: pw_up, rl: rl_up});

            console.log(users);
            
            break;
        }
        

    }
}
