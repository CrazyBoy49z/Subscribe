<?php

/**
 * The home manager controller for Subscribe.
 *
 */
class SubscribeHomeManagerController extends modExtraManagerController
{
    /** @var Subscribe $Subscribe */
    public $Subscribe;


    /**
     *
     */
    public function initialize()
    {
        $this->Subscribe = $this->modx->getService('Subscribe', 'Subscribe', MODX_CORE_PATH . 'components/subscribe/model/');
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return ['subscribe:default'];
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('subscribe');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->Subscribe->config['cssUrl'] . 'mgr/main.css');
        $this->addJavascript($this->Subscribe->config['jsUrl'] . 'mgr/subscribe.js');
        $this->addJavascript($this->Subscribe->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->Subscribe->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->Subscribe->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->Subscribe->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->Subscribe->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->Subscribe->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        Subscribe.config = ' . json_encode($this->Subscribe->config) . ';
        Subscribe.config.connector_url = "' . $this->Subscribe->config['connectorUrl'] . '";
        Ext.onReady(function() {MODx.load({ xtype: "subscribe-page-home"});});
        </script>');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        $this->content .= '<div id="subscribe-panel-home-div"></div>';

        return '';
    }
}