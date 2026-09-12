@echo off
cd /d "%~dp0"
if not exist "node_modules\vite\bin\vite.js" (
  echo Install dependencies with npm ci first. See README.md.
  pause
  exit /b 1
)
echo Portfolio: http://127.0.0.1:5173/
echo Keep this window open while using the portfolio. Press Ctrl+C to stop.
node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5173 --strictPort
pause
