var exec = require('cordova/exec');

var LocalStoragePlugin = {};

LocalStoragePlugin.saveLocalStorage = function(success, fail) {
    exec(success, fail, "LocalStoragePlugin", "save", [localStorage]);
}

LocalStoragePlugin.loadLocalStorage = function(success, fail) {
    exec(success, fail, "LocalStoragePlugin", "load", []);
}
               
LocalStoragePlugin.clear = function(success, fail) {
    exec(success, fail, "LocalStoragePlugin", "clear", []);
}

module.exports = LocalStoragePlugin;
