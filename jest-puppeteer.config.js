module.exports = {
    launch: {
        headless: false,
        slowMo: 0,
        viewportWidth: 1920,
        viewportHeight: 1080,
        timeout: 10000,
        args: ["--proxy-server='direct://'", '--proxy-bypass-list=*', '--start-maximized']
    },
    browserContext: "default"
}