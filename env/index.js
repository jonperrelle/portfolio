'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = {
    	"NODEMAILER": {
    		"from": process.env.NODERMAILER_FROM,
	    	"password": process.env.NODERMAILER_PASSWORD
    	}
    }
} else {
    module.exports = require('./development.js');
}




