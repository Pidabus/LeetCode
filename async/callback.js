const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':C',
        });
    }
    else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDebSimplified < Cat',
        });
    }
    else {
        callback('Thumbs up and Subscribe');
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message); // becomes 'callback'
}, (error) => {
    console.log(error.name + ' ' + error.message); // becomes 'errorCallback'
})

