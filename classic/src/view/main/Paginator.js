Ext.create('MyApp.classic.src.view.main.Paginator', {
    store: 'store.personnel',
    columns: 5,
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'store.personnel',
        dock: 'bottom',
        displayInfo: true
    }]
});