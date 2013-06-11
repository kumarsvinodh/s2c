Ext.define('s2c.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',
	items:[
		{
		  xtype:'homepanel'
		},
		{
			xtype:'userpanel'
		},
		{
			xtype:'contactform'
		},
		{
			xtype:'listpanel'
		}
	]

        
    }
});
