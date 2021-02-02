$.getJSON("mock.json", function(json) {
    T$('myTablee').newTable().addHeaders(['name', 'lastname', 'age']).addData(json);

    //TODO: 
    // - addPagination(amount)
    // - addHeaderFilter('headerName') or addHeaderFilters()
    // - addSortOn('headerName')

});