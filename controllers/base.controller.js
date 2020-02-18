const sqlite = require('../modules/async-sqlite.module')

exports.all = async function (sql, params = []) {
    await sqlite.open(process.env.SQLITE_DB_PATH);
    const result = await sqlite.all(sql, params);
    await sqlite.close();
    return result;
}

exports.run = async function (sql, params = []) {
    await sqlite.open(process.env.SQLITE_DB_PATH);
    const result = await sqlite.run(sql, params);
    await sqlite.close();
    return result;
}