Tables - a js framework to easily build tables from json data

Uses basic function chaining to create a simple table that is sortable and filterable.

Example: 
```javascript
T$('exTable')
    .newTable()
    .addHeaders(['Title', 'Requirement Text', 'Name', 'Legacy Id', 'Path', 'Released Date'])  //Headers matching json object keys
    .addData(json)
    .sortBy('date', 'Released Date', 'ascending')
    .addFilter();
 ```
