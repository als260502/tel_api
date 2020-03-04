const express = require('express');
const cors = require('cors');

const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes');

const ErrorMiddleware = require('./app/middlewares/ErrorMiddleware');

require('dotenv').config();
require('./database');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

app.use(ErrorMiddleware.notFound);
app.use(ErrorMiddleware.errorHandler);

const port = process.env.PORT || 3334;
app.listen(port, () => {
  console.log(`Server is listening on port - ${port}`);
});
