'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = {
    	"NODEMAILER": {
    		"from": process.env.NODEMAILER_FROM,
	    	"password": process.env.NODEMAILER_PASSWORD
    	}
    }
} else {
    module.exports = require('./development.js');
}




