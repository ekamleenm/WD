let promise_1 = new Promise((resolve, reject)=> {
  let a = Math.random();
  if(a<0.5){
    reject("No random no was supporting you");
  }
  else{
    setTimeout(() => {
      console.log("yes I am done");
      resolve("ga");
    }, 3000);
  }
});

promise_1.then((a)=>{
  console.log(a);
}).catch((err)=>{
  console.log(err);
});

