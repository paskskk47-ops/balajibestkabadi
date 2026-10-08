@echo off
echo Adding new files and changes...
git add .
echo Committing changes...
git commit -m "Update scrap prices"
echo Pushing updates to GitHub...
git push origin main
echo.
echo Updates deployed successfully!
pause
