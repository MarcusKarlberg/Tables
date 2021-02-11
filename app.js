$.getJSON("mock.json", function(json) {
    T$('myTablee').newTable().addHeaders(['Name', 'Legacy Id', 'Country']).addData(json);

    //TODO: s
    // - add Pagination(amount)
    // - add HeaderFilter('headerName') or addHeaderFilters()
    // - add SortOn('headerName')

});