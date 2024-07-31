browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    const urlType = url.split('.').pop();
    const imageTypes = ["jpg", "png", "jpeg"] 
    if (imageTypes.includes(urlType)) {
        browser.tabs.update({
            url: "https://lens.google.com/uploadbyurl?url=" + url
        });
        window.close();
    }
});