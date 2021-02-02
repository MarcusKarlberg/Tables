$.getJSON("mock.json", function(json) {
    //var table = T$('My First Table').newTable(['name', 'lastname', 'age'], json);
    //console.log(table);

    //TODO: make it possible to chain like this
    T$('myTablee').newTable().addHeaders(['name', 'lastname', 'age']).addData(json);


    //FEATURES: 
    // - addPagination(amount)
    // - addHeaderFilter('headerName') or addHeaderFilters()
    // - addSortOn('headerName')

});