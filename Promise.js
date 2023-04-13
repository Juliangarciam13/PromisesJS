const nums = 5;
const nums2 = 10;
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(nums + nums2);
    }, 3000);
    setTimeout(() => {
        reject('Promise reject');
    }, 3000);
});

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});