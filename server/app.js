const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const xssClean = require('xss-clean');
const swaggerUI = require('swagger-ui-express');

const errorHandling = require('./utils/errorController');
const morgan = require('morgan');
const app = express();

if (process.env.NODE_ENV === 'development') {
    const specs = require('./swaggers/options');
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
    app.use(morgan('dev'));
}
app.use(cors());
app.use(helmet());
app.use(xssClean());

app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb' }));
app.use('/api/v1', require('./api/v1/routes'));

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'failed',
        message: `Can't find ${
            req?.orginalUrl ? req?.orginalUrl : 'request'
        } on this server`,
    });
});
app.use(errorHandling);

module.exports = app;
