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
			autoLoad : true,
			store:{
				autoLoad : true,
				fields:['name','email','message'],
				proxy: {
					type:'rest',
					//url:'https://qC6FVY3NRPZUpqU2IppaJj2i2ySdd3xAIABo4PIM:javascript-key=aRXbXOj2R3PsF7mnGQPNY2z8zIKKzmmhXGxcWzzo@api.parse.com/1/classes/UserItem',
					url:'https://api.parse.com/1/classes/UserItem',
					noCache: false,  
					format: 'json',
					headers: {'Accept' : 'application/json'	,
						'X-Parse-Application-Id':'qC6FVY3NRPZUpqU2IppaJj2i2ySdd3xAIABo4PIM',
						'X-Parse-REST-API-Key':'RwCOlcdJGioTrZiwqPkpJbSPCoSL4Rer9lm05jDp'
					},					
					reader: {
						type:'json',
						rootProperty:'results'
					}            
				}
			}
		}
	}

});