var cancellable = function(fn, args, t) {
    // schedule execution
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

    // return cancel function
    return function cancelFn() {
        clearTimeout(timer);
    };
};