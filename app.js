var express = require('express')
var multer  = require('multer')
var path = require('path');
var id = require('shortid');
const send_receipt = require('./receipt');

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
app.use(express.static('pages/'));
app.use(express.static('resources/'))
app.get('/', (req, res) => {
    res.render(path.join(__dirname, "/pages/home.ejs"));
})

app.post('/receipt-upload', upload.single('profile-file'), function (req, res, next) {
  // req.file is the `profile-file` file
  // req.body will hold the text fields, if there were any
  //console.log(path.join(__dirname, `/uploads/${req.file.filename}`));
  send_receipt(path.join(__dirname, `/uploads/${req.file.filename}`));
  console.log(JSON.stringify(req.file))
  var response = '<a href="/">Home</a><br>'
  response += "Files uploaded successfully.<br>"
  response += `<img src="${req.file.path}" /><br>`
  return res.send(response)
})
  
app.listen(port,() => console.log(`Server running on port ${port}!`))