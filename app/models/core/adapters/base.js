Balanced.BaseAdapter = Ember.Object.extend({
    init: function () {
        if (this.initAdapter) {
            this.initAdapter();
        }
    },

    get: function (type, uri, success, error) {
        Ember.assert("Your adapter should override get", false);
    },

    create: function (type, uri, data, success, error) {
        Ember.assert("Your adapter should override create", false);
    },

    update: function (type, uri, data, success, error) {
        Ember.assert("Your adapter should override update", false);
    },

    delete: function (type, uri, success, error) {
        Ember.assert("Your adapter should override delete", false);
    }
});
