Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    requires: [
        'MyApp.app.model.UserModel'
    ],

    fields: [
        'id', 'name'
    ],

    data: { items: [
            {id: '{id}', name: '{name}'}

        //     { id: 'Jean Luc', name: "jeanluc.picard@enterprise.com" },
    //     { id: 'Worf',     name: "worf.moghsson@enterprise.com" },
    //     { id: 'Deanna',   name: "deanna.troi@enterprise.com"},
    //     { id: 'Data',     name: "mr.data@enterprise.com" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
