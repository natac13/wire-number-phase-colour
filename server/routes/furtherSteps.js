import express from 'express';
import google from 'googleapis';
import moment from 'moment';

const router = express.Router();

router.post('/create', (req, res, next) => {
  const { stockTicker } = req.body;

  const sheets = google.sheets('v4');
  const request = {
    resource: {
      properties: { title: `FurtherSteps TEST - ${stockTicker}` }, // need to include date
    },
  };
  sheets.spreadsheets.create(request, (err, response) => {
    if (err) {
      console.log(err);
      return;
    }

    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  });
  // sheets.spreadsheets.sheets.copyTo(request, (err, response) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }

  //   // TODO: Change code below to process the `response` object:
  //   console.log(JSON.stringify(response, null, 2));
  // });
  res.json({})
});

export default router;