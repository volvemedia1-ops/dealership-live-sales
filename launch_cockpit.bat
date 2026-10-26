@echo off
title Dealership Sales Cockpit Launcher
cd /d "%~dp0"

echo [COCKPIT] Checking if server is already active on port 8000...
netstat -ano | findstr /R /C:":8000.*LISTENING" >nul 2>&1
if errorlevel 1 (
    echo [COCKPIT] Starting background HTTP server...
    start "" /b node server.js
    timeout /t 2 /nobreak >nul
) else (
    echo [COCKPIT] Server is already running.
)

echo [COCKPIT] Opening browser...
start "" "http://localhost:8000/index.html"
