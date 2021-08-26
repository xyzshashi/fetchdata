Ext.define('app2.view.main.MainView', {
extend: 'Ext.dataview.DataView',
  xtype: 'mainview',
 // extend: 'Ext.view.View',
  store: {
      model: 'app2.view.main.MainViewModel',
      autoLoad: true
  },
  itemTpl: '<img src="{image}">',
  cls: 'movies',
  itemCls: 'movie',
  overItemCls: 'over',
  selectedItemCls: 'selected',
  emptyText: 'An Internet connection is needed to load titles from iTunes.'
 
 
})
