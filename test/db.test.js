const test = require('tape');
const insertData = require('../backend-src/query/insert.js');
const getData = require('../backend-src/query/selectAll.js');
const dbconnection = require('../Database/dbconnection.js');

test("should insert data into data base",function (t) {
  insertData('fake','fake','fake','fake',function (err,result) {
    t.equal(err,null,'there are no erros when insert data')
    t.deepEqual(result,[],'should insert data successfuly')
    t.end()
  })
})

test("should get all data from data base",function (t) {
  getData(function (err,data) {
    t.equal(err,null,'there are no erros when get data')
    t.equal(data.length > 0,true,'should gat data successfuly')
    t.end()
  })
})
