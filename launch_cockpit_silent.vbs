' Dealership Live Sales Cockpit - Silent Background Launcher
' Starts the Node.js Cockpit HTTP server silently (no console window) and opens the teleprompter in the default browser.

Dim WshShell, cockpitDir, nRet
Set WshShell = CreateObject("WScript.Shell")

cockpitDir = "C:\Users\TEACHER\Documents\antigravity\gallant-lavoisier\portal\cockpit"
WshShell.CurrentDirectory = cockpitDir

' Check if port 8000 is already active
' 0 = Hide window completely; True = Wait for command to return exit code
nRet = WshShell.Run("cmd /c netstat -ano | findstr /R /C "":8000.*LISTENING"" >nul 2>&1", 0, True)

If nRet <> 0 Then
    ' Server is not running; launch node server.js in hidden window
    WshShell.Run "cmd /c node server.js", 0, False
    WScript.Sleep 1500
End If

' Open Cockpit in default web browser
WshShell.Run "http://localhost:8000/index.html"
