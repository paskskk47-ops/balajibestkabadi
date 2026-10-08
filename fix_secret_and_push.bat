@echo off
echo ====================================================
echo   Removing mcp.json Secret & Pushing Design Updates
echo ====================================================
echo.

echo 1. Untracking mcp.json from Git...
git rm --cached mcp.json 2>nul

echo 2. Resetting previous commit to unblock secret scanning...
git reset HEAD~1

echo 3. Staging clean files (mcp.json is now ignored)...
git add .

echo 4. Committing design updates...
git commit -m "Apply Eco-Recycle Jaipur Website design system"

echo 5. Pushing to GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo ====================================================
    echo If GitHub link unblock URL was provided, open the link
    echo shown in terminal to approve the commit, OR run:
    echo git push -f origin main
    echo ====================================================
) else (
    echo.
    echo ====================================================
    echo   [SUCCESS] Code pushed cleanly to GitHub & Vercel!
    echo ====================================================
)

echo.
pause
