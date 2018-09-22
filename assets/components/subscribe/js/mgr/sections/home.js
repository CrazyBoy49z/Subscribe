Subscribe.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'subscribe-panel-home',
            renderTo: 'subscribe-panel-home-div'
        }]
    });
    Subscribe.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Subscribe.page.Home, MODx.Component);
Ext.reg('subscribe-page-home', Subscribe.page.Home);