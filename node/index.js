const express = require('express')
const app = express()
const port = 3000
const config ={
  host:'mysql',
  user:'root',
  password:'root',
  database:'nodedb'  
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)


app.get('/', (req, res) => {
  
  try{
    var sql=`CREATE DATABASE IF NOT EXISTS nodedb`
    connection.query(sql)


    sql=`CREATE TABLE IF NOT EXISTS PEOPLE (NOME VARCHAR(200))`
    connection.query(sql)
    
    sql=`insert into PEOPLE(NOME) values ('Wesley')`
    connection.query(sql)

    sql=`select NOME from PEOPLE`
    var nome='';
    connection.query(sql,function (err, result, fields) {
      if (err) throw err;
      console.log(result);

      result.forEach(element => {
        console.log(element);        
        nome += JSON.stringify(element) + '</br>'
      });

      res.send('<h1>Full Cycle Rocks!</h1></br>  ' + nome)

    });     

    connection.end
    
  }
  catch(ex) {
      console.log("EXCEPTION : " + ex);
      res.send('"EXCEPTION : " + ex' );
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})