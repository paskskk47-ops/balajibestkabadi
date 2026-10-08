@echo off
echo ====================================================
echo   Linking & Deploying to Existing Project: balajibestkabadi
echo ====================================================
echo.

echo 1. Re-linking to existing Vercel project balajibestkabadi...
vercel link --project balajibestkabadi --yes

echo 2. Deploying production build directly to balajibestkabadi...
vercel --prod

echo.
echo ====================================================
echo   [SUCCESS] Deployed to project 'balajibestkabadi'!
echo   Live at: https://balajibestkabadiwala.in
echo ====================================================
pause
