const csvUrl = 'word_count.csv';
const dataList = [];

fetch(csvUrl)
  .then(response => response.text())
  .then(data => {
    const parsedData = csvParse(data, {
      columns: true,
      skip_empty_lines: true
    });
    dataList.push(...parsedData);
    console.log(dataList);
  })
  .catch(error => console.error(error));
