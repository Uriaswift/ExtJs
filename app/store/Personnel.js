Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone', 'adress'
    ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", adress: "Sesam st" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", adress: "Sesam st" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", adress: "Sesam st" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", adress: "Sesam st" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", adress: "Sesam st" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", adress: "Sesam st" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", adress: "Sesam st" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
