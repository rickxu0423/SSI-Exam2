function throttle(fn, limit) {
    let inThrottle;
    return function() {
        const context = this, args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit)
        }
    }
}