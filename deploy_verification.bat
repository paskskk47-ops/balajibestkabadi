@echo off
echo Deleting duplicate verification file if it exists...
if exist "google90b3773f3e82ae48 (1).html" (
    del "google90b3773f3e82ae48 (1).html"
)

echo Adding files to git...
git add .

echo Committing changes...
git commit -m "Add Google Search Console verification file and clean up duplicates"

echo Pushing updates to GitHub...
git push origin main

echo.
echo Deployment triggered! Vercel will automatically build and deploy the changes.
pause
