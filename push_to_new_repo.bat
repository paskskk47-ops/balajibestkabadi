@echo off
echo ==============================================
echo Updating Git Remote and Pushing to GitHub
echo ==============================================
echo.

REM Initialize Git if not already done
git init

REM Update remote URL or add it if it doesn't exist
git remote set-url origin https://github.com/paskskk47-ops/balajibestkabadi.git 2>nul
if %errorlevel% neq 0 (
    git remote add origin https://github.com/paskskk47-ops/balajibestkabadi.git
)

REM Rename branch to main
git branch -M main

echo Adding files...
git add .

echo Committing files...
git commit -m "Deploy website to new GitHub repository"

echo Pushing code to main branch...
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Git push failed. Please make sure:
    echo 1. You are logged in to GitHub on your CLI or credential helper is active.
    echo 2. The repository 'paskskk47-ops/balajibestkabadi' exists and is empty or you have write permissions.
) else (
    echo.
    echo [SUCCESS] Code pushed successfully to paskskk47-ops/balajibestkabadi!
)

echo.
pause
