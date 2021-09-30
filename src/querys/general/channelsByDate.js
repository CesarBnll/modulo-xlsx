const db = require('../../config/dbConnection');

const get = async (req, res) => {
    let initDate = req.query.initDate;
    let endDate = req.query.endDate;
    console.log(initDate);
    try {
        const store = `
        SET @initDate = ?;
        SET @endDate = ?;
        CALL channelsByDate(@initDate,@endDate)
        `; 
        const doQuery = (query) => {
            return new Promise((resolve, reject) => {
                db.query(store, [initDate, endDate], (error, results, fields) => {
                    if(error) return reject(error);
                    return resolve(results);
                });
            }); 
        }    
        const queryResult = await doQuery();
        let index = queryResult.length - 2;
        res.json(queryResult[index]);
    } catch (error) {
        throw error;
    }
    return;
}

module.exports = { get };