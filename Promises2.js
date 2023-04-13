const nums = [1,2,3,4];
const nums2 = [5,6,7,8];
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(nums[0] + nums2[0]);
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