@echo off
title Dealership Live Sales Cockpit
cd /d "%~dp0"
echo Starting local cockpit server on http://localhost:8000...
start /b node server.js
timeout /t 1 /nobreak >nul
echo Launching Microsoft Edge in App Mode...
start msedge --app=http://localhost:8000/index.html
echo Cockpit running! Keep this window open during your call.
pause
