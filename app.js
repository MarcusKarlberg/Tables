$.getJSON("mock.json", function(json) {
    T$('myTablee').newTable().addHeaders(['Title', 'Requirement Text', 'Name', 'Legacy Id', 'Path', 'Released Date']).addData(json);

    //TODO: s
    // - add Pagination(amount)
    // - add HeaderFilter('headerName') or addHeaderFilters()
    // - add SortOn('headerName')

});