Ext.define("s2c.view.Contact",{
	extend:'Ext.form.Panel',
	requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
	],
	xtype:'contactform',
	config:{
		title:'Contact Us',
		iconCls:'user',
		items:[
			{
				xtype:'fieldset',
				title:'Contact Us',
				instructions:'(email is required)',
				items:[
					{
						xtype:'textfield',
						name:'name',
						label:'Name'
					},
					{
						xtype:'emailfield',
						name:'email',
						label:'Email'
					},
					{
						xtype:'textareafield',
						name:'message',
						label:'Message'
					}
				]
			},
			{
				xtype:'button',
				text:'Send',
				ui:'confirm',
				handler:function(){
					//alert('Success, Thank you');
					//alert(this.up('contactform').name);
					Ext.Msg.alert('Form Values', JSON.stringify(this.up('contactform').getValues(), null, 2));
				}
			}
		]
	}

});