const fs = require('fs');
const path = require('path');

const userProfile = process.env.USERPROFILE || 'C:\\Users\\TEACHER';
const startupDir = path.join(userProfile, 'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup');

let desktopDir = path.join(userProfile, 'Desktop');
if (!fs.existsSync(desktopDir) && fs.existsSync(path.join(userProfile, 'OneDrive', 'Desktop'))) {
  desktopDir = path.join(userProfile, 'OneDrive', 'Desktop');
}

const filesToRemove = [
  path.join(startupDir, 'SalesCockpitAutoStart.vbs'),
  path.join(startupDir, 'SalesCockpitAutoStart.lnk'),
  path.join(desktopDir, 'Launch Sales Cockpit.vbs'),
  path.join(desktopDir, 'Launch Sales Cockpit (Debug).bat'),
  path.join(desktopDir, 'Sales Cockpit Web.url'),
  path.join(desktopDir, 'Sales Cockpit.lnk')
];

filesToRemove.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      fs.unlinkSync(file);
      console.log('[REMOVED]', file);
    } catch (e) {
      console.warn('[WARN] Could not remove:', file, e.message);
    }
  }
});

console.log('=== Auto-Start Uninstalled Successfully ===');
