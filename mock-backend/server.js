const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Məsələn dilə görə tərcümə qaytaran endpoint
server.get('/translations/:lang', (req, res) => {
    const lang = req.params.lang;
    const data = router.db.get('translations').value();
    res.json(data[lang] || {});
});

server.use(router);
server.listen(5000, () => {
    console.log('Mock API is running on http://localhost:5000');
});
