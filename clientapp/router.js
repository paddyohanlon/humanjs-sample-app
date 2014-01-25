/*global app, me, $*/
var Backbone = require('backbone');
var HomePage = require('./pages/home');
var CollectionDemo = require('./pages/collectionDemo');
var InfoPage = require('./pages/info');
var BudgetPage = require('./pages/budget');


module.exports = Backbone.Router.extend({
    routes: {
        '': 'home',
        'collections': 'collectionDemo',
        'info': 'info',
        'budget': 'budget'
    },

    // ------- ROUTE HANDLERS ---------
    home: function () {
        app.renderPage(new HomePage({
            model: me
        }));
    },

    collectionDemo: function () {
        app.renderPage(new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    info: function () {
        app.renderPage(new InfoPage({
            model: me
        }));
    },

    budget: function () {
        app.renderPage(new BudgetPage({
            model: me
        }));
    }
});
