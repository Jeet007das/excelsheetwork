const csv = require('csv-parser')
const fs = require('fs')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const getRandomProduct = require('./get_random_product');


//This method is only purpose for reading csv file and creating new csv file with bunch of data
var results = []; 
var products = ["Dal", "Rice", "Clothes","Samsung mobile", "Motorola Phone", "Bike", "Scooty", "Food", "Charger", "Computer", "Laptop", "Cpu"];
createBulkLoad = async() =>{
    console.log("Here we creating our buld load");

    fs.createReadStream(__dirname + '/csv_file/catalog_product.csv')
    .pipe(csv())
    .on('data', (data) => {
        results.push(data)
    })
    .on('end', () => {
        let last_result_obj = {};
        let headers = [];

        results.map((value,key) =>{
            for(i in value){
               let obj ={
                    id:i,
                    title:i
                }
                headers.push(obj)
            }
        });

        if (Object.entries(last_result_obj).length === 0) {
                last_result_obj = results[results.length - 1]
            }
    
       
        for(j=1;j<=2;j++){
            let new_result_obj = {...last_result_obj}
            getRandomProduct(products).then((pro) => {
                new_result_obj.sku = pro;
                results.push(new_result_obj)
                
            }).catch(err =>{
                console.log(err);
            })
          
         }


         

         console.log("writing file"+new Date());
         
         const csvWriter = createCsvWriter({  
            path: __dirname + '/csv_file/new_product_file.csv',
            header: headers
          });

          csvWriter  
             .writeRecords(results)
             .then(()=> console.log('The CSV file was written successfully'+ new Date()), (err) =>{
              console.log("error");
              console.log(err);
             });
            
        
             console.log(results);
    });

}

uploadBulkLoad = async() =>{
    await console.log("This function is used for upload our buld load");
    
}

module.exports ={
    createBulkLoad,
    uploadBulkLoad
};