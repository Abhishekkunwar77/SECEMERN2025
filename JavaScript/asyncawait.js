async function asAW() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Inside timeout");
        }, 5000);
    });
}

asAW().then(function(output) {
    console.log(output);
});
