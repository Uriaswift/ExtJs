/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    columns: [
        { text: 'Id', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'Name', flex: 1 },
        { text: 'Email', dataIndex: 'Email', flex: 1 },
        { text: 'Phone', dataIndex: 'Phone', flex: 1 },
        { text: 'Avatar', dataIndex: 'Avatar',
            renderer:function(v) {
                return '<img src="'+ v.toString() +'"/>';
            },
            flex: 1 },
    ],
    listeners: {
        select: 'onItemSelected'
    }
});
