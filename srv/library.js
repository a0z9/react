const http = require('http');
const os = require('os');
const fs = require('fs');
const mariadb = require('mariadb');
const express = require('express')

console.log("Tiny http Library server starting. Mariadb supported.");
const dock_host = process.env.DOCK_HOST;

var mdb_host = process.env.MDB_HOST;
var mdb_user = process.env.MDB_USER;
var mdb_pass = process.env.MDB_PASS;
var mdb_dbas = process.env.MDB_dbas;
var mdb_port = process.env.MDB_PORT;

//if(typeof mdb_host === 'undefined' || mdb_host === null ) mdb_host="127.0.0.1";
if(typeof mdb_host === 'undefined' || mdb_host === null ) mdb_host="127.0.0.1";
if(typeof mdb_user === 'undefined' || mdb_user === null ) mdb_user="root";
if(typeof mdb_pass === 'undefined' || mdb_pass === null ) mdb_pass="password";
if(typeof mdb_dbas === 'undefined' || mdb_dbas === null ) mdb_dbas="library";
if(typeof mdb_port === 'undefined' || mdb_port === null ) mdb_port="3306";

const pool = mariadb.createPool({
  host: mdb_host, 
  user: mdb_user, 
  password: mdb_pass,
  database: mdb_dbas,
  port: mdb_port
});

var getConnection = function(){
      return new Promise(function(resolve,reject){
        pool.getConnection().then(function(connection){
          resolve(connection);
        }).catch(function(error){
          reject(error);
        });
      });
};

var data_dir  = process.env.APP_DIR;
const dir= '/home';

if(typeof data_dir === 'undefined' || data_dir === null ) data_dir = dir;
data_dir = data_dir +  '/data';

if (!fs.existsSync(data_dir)) fs.mkdirSync(data_dir, { recursive: true });

var handler = function(request, response) {

  const addr = request.connection.remoteAddress;	
  const dt = new Date();
 	
  response.writeHead(200);

  const host_name =  os.hostname();
  const host_ip = request.connection.localAddress;	
  console.log(dt +  "--> request from: " + addr + " to host: " +host_name);

  const content = `${dock_host}: ${dt} --> request from: ${addr} to host: ${host_name}.\n`	

  fs.writeFile(`${data_dir}/wapp.log`, content, { flag: 'a+' }, err => 
	  {  if(err) { console.error(err); return; }  
		  console.log(`++ success write to ${data_dir}/wapp.log`) 

	  })

	var body = 
  `<html>
     <head>
       <title>SITE: ${host_name}</title>
     </head>
     <body>
     <h1>Welcome to docker host: ${dock_host}</h1>
     <h2>Container id: ${host_name}</h2>
     <h2>Container ip: ${host_ip}</h2>
     <div style="color:green;">
       	<h3>Accessed from: ${addr} </h3>
     	<h3>${dt.toLocaleDateString()}</h3>
     </div>
     </body>
     </html>`;

  response.end(body);
};

var cors = require('cors'); // use only in dev
var app = express();

app.use(cors());

app.get('/api/books', async (req, res) => {
    let conn;
    try {
      
        conn = await pool.getConnection();
        var query = "select * from books";
        var rows = await conn.query(query);
        res.send(rows);

    } 
	catch (err) {   throw err;   } 
	finally {
        if (conn) return conn.release();
    }
});

app.get('/', handler);
app.listen(8080);