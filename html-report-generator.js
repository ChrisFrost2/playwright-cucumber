import { readFileSync } from 'fs';
import { generate } from 'multiple-cucumber-html-reporter';
import { basename } from 'path';
const projectName = basename('reports');
const reportGenerationTime = new Date().toISOString();
const windowSize = '1366x768';

let serverUrl = 'https://www.saucedemo.com/';

generate({
  reportName: 'Quote e2e report',
  jsonDir: 'reports',
  reportPath: 'reports/html',
  openReportInBrowser: false,
  disableLog: true,
  displayDuration: true,
  displayReportTime: true,
  durationInMS: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: `${projectName}` },
      { label: 'Report Generation Time', value: `${reportGenerationTime}` },
      { label: 'Url', value: `${serverUrl}` },
      { label: 'Window size', value: `${windowSize}` },
    ],
  },
});