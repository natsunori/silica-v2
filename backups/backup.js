const { userDir } = require('../config.json'), 
fs = require('fs'), location = './Backups/';
const moment = require('moment');
const interval = 900000 / 1;

module.exports = {
    execute(client){
        console.log(`\x1B[96mSilica started sucsessfully keep alive log in ${(interval / 60) / 1000} minutes.\x1B[0m`)
        setInterval( function() {
            let folder = `${moment().format('MMDDYY')}`;
            let file = `${moment().format('HHmm')}`;
            fs.access(location + folder, function(error) {
                if (error) {
                    //fs.mkdirSync(location + folder)
                    console.log(`\x1B[92m| Online:    | \x1b[96mSilica is still awake!               \x1B[92m | ${moment(Date.now())}\x1B[0m`)
                } else {
                    console.log(`\x1B[92mBackup: \x1b[96mDate\x1B[0m ${folder} \x1b[96mTime\x1B[0m ${file} \x1B[92m${moment(Date.now())}\x1B[0m`)
                }
            })
        } , interval)  
    }
}