const pool = require("../config/mssql.db");
//const pool = require("../config/mysql.db");

exports.create = async ({name, status} = data) => {
    let sqlStatement = `INSERT INTO [dbo].[User] ([name],[status]) OUTPUT Inserted.Id VALUES ('${name}',${status});`;
    const results = await pool.query(sqlStatement);

    pool.release();
    return results.recordset[0].Id;
};

exports.read = async () => {
    let sqlStatement = `SELECT id, name, status FROM [User];`;
    const results = await pool.query(sqlStatement);

    pool.release();
    return results.recordset;
};

exports.update = async (id, { name, status } = data) => {
    let sqlStatement = `UPDATE [User] SET name = '${name}', status = ${status} OUTPUT Inserted.Id WHERE id = ${id};`;
    const results = await pool.query(sqlStatement);

    pool.release();
    return results.recordset[0].Id;
};

exports.delete = async (id) => {
    let sqlStatement = `DELETE FROM [User] WHERE id = ${id}`;
    const results = await pool.query(sqlStatement);

    pool.release();
    return results.rowsAffected;
};



