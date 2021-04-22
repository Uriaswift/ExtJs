Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    pageSize: 5,
    requires: [
        'MyApp.app.model.UserModel',
    ],
    type: 'ajax',
    model: 'MyApp.app.model.UserModel',

    proxy: {
        type: 'rest',
        url: 'https://retoolapi.dev/0TUXls/extjs',
        reader: {
            type: 'json',
            totalProperty: 'total',
            rootProperty: 'users'
        }
    },
    autoLoad: true

});
