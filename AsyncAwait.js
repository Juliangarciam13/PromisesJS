function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved!');
        }, 3000);
    });
}

async function myFunction() {
    try {
        const result = await myPromise();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myFunction();