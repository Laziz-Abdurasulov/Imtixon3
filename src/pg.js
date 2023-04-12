const pg = require("pg");
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    port: 5432,
    password: '11',
    database: 'imtixon3',
    host: 'localhost',
});

async function fetch(queryString, ...params) {
    const cleint = await pool.connect();
    try {
        const {
            rows: [data],
        } = await cleint.query(queryString, params.length ? params : null);
        return data;
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log("data");
    }
}
async function fetchAll(queryString) {
    const cleint = await pool.connect();
    try {
        const { rows } = await cleint.query(queryString);
        return rows;
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log("datas");
    }
}




module.exports = {
    fetch,
    fetchAll
};
