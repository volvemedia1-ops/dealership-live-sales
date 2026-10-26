const fs = require('fs');
const path = require('path');

const appDir = path.resolve(__dirname);
const vbsLauncher = path.join(appDir, 'launch_cockpit_silent.vbs');
const batLauncher = path.join(appDir, 'launch_cockpit.bat');

const userProfile = process.env.USERPROFILE || 'C:\\Users\\TEACHER';
const startupDir = path.join(userProfile, 'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup');

// Resolve Desktop directory (handling OneDrive Desktop redirection)
let desktopDir = path.join(userProfile, 'Desktop');
if (!fs.existsSync(desktopDir) && fs.existsSync(path.join(userProfile, 'OneDrive', 'Desktop'))) {
  desktopDir = path.join(userProfile, 'OneDrive', 'Desktop');
}

const oneDriveDir = 'C:\\Users\\TEACHER\\OneDrive\\Client Acquisition\\portal\\cockpit';

console.log('=== Installing Dealership Sales Cockpit Auto-Start ===');
console.log('Cockpit Directory:', appDir);
console.log('Startup Directory:', startupDir);
console.log('Desktop Directory:', desktopDir);

// 1. Ensure Startup directory exists
if (!fs.existsSync(startupDir)) {
  fs.mkdirSync(startupDir, { recursive: true });
}

// 2. Install Startup Runner (.vbs runs natively on Windows startup with wscript.exe)
const startupVbsTarget = path.join(startupDir, 'SalesCockpitAutoStart.vbs');
fs.copyFileSync(vbsLauncher, startupVbsTarget);
console.log('[SUCCESS] Installed Startup Runner:', startupVbsTarget);

// 3. Create Desktop Launchers
if (fs.existsSync(desktopDir)) {
  // 3a. Silent VBS launcher (runs server silently in background & opens browser)
  const desktopVbsTarget = path.join(desktopDir, 'Launch Sales Cockpit.vbs');
  fs.copyFileSync(vbsLauncher, desktopVbsTarget);
  console.log('[SUCCESS] Created Desktop Silent Launcher:', desktopVbsTarget);

  // 3b. Batch launcher (useful if user wants to see console status)
  const desktopBatTarget = path.join(desktopDir, 'Launch Sales Cockpit (Debug).bat');
  fs.copyFileSync(batLauncher, desktopBatTarget);
  console.log('[SUCCESS] Created Desktop Debug Launcher:', desktopBatTarget);

  // 3c. Direct URL shortcut
  const desktopUrlTarget = path.join(desktopDir, 'Sales Cockpit Web.url');
  const urlContent = `[InternetShortcut]\r\nURL=http://localhost:8000/index.html\r\n`;
  fs.writeFileSync(desktopUrlTarget, urlContent, 'utf8');
  console.log('[SUCCESS] Created Desktop Web Link:', desktopUrlTarget);
} else {
  console.warn('[WARN] Desktop directory not found, skipping desktop shortcuts.');
}

// 4. Mirror launcher files to OneDrive backup if available
try {
  if (fs.existsSync(oneDriveDir)) {
    fs.copyFileSync(vbsLauncher, path.join(oneDriveDir, 'launch_cockpit_silent.vbs'));
    fs.copyFileSync(batLauncher, path.join(oneDriveDir, 'launch_cockpit.bat'));
    console.log('[SUCCESS] Mirrored launcher files to OneDrive backup.');
  }
} catch (err) {
  console.log('[INFO] OneDrive mirror note:', err.message);
}

console.log('\n=== Installation Complete ===');
console.log('The Dealership Sales Cockpit is now fully configured to start automatically on boot/login.');
