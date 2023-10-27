window.promises = [];


const minDelay = 1000; // 1 second
const maxDelay = 5000; // 5 seconds

function createRandomDelayPromise() {
    const randomDelay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${randomDelay / 1000} seconds`);
        }, randomDelay);
    });
}

for (let i = 0; i < 5; i++) {
    const promise = createRandomDelayPromise();
    window.promises.push(promise);
}

