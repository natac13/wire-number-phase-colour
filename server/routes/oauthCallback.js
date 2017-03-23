import express from 'express';

const router = express.Router();

const google = require('googleapis');
import oauthClient from '../auth/googleClient.js';

router.get('/', (req, res, next) => {
  console.log(req.query);

  if (req.query.code) {
    oauthClient.getToken(req.query.code, (err, tokens) => {
      if (!err) { oauthClient.setCredentials(tokens); }
      console.log('tokens')
      console.log(tokens);
      const sheets = google.sheets('v4');
      sheets.spreadsheets.values.get({
        spreadsheetId: '1Z3AL3pltNONFAaQrIzzsTA1t4-6kg3MLZI_Qd50FbSw',
        range: 'TFSA!A4:G',
      }, (err, response) => {
        console.log('resspon')
        console.log(response);
        res.json(response);
      });
    });
  }

});

export default router;
