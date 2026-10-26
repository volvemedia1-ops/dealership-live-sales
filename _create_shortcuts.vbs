
Set WshShell = CreateObject("WScript.Shell")

' 1. Startup Folder Shortcut (.lnk)
startupLnkPath = "C:\\Users\\TEACHER\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\SalesCockpitAutoStart.lnk"
Set lnkStartup = WshShell.CreateShortcut(startupLnkPath)
lnkStartup.TargetPath = "wscript.exe"
lnkStartup.Arguments = """C:\\Users\\TEACHER\\Documents\\antigravity\\gallant-lavoisier\\portal\\cockpit\\launch_cockpit_silent.vbs"""
lnkStartup.WorkingDirectory = "C:\\Users\\TEACHER\\Documents\\antigravity\\gallant-lavoisier\\portal\\cockpit"
lnkStartup.Description = "Dealership Sales Cockpit Auto-Starter"
lnkStartup.Save

' 2. Desktop Shortcut (.lnk)
desktopLnkPath = "C:\\Users\\TEACHER\\Desktop\\Sales Cockpit.lnk"
Set lnkDesktop = WshShell.CreateShortcut(desktopLnkPath)
lnkDesktop.TargetPath = "wscript.exe"
lnkDesktop.Arguments = """C:\\Users\\TEACHER\\Documents\\antigravity\\gallant-lavoisier\\portal\\cockpit\\launch_cockpit_silent.vbs"""
lnkDesktop.WorkingDirectory = "C:\\Users\\TEACHER\\Documents\\antigravity\\gallant-lavoisier\\portal\\cockpit"
lnkDesktop.Description = "Open Dealership Sales Cockpit"
lnkDesktop.Save
