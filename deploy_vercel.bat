@echo off
echo ====================================================
echo   Balaji Kabadi Wala - Next.js Vercel Deploy Script
echo ====================================================
echo.

REM 1. Initialize Git if not already initialized
if not exist ".git" (
    echo [INFO] Initializing Git repository...
    git init
    git branch -M main
    git remote add origin https://github.com/paskskk47-ops/balajibestkabadi.git
) else (
    git remote set-url origin https://github.com/paskskk47-ops/balajibestkabadi.git 2>nul
)

echo 1. Staging Next.js files and E-E-A-T updates...
git add .

echo 2. Committing Next.js transformation...
git commit -m "Deploy Next.js website with high-indexing E-E-A-T keywords"

echo 3. Pushing code to GitHub (Vercel Auto-Deployment)...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo ====================================================
    echo [NOTE] If git push asks for login credentials:
    echo   Run: gh auth login
    echo   OR login using GitHub Personal Access Token (PAT)
    echo ====================================================
) else (
    echo.
    echo ====================================================
    echo   [SUCCESS] Code pushed to GitHub!
    echo   Vercel is now deploying your site to:
    echo   https://balajibestkabadiwala.in
    echo ====================================================
)

echo.
pause
