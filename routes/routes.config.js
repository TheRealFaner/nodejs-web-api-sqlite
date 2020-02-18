const db = require('../controllers/base.controller');
db.dbPath = process.env.SQLITE_DB_PATH;

module.exports = function (app) {
app.route('/hello')
    .get(async (req, res) => {
        res.json( 
            await db.all('SELECT DISTINCT Name name FROM playlists ORDER BY name')
        );
    });
}