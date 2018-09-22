var Subscribe = function (config) {
    config = config || {};
    Subscribe.superclass.constructor.call(this, config);
};
Ext.extend(Subscribe, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('subscribe', Subscribe);

Subscribe = new Subscribe();