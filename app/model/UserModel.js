Ext.define('MyApp.app.model.UserModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],

    proxy: {
        type: 'rest',
        url: 'https://retoolapi.dev/bXlSxv/andrew/',
        extraParams: {
            id: '{id}',
            name: '{name}'
        }
    }
});