Ext.define('app2.view.main.sortView', {
    extend: 'Ext.Container',
    xtype: 'sortview',
    controller: 'sortviewcontroller',
    viewModel: {
      type: ''
    },
    items: [
      {
        xtype: 'textfield',
        id:'emailid',
  //      html: '<a style="font-size:24px" target="_blank" href="https://docs-devel.sencha.com/extjs/7.0.0-CE/guides/quick_start/What_You_Will_Be_Coding.html">Quick Start Tutorial Here</a><p>'
        label:'Email'

      },
      {
        xtype: 'textfield',
        id:'passid',
        label:'Password'
      },
      {
        xtype: 'button',
        text: 'Login',
        handler: 'onButtonClick'
      }
    ]
  })
  