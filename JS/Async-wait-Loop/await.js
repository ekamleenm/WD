fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then(response => {
        if(!response.ok){
          throw new Error("Error: " + response.statusText);
        }
        else{
          return response.json();
        }
      })
      .then(json => console.log(json))
      .catch(error => console.log(error))

async function getUsers(){
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/5');
    let json = await response.json();
    console.log(json);
  } catch(error){
    console.log(error);
  }
  
}

getUsers();
