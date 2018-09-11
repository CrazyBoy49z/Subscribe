Ext.onReady(function () {
    Subscribe.config.connector_url = OfficeConfig.actionUrl;

    var grid = new Subscribe.panel.Home();
    grid.render('office-subscribe-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});