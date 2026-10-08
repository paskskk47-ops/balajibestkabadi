import os
import shutil
import glob

os.makedirs("public", exist_ok=True)

# Copy all images to public/
for ext in ["*.png", "*.jpg", "*.jpeg", "*.svg", "*.ico"]:
    for filepath in glob.glob(ext):
        filename = os.path.basename(filepath)
        shutil.copy(filepath, os.path.join("public", filename))
        print(f"Copied {filename} to public/")

# Copy Google verification HTML files
for filepath in glob.glob("google*.html"):
    filename = os.path.basename(filepath)
    shutil.copy(filepath, os.path.join("public", filename))
    print(f"Copied {filename} to public/")

print("Public folder setup completed successfully!")
