module.exports = (srv) => {

    srv.on('hello', (req, res) => {
        return 'Hey Amigo ' + req.data.name;
    });
}