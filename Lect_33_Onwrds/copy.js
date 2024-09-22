const original = { name: 'Ekam', details: { age: 21 } };
const deepCopy = JSON.parse(JSON.stringify(original));

// Change the nested object in the deep copy
deepCopy.details.age = 25;

console.log(original.details.age); // 21, the original remains unchanged


const original2 = { name: 'Ekam', details: { age: 21 } };
const shallowCopy = { ...original2};

// Change the nested object in the shallow copy
shallowCopy.details.age = 25;

console.log(original2.details.age); // 25, because the nested object is shared
