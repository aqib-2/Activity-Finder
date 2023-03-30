let button=document.getElementById('btn');
let text=document.getElementById('work');

async function fetchActivity(){
        let url=`http://www.boredapi.com/api/activity`;
        try {
                let response = await fetch(url);
                if(response.ok){
                    let data = await response.json();
                    console.log(data);
                    text.innerHTML=data.activity;
            }   
        } catch (error) {
            text.innerHTML="An Error Occured!";
        }                   
}
button.addEventListener('click',fetchActivity);
//&type=${actype.value}