Ext.define("s2c.view.Home",{
	extend:'Ext.Panel',
	xtype:'homepanel',
	config:{
		title:'Home',
		iconCls:'home',
		cls:'home',
		scrollable:true,
		styleHtmlContent:true,
		html:['Search2Close',' Website'].join("")
	}

});