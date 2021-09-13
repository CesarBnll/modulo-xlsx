const express = require('express');
const router = express.Router();
const xlsxController = require('../controllers/xlsxController');
const uploadFile = require('../controllers/multerController');
const channels = require('../controllers/getChannels');
const employees = require('../controllers/getEmployees');
const channelsToday = require('../controllers/channelsToday');
const channelsThisMonth = require('../controllers/channelsThisMonth');
const channelsThisYear = require('../controllers/channelsThisYear');
const channelsByDate = require('../controllers/channelsByDate');
const singleChannel = require('../controllers/singleChannel');
const singleChannelToday = require('../controllers/singleChannelToday');
const singleChannelMonth = require('../controllers/singleChannelMonth');
const singleChannelYear = require('../controllers/singleChannelYear');
const singleChannelByDate = require('../controllers/singleChannelByDate');

module.exports = () => {
    router.post('/upload', uploadFile.single("spreadsheet"), xlsxController.ExceltoJSON);
    router.get('/channels', channels.get);
    router.get('/employees', employees.get);
    router.get('/channelsToday', channelsToday.get);
    router.get('/channelsThisMonth', channelsThisMonth.get);
    router.get('/channelsThisYear', channelsThisYear.get);
    router.get('/channelsByDate', channelsByDate.get);
    router.get('/singleChannel', singleChannel.get);
    router.get('/singleChannelToday', singleChannelToday.get);
    router.get('/singleChannelMonth', singleChannelMonth.get);
    router.get('/singleChannelYear', singleChannelYear.get);
    router.get('/singleChannelByDate', singleChannelByDate.get);
    return router;
}