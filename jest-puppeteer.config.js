module.exports = {
    launch: {
        headless: false,
        slowMo: 0,
        defaultViewport: {
            width: 1920,
            height: 1080
        },
        timeout: 10000,
        args: ["--proxy-server='direct://'", '--proxy-bypass-list=*', '--start-maximized']
    },
    browserContext: "default"
}