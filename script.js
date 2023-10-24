let dad_joke_content=document.querySelector(".dad_joke_content");
const tell_me_joke_btn=document.querySelector(".tell_me_joke_btn");


tell_me_joke_btn.addEventListener("click",()=>{
 joke_Generator()
})

async function joke_Generator(){
    dad_joke_content.innerText="loading..."
    let response=await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=",{
        method: "GET",
        headers: {
           "X-Api-Key": "aeN7AijzDzY5nPsgTRwqIA==1PEk3NVqiQ3MYV2j",
  },

    });
    let joke = await response.json();
    // console.log(joke[0].joke)
    dad_joke_content.innerText=joke[0].joke+"😂";


}