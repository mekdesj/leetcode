var cancellable = function(fn, args, t) {
    // Call immediately
    fn(...args);

    // Start interval
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // Return cancel function
    const cancelFn = () => {
        clearInterval(intervalId);
    };

    return cancelFn;
};