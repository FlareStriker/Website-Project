var app = express();
var server = http.createServer(app);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 110
});


var db = new sqlite3.Database('./database/emails.db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());

db.run('emp(id TEXT, name TEXT)');

app.get ('/', function (req, res){
    res.sendFile(path.join(__dirname,'./website-project/form.html'))
})

app.post('add', function (req,res){
    db.serialize(()=>{
        db.run('emp (id,name) Values(?,?)'[req.body.id, req.body.name], function(err){
            if (err){
                return console.log(err.message);
            }
            console.log("Email added.");
            res.send ("New Email added to database = "+req.body.id + req.body.name);
        }
        );
    });
});

app.post('/view', function(req,res){
    db.serialize(()=>{
      db.each('', [req.body.id], function(err,row){   
        if(err){
          res.send("Error while parsing.");
          return console.error(err.message);
        }
        res.send(` ID: ${row.ID},    Name: ${row.NAME}`);
        console.log("Successful display.");
      });
    });
  });

  app.post('/update', function(req,res){
    db.serialize(()=>{
      db.run('', [req.body.name,req.body.id], function(err){
        if(err){
          res.send("Update Error.");
          return console.error(err.message);
        }
        res.send("Update successful.");
        console.log("Update successful.");
      });
    });
  });

  app.post('/delete', function(req,res){
    db.serialize(()=>{
      db.run('', req.body.id, function(err) {
        if (err) {
          res.send("Deletion Error.");
          return console.error(err.message);
        }
        res.send("Deleted.");
        console.log("Deleted");
      });
    });
  });

  app.get('/close', function(req,res){
    db.close((err) => {
      if (err) {
        res.send('Error closing database.');
        return console.error(err.message);
      }
      console.log('Closing connection.');
      res.send('Connection closed.');
    });
  });

  server.listen(3000,function(){ 
    console.log("Server listening on port: 3000")
});