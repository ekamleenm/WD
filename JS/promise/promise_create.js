function getDataFromInternet(){
  let promise = new Promise((resolve,reject)=> {
    console.log("getting data from internet using Promise.");
    for(let i = 0; i < 10; i++){
      console.log(i);
    }
    resolve('data from internet');
    reject('could not get data');
  });
  return promise;
}

getDataFromInternet()
.then((data) => {
  console.log(`data is fetched -> ${data}`);
})
.catch((error)=>{
  console.log(`${error}`);
})
.finally(()=> {console.log(`final step`)});

