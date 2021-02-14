$.getJSON("mock.json", function (json) {
    T$('testTable')
        .newTable('#table1')
        .addHeaders(['Title', 'Requirement Text', 'Name', 'Legacy Id', 'Path', 'Released Date'])
        .addData(json)
        .sortBy('alphabetic', 'Path', 'ascending')
        .addFilter();

    T$('testTable2')
        .newTable('#table2')
        .addHeaders(['Name', 'Legacy Id', 'Released Date'])
        .addData(json)
        .sortBy('date', 'Released Date', 'ascending')
        .addFilter();

    //TODO:
    // - dynamically generate html input for filter
});
