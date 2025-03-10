const fs = require("fs");
const csvParser = require("csv-parser");

const result = [];

fs.createReadStream("./Cereal.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", () => {
      for(let i = 1; i < result.length; i++){
        /* Dont even bother to read this, just know it works */
        /* da = datArray */
        const da = result[i][Object.keys(result[i])[0]].split(";")
        
        fetch("http://localhost:3000/api/testing", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: da }),
        })
    }
  });