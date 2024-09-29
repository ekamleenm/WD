console.log("this is a good one");
console.log("this is also good one");


setTimeout(() => {
  console.log("I am inside settimeout");
}, 2000);

console.log("The end");

const callback = (args) => { console.log(args); }

const loadScript = (src, callback) => {
    let src = document.createElement("script");
    screen.src = src;
    screen.onload = callback("hhhh");
    document.head.append(src);
}

loadScript("",callback );