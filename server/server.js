const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });

const app = require('./app');

const http = require('http').createServer(app);
const port = process.env?.PORT || 3000;
if (process.env.NODE_ENV === 'development') {
    console.log('\n-------------------DOCUMENTATION-----------------------');
    console.log(`|  * Link: http://localhost:${port}/api-docs             |`);
    console.log(`|  * YAML: http://localhost:${port}/api-docs/toYAML      |`);
    console.log(`|  * JSON: http://localhost:${port}/api-docs/toJSON      |`);
    console.log('-------------------------------------------------------');
}
http.listen(port, () => {
    console.log(
        `App is running  on port ${port}, NODE_ENV: ${process.env?.NODE_ENV}\n`
    );
});
