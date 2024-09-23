import express from "express";
import ejs from "ejs";
const app = express();
const port = 3000;
app.get("/", (req, res) =>{
    const date = new Date();
    const d = date.getDay();
    let adv = "this is time to hardwork.";
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let days = week[d];
    if(d === 0 || days === 6){
         adv = "Its Fun Time!!";
        days = "Weekend";
    }
    
    res.render("index.ejs",{
        advice: adv,
        day: days,

    });

});
app.listen(port, () =>{
    console.log(`your app is running at the port ${port}.`)
    
});