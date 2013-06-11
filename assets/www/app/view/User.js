Ext.define("s2c.view.User",{
	extend:'Ext.navigation.View',
	//requires:['Ext.dataview.List'],
	xtype:'userpanel',
	config:{
		title:'Users',
		iconCls:'star',
		items:{
			xtype:'list',
			itemTpl:'{name} Email: {email}',
			autoLoad: true,
			store:{
				fields:['name','email','message'],
				data : loadDataFromParse()
			}
		}
	}

});