import packageInfo from '../../package.json';

export const environment = {
  //Development Environment on 26-11-2024
  appVersion: packageInfo.version,
  production: false,
  apiUrl: 'https://localhost:7136/api/',
  reportUrl:'https://localhost:7136/',
  uploadFileUrl:'D:/project/Inventory-Front/src/assets/images/uploadedImages'



//Production Environment on 26-11-2024
  // appVersion: packageInfo.version,
  // production: true,
  // apiUrl: 'https://localhost:7136/api',
  // reportUrl:'https://localhost:7136/',
  // uploadFileUrl:'D:/project/Inventory-Front/src/assets/images/uploadedImages'
};


