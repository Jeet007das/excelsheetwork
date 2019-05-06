const express = require('express');
const app = express();

const cors = require('cors');

const csv = require('csv-parser')
const fs = require('fs')


app.use(cors());

let csv_file = __dirname + '/src/csv_file';
console.log(csv_file);

let results = [];





fs.createReadStream(__dirname + '/src/csv_file/geographic.csv')
    .pipe(csv())
    .on('data', (data) => {
        data.id
        results.push(data)
    })
    .on('end', () => {
        let last_result_obj = {};
        // for (i = results.length - 1; i >= 0; i--) {
            if (Object.entries(last_result_obj).length === 0) {
                last_result_obj = results[results.length - 1]
            }
        // }

        for(j=1;j<=5;j++){
            console.log(j);
            console.log(typeof last_result_obj.id);
            console.log(parseInt(last_result_obj.id)+j);
            console.log(last_result_obj);
            
            
            
            // last_result_obj.id+j;
            // results.push(last_result_obj)
         }



        console.log(results);
    });





// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, async () => {
    console.log('Server listening on port ' + port);
});