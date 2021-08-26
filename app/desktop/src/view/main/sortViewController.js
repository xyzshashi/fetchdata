Ext.define('app2.view.main.sortViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sortviewcontroller',
  
    onButtonClick: function (button) {
       if(!Ext.getCmp('emailid').getValue() && Ext.getCmp('emailid').getValue()  == ""){
           Ext.Msg.alert('Please Enter the email')
       }
       if(!Ext.getCmp('passid').getValue() && Ext.getCmp('passid').getValue()  == ""){
        Ext.Msg.alert('Please Enter the password')
    }
      Ext.Msg.alert('Welcome To Extjs')
    }
  
  })
  