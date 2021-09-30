const express = require('express');
const router = express.Router();
const xlsxController = require('../controllers/xlsxController');
const uploadFile = require('../controllers/multerController');
const channelsByDate = require('../controllers/querys/general/channelsByDate');
const channelsToday = require('../controllers/querys/general/channelsToday');
const channelsThisWeek = require('../controllers/querys/general/channelsThisWeek');
const channelsThisMonth = require('../controllers/querys/general/channelsThisMonth');
const channelsThisYear = require('../controllers/querys/general/channelsThisYear');
const channelsNegotiationDate = require('../controllers/querys/general/channelsNegotiationDate');
const channelsNegotiationWeek = require('../controllers/querys/general/channelsNegotiationWeek');
const channelsNegotiationToday = require('../controllers/querys/general/channelsNegotiationWeek');
const channelsNegotiationMonth = require('../controllers/querys/general/channelsNegotiationMonth');
const channelsNegotiationYear = require('../controllers/querys/general/channelsNegotiationYear');
const singleChannelByDate = require('../controllers/querys/general/singleChannelByDate');
const singleChannelToday = require('../controllers/querys/general/singleChannelToday');
const singleChannelThisWeek = require('../controllers/querys/general/singleChannelThisWeek');
const singleChannelThisMonth = require('../controllers/querys/general/singleChannelThisMonth');
const singleChannelThisYear = require('../controllers/querys/general/singleChannelThisYear');
const singleChannelNegotiationDate = require('../controllers/querys/general/singleChannelNegotiationDate');
const singleChannelNegotiationToday = require('../controllers/querys/general/singleChannelNegotiationToday');
const singleChannelNegotiationWeek = require('../controllers/querys/general/singleChannelNegotiationWeek');
const singleChannelNegotiationMonth = require('../controllers/querys/general/singleChannelNegotiationMonth');
const singleChannelNegotiationYear = require('../controllers/querys/general/singleChannelNegotiationYear');
const employeesByDate = require('../controllers/querys/detalle/employeesByDate');
const employeesToday = require('../controllers/querys/detalle/employeesToday');
const employeesThisWeek = require('../controllers/querys/detalle/employeesThisWeek');
const employeesThisMonth = require('../controllers/querys/detalle/employeesThisMonth');
const employeesThisYear = require('../controllers/querys/detalle/employeesThisYear');
const employeesNegotiationDate = require('../controllers/querys/detalle/employeesNegotiationDate');
const employeesNegotiationToday = require('../controllers/querys/detalle/employeesNegotiationToday');
const employeesNegotiationWeek = require('../controllers/querys/detalle/employeesNegotiationWeek');
const employeesNegotiationMonth = require('../controllers/querys/detalle/employeesNegotiationMonth');
const employeesNegotiationYear = require('../controllers/querys/detalle/employeesNegotiationYear');
const employeesChannelDate = require('../controllers/querys/detalle/employeesChannelDate');
const employeesChannelToday = require('../controllers/querys/detalle/employeesChannelToday');
const employeesChannelWeek = require('../controllers/querys/detalle/employeesChannelWeek');
const employeesChannelMonth = require('../controllers/querys/detalle/employeesChannelMonth');
const employeesChannelYear = require('../controllers/querys/detalle/employeesChannelYear');
const employeesChannelNegotiationDate = require('../controllers/querys/detalle/employeesChannelNegotiationDate');
const employeesChannelNegotiationToday = require('../controllers/querys/detalle/employeesChannelNegotiationToday');
const employeesChannelNegotiationWeek = require('../controllers/querys/detalle/employeesChannelNegotiationWeek');
const employeesChannelNegotiationMonth = require('../controllers/querys/detalle/employeesChannelNegotiationMonth');
const employeesChannelNegotiationYear = require('../controllers/querys/detalle/employeesChannelNegotiationYear');

module.exports = () => {
    router.post('/upload', uploadFile.single("spreadsheet"), xlsxController.ExceltoJSON);

    /* ------- Endpoints de Query General ------- */
    router.get('/channelsByDate', channelsByDate.get);
    router.get('/channelsToday', channelsToday.get);
    router.get('/channelsThisWeek', channelsThisWeek.get);
    router.get('/channelsThisMonth', channelsThisMonth.get);
    router.get('/channelsThisYear', channelsThisYear.get);
    router.get('/channelsNegotiationDate', channelsNegotiationDate.get);
    router.get('/channelsNegotiationToday', channelsNegotiationToday.get);
    router.get('/channelsNegotiationWeek', channelsNegotiationWeek.get);
    router.get('/channelsNegotiationMonth', channelsNegotiationMonth.get);
    router.get('/channelsNegotiationYear', channelsNegotiationYear.get);

    router.get('/singleChannelByDate', singleChannelByDate.get);
    router.get('/singleChannelToday', singleChannelToday.get);
    router.get('/singleChannelThisWeek', singleChannelThisWeek.get);
    router.get('/singleChannelThisMonth', singleChannelThisMonth.get);
    router.get('/singleChannelThisYear', singleChannelThisYear.get);
    router.get('/singleChannelNegotiationDate', singleChannelNegotiationDate.get);
    router.get('/singleChannelNegotiationToday', singleChannelNegotiationToday.get);
    router.get('/singleChannelNegotiationWeek', singleChannelNegotiationWeek.get);
    router.get('/singleChannelNegotiationMonth',singleChannelNegotiationMonth.get);
    router.get('/singleChannelNegotiationYear', singleChannelNegotiationYear.get);


    /* ------- Endpoints de Query Detalle ------- */
    router.get('/employeesByDate', employeesByDate.get);
    router.get('/employeesToday', employeesToday.get);
    router.get('/employeesThisWeek', employeesThisWeek.get);
    router.get('/employeesThisMonth', employeesThisMonth.get);
    router.get('/employeesThisYear', employeesThisYear.get);
    router.get('/employeesNegotiationDate', employeesNegotiationDate.get);
    router.get('/employeesNegotiationToday', employeesNegotiationToday.get);
    router.get('/employeesNegotiationWeek', employeesNegotiationWeek.get);
    router.get('/employeesNegotiationMonth', employeesNegotiationMonth.get);
    router.get('/employeesNegotiationYear', employeesNegotiationYear.get);

    router.get('/employeesChannelDate', employeesChannelDate.get);
    router.get('/employeesChannelToday', employeesChannelToday.get);
    router.get('/employeesChannelWeek', employeesChannelWeek.get);
    router.get('/employeesChannelMonth', employeesChannelMonth.get);
    router.get('/employeesChannelYear', employeesChannelYear.get);
    router.get('/employeesChannelNegotiationDate', employeesChannelNegotiationDate.get);
    router.get('/employeesChannelNegotiationToday',employeesChannelNegotiationToday.get);
    router.get('/employeesChannelNegotiationWeek', employeesChannelNegotiationWeek.get);
    router.get('/employeesChannelNegotiationMonth',employeesChannelNegotiationMonth.get);
    router.get('/employeesChannelNegotiationYear', employeesChannelNegotiationYear.get);

    return router;
}