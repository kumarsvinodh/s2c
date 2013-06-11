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
					//Ext.Msg.alert('Form Values', JSON.stringify(this.up('contactform').getValues(), null, 2));
					var userFormJson=this.up('contactform').getValues();
					//alert(this.up('contactform').getValues().name);
					Parse.initialize("qC6FVY3NRPZUpqU2IppaJj2i2ySdd3xAIABo4PIM", "aRXbXOj2R3PsF7mnGQPNY2z8zIKKzmmhXGxcWzzo");
					var UserItem=Parse.Object.extend('UserItem');
					var userItem = new UserItem();
					userItem.set("name",userFormJson.name);
					userItem.set("email",userFormJson.email);
					userItem.set("message",userFormJson.message);
					userItem.save(null,{
						success:function(item){
							alert('Hello  '+item.get('name')+', You data sent successfully.');
						},
						error:function(gameScore,error){
							alert('Error while sending your data. Please contact administrator');
						}
					});
					//alert(userItem);
					//Ext.Msg.alert("hi....");
				}
			}
		]
	}

});