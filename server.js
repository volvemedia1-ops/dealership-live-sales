/**
 * Zero-dependency static file server with Script Saving API
 * Run: node server.js
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];

  // API Endpoint: Save modified script directly to script_data.js on disk
  if (req.method === 'POST' && reqPath === '/api/save-script') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const scriptFilePath = path.join(__dirname, 'script_data.js');

        const fileContent = `/**
 * Master Script Data for Dealership Live Sales Cockpit
 * Saved automatically from Cockpit In-Browser Editor
 */

const SCRIPT_DATA = ${JSON.stringify(payload, null, 2)};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SCRIPT_DATA;
}
`;
        fs.writeFileSync(scriptFilePath, fileContent, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Saved successfully to script_data.js' }));
        console.log(`[INFO] script_data.js successfully updated via browser editor.`);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
        console.error(`[ERROR] Failed to save script_data.js:`, err);
      }
    });
    return;
  }

  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  const filePath = path.join(__dirname, reqPath);

  // Security: stay inside current directory
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`  DEALERSHIP LIVE SALES COCKPIT ACTIVE`);
  console.log(`  Local URL: http://localhost:${PORT}/index.html`);
  console.log(`  Live Save API: Active on /api/save-script`);
  console.log(`  Press Ctrl+C to terminate`);
  console.log(`======================================================\n`);
});
