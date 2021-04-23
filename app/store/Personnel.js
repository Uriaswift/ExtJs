Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',
    autoLoad: {start: 0, limit: 5},
    pageSize: 5,
    remoteSort: true,
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
            totalProperty: 'TotalCount',
            rootProperty: 'Users'
        }
    }
});