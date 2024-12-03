let timerId=0;

self.onmessage = function (e) {
    
    let { seconds } = e.data;
    
    timerId = setInterval(() => {                                    
                                    self.postMessage(seconds);       
                                    seconds = seconds - 1       
                                    if (seconds < 0) {                                        
                                        clearInterval(timerId);
                                        self.postMessage("Timer Finished");
                                    }
                                }, 1000);
};

self.onclose = function () {
    clearInterval(timerId);
};
