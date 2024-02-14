browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    browser.tabs.update({
        url: "https://lens.google.com/uploadbyurl?url=" + tabs[0].url
    });
    window.close();
});