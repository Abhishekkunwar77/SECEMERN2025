function promiseEg(flag) {
    return new Promise(function (resolve, reject) {
        if (flag === 1) {
            resolve("This is a promise resolve example");
        } else if (flag === 0) {
            reject("This is a reject example");
        }
    });
}

promiseEg(1)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));


// realtime example
// function promiseEg(flag) {""
//})
// promise -Location  Fnder example
//pass 2 things- melbourne, 2000
locationFinder("melbourne", 2000)
locationFinder = (location, time) => {
    return new Promise((locFound, locNotFound) => {
        if (isLocationValid(location, time)) {
            locFound(location, "Location Found", time, "seconds")
        } else {
            locNotFound(location, "not found in ", time, "seconds")
        }
    });
}
function isLocationValid(loc, time) {
    location = "Melbourne"
    t = 2000
    if (loc == location && time <= t) {
        return true
    } else {
        return false
    }
}

// instagram example 
likeCode = async () => {
    return new Promise((likingPost) => {
        setTimeout(() => {
            likingPost("Liked the post created!");
        }, 1000);
    });
};

commentCode = async () => {
    return new Promise((commentingPost) => {
        setTimeout(() => {
            commentingPost("Comment posted to the post created successfully!");
        }, 1000);
    });
};

async function createPost() {
    const post = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Created Successfully");
        }, 1000);
    });

    const [createdPost, likeMessage, commentMessage] = await Promise.all([post, likeCode(), commentCode()]);
    
    console.log(createdPost); 
    console.log(likeMessage); 
    console.log(commentMessage);
}

createPost();
