const cityForm = document.getElementById('cityform');
const cityInput = document.getElementById('city');
const submitButton = document.getElementById('submitButton');
const posterSection = document.getElementById('poster');


//Creating a new http object
const apiRequest = new XMLHttpRequest();

//Adding an event listener to the form to target mainly the submit button
cityForm.addEventListener('submit',($event)=>
{
  $event.preventDefault();
  const chosenCity = cityInput.value;
  apiRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&APPID=b34fddd3dae4a2eb0ad363b62f98ba1e');
  apiRequest.send();
})
//Getting Data from the external server
apiRequest.onreadystatechange = ()=>
{
    if(apiRequest.readyState === 4)
    {   
        if(apiRequest.status === 404)
        {
            return posterSection.textContent = 'City Not found';
        }
        const APIresponse = JSON.parse(apiRequest.response);
        posterSection.textContent = 'The weather in ' + APIresponse.name + ' is ' + APIresponse.weather[0].main + '.'
        
    }
}



