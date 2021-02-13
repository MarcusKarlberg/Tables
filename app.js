$.getJSON("mock.json", function(json) {
    T$('testTable')
    .newTable()
    .addHeaders(['Title', 'Requirement Text', 'Name', 'Legacy Id', 'Path', 'Released Date'])
    .addData(json)
    .sortBy('date', 'Released Date', 'ascending')
    .addFilter();

    //TODO:
    // - add text highlight for filter
});
