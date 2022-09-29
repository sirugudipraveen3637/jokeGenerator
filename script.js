const btnClick=document.getElementById("jokeBtn");
const jokevalue=document.getElementById("joke");

const asyncFunc = async () => {
	const response = await fetch("https://api.chucknorris.io/jokes/random");
    console.log(response)
   	const data = await response.json();
    return data;
}

btnClick.addEventListener('click', () => {
    asyncFunc().then(data => jokevalue.textContent=data.value);
    
})

