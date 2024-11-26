import { google } from 'googleapis';
import { Request, Response } from 'express';

const getSpreadSheet = async (_req: Request, res: Response) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './keithlocks-79c64f9205ae.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const id = '1QjIUclMIsgALYVO6NEh2feWkzs1PYQTl4fRtUihIm24';
    const range = 'Sheet5!A:C';

    const sheetData = await sheets.spreadsheets.values.get({ spreadsheetId: id, range });
    const rows = sheetData.data.values;
    console.log('Spreadsheet data: ', rows);
  } catch (error) {
    console.log('ERROR: ', error);
  }

  return res.status(200).json({ message: 'Success' });
};

export default { getSpreadSheet };
