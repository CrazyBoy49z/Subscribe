Subscribe.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'subscribe-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('subscribe_items'),
                layout: 'anchor',
                items: [{
                    html: _('subscribe_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'subscribe-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    Subscribe.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Subscribe.panel.Home, MODx.Panel);
Ext.reg('subscribe-panel-home', Subscribe.panel.Home);
