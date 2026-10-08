import os

old_domain = "saurabhkabadiwala.netlify.app"
new_domain = "balajibestkabadiwala.in"

files_updated = 0

print(f"Starting replacement of '{old_domain}' with '{new_domain}'...")

for root, dirs, files in os.walk('.'):
    # Exclude .git and other hidden folders
    dirs[:] = [d for d in dirs if not d.startswith('.')]
    
    for file in files:
        if file.endswith(('.html', '.xml', '.txt', '.py')):
            # Skip the script itself
            if file == 'replace_domain.py':
                continue
                
            filepath = os.path.join(root, file)
            
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if old_domain in content:
                    new_content = content.replace(old_domain, new_domain)
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated: {filepath}")
                    files_updated += 1
            except Exception as e:
                print(f"Error reading/writing {filepath}: {e}")

print(f"Done! Updated {files_updated} file(s).")
