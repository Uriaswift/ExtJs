Ext.define('MyApp.view.main.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',
    controller: 'form-login',
    title: 'Login',

    bodyPadding: 20,
    width: 320,
    autoSize: true,

    items: [{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'User ID',
        name: 'user',
        placeholder: 'user id'
    }, {
        //xtype: 'passwordfield',
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Password',
        name: 'pass',
        placeholder: 'password'
    }, {
        xtype: 'checkbox',
        boxLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: [{
        text: 'Login',
        handler: 'onLogin'
    }]
});