Ext.define("s2c.view.List",{
	extend:'Ext.navigation.View',
	//requires:['Ext.dataview.List'],
	xtype:'listpanel',
	config:{
		title:'List',
		iconCls:'refresh',
		items:{
			xtype:'list',
			itemTpl:'{name} Email: {email}',
			store:{
				fields:['name','email','message'],
				data : userJsonArray
			}
		}
	}

});