; (function (global, $) {
    'use strict'

    //creating a 'new' object so user don't have to
    var Tables = function (name) {
        return new Tables.init(name);
    }

    // hidden within the scope of the IIFE and never directly accessible
    var hiddenVariables = [];

    function _countColumns(json) {
        var max = 0;
        for (var i = 0; i < json.length; i++) {
            var numProperties = Object.keys(json[i]).length;
            if (numProperties > max) {
                max = numProperties;
            }
        }
        return max;
    }

    function _createEmptyTable() {
        var table = document.createElement('table');
        jQuery('body').append(table);

        return table;
    }

    // prototype holds methods (to save memory space)
    Tables.prototype = {

        // 'this' refers to the calling object at execution time
        //table headers array must match jsonData object keys
        newTable: function () {
            this.table = _createEmptyTable();

            return this;
        },

        addHeaders(headers) {
            this.table.headers = headers;
            var tr = $('<tr>');

            for(var i = 0; i < headers.length; i++) {
                $('<th>' + headers[i] + '</td>').appendTo(tr);
                tr.appendTo(this.table);
            }

            return this;
        },

        addData(json) {
            var numRows = json.length;
            var headers = this.table.headers;
            var numCols = headers.length;

            for (var r = 1; r < numRows; r++) {
                var tr = $('<tr>');
                for (var c = 0; c < numCols; c++) {
                    var headerName = headers[c];
                    var jsonValue = json[r][headerName];
                    console.log(jsonValue)
                    $('<td>' + jsonValue + '</td>').appendTo(tr);
                }
                tr.appendTo(this.table);
            }
            return this;
        }

    };

    Tables.init = function (name) {
        var self = this;
        self.name = name || 'no-name';
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Tables.init.prototype = Tables.prototype;

    // attach Tables to the global object, and provide a shorthand '$T'.
    global.Tables = global.T$ = Tables;

}(window, jQuery));