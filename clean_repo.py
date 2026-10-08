import os
import glob

# Search for any file in the current directory containing "and sitemap" or containing unusual characters
files = glob.glob('*and sitemap*')
for f in files:
    try:
        os.remove(f)
        print(f"Deleted bad file: {f}")
    except Exception as e:
        print(f"Error deleting {f}: {e}")

print("Cleanup complete.")
