var express = require('express')
var multer  = require('multer')
var path = require('path');
var id = require('shortid');

var port = 3000;

var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${id.generate()}.png`);
    }
})
var upload = multer({ storage: storage })

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello World!');
  
=======
    res.render(path.join(__dirname, "/pages/home.ejs"));
>>>>>>> 936d427d1b2485be69da1c66eecd5838529d7e2a
})

app.post('/receipt-upload', upload.single('profile-file'), function (req, res, next) {
  // req.file is the `profile-file` file
  // req.body will hold the text fields, if there were any
  console.log(JSON.stringify(req.file))
  var response = '<a href="/">Home</a><br>'
  response += "Files uploaded successfully.<br>"
  response += `<img src="${req.file.path}" /><br>`
  return res.send(response)
})
   
app.listen(port,() => console.log(`Server running on port ${port}!`))