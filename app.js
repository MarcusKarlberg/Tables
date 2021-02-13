$.getJSON("mock.json", function(json) {
    T$('myTablee')
    .newTable()
    .addHeaders(['Title', 'Requirement Text', 'Name', 'Legacy Id', 'Path', 'Released Date'])
    .addData(json)
    .sortBy('Path', 'ascending');

    //TODO: s
    // - improve sortBy with extra param to sort numeric and date;
    // - add filter

});