browser.contextMenus.create(
    {
        id: "search",
        title: "Searh image on Google",
        contexts: ["image"],
    }
);

browser.contextMenus.onClicked.addListener((info, tab) => {
    // const url = info.srcUrl;
    try {
        browser.tabs.update({
            url: "https://lens.google.com/uploadbyurl?url=" + info.srcUrl
        });    
    } catch (error) {
        
    }
    
    // window.close();
})
