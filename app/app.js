const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const authRoutes = require('./routes/auth');
const sqliRoutes = require('./routes/sqli');
const xssRoutes = require('./routes/xss');
const uploadRoutes = require('./routes/upload');
const infoRoutes = require('./routes/info');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/', infoRoutes);
app.use('/auth', authRoutes);
app.use('/sqli', sqliRoutes);
app.use('/xss', xssRoutes);
app.use('/upload', uploadRoutes);

app.get('/', (req, res) => {
  res.render('index', { user: req.cookies.user || null });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Vuln app running on ${port}`));
