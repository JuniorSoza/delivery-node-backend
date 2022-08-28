const db = require('../config/config');

const User = {};

User.getAll = () => {
    const sql = `SELECT * FROM users`;

    return db.manyOrNone(sql);
}

User.create = (user) => {
    const sql = `INSERT INTO users(email,name,lastname,phone,password,image,is_available,session_token,create_at,update_at)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`;

    return db.oneOrNone(sql, [
        user.email,
        user.name,
        user.lastname,
        user.phone,
        user.password,
        user.image,
        user.is_available,
        user.session_token,
        new Date(),
        new Date()
    ]);
}


module.exports = User;