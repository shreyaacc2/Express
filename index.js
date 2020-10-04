import express from 'express';
// use npm package called esm which allows you to use ES6 modules in node.
// It needs no configuration. With esm you will be able to use export/import in your JS file

const app = express();

const PORT = process.env.PORT || 5000

// app.get( 'route path ',function (req, res){}); normal function
// app.get('route path', (req, res) => {}); arrow function

app.get('/', (req, res) => {
    res.send('<h1>Hello World , This is my first express application</h1>')
});

app.listen(PORT , () => console.log( `server started ${PORT}`));