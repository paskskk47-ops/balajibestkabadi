import os

replacements = {
    # Meta Author
    "Saurabh Sharma - Balaji Kabadi Wala": "Balaji Kabadi Wala",
    
    # Alternate Name Schema
    '"alternateName": "Saurabh Scrap Pickup Service"': '"alternateName": "Balaji Best Kabadi Wala"',
    
    # Email
    "sharmasaurabh7737@gmail.com": "info@balajibestkabadiwala.in",
    
    # Blog Author (Visual)
    "👤 Saurabh Sharma": "👤 Balaji Kabadi Wala",
    
    # JSON-LD Author (Standard Multi-line)
    '"author": { "@type": "Person", "name": "Saurabh Sharma" }': '"author": { "@type": "Organization", "name": "Balaji Kabadi Wala" }',
    
    # JSON-LD Author (Single-line)
    '"author":{"@type":"Person","name":"Saurabh Sharma"}': '"author":{"@type":"Organization","name":"Balaji Kabadi Wala"}',
    
    # JSON-LD Author (Python double-braces)
    '"author": {{ "@type": "Person", "name": "Saurabh Sharma" }}': '"author": {{ "@type": "Organization", "name": "Balaji Kabadi Wala" }}',
    
    # JSON-LD Publisher (Standard Multi-line)
    '"publisher": { "@type": "Organization", "name": "Balaji Kabadi Wala", "telephone": "+919509752549" }': 
        '"publisher": { "@type": "Organization", "name": "Balaji Kabadi Wala", "telephone": "+919509752549", "logo": { "@type": "ImageObject", "url": "https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.png" } }',
        
    # JSON-LD Publisher (Single-line)
    '"publisher":{"@type":"Organization","name":"Balaji Kabadi Wala","telephone":"+919509752549"}':
        '"publisher":{"@type":"Organization","name":"Balaji Kabadi Wala","telephone":"+919509752549","logo":{"@type":"ImageObject","url":"https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.png"}}',
        
    # JSON-LD Publisher (Python double-braces)
    '"publisher": {{ "@type": "Organization", "name": "Balaji Kabadi Wala", "telephone": "+919509752549" }}':
        '"publisher": {{ "@type": "Organization", "name": "Balaji Kabadi Wala", "telephone": "+919509752549", "logo": {{ "@type": "ImageObject", "url": "https://balajibestkabadiwala.in/saurabh_kabadi_wala_hero.png" }} }}',

    # About Page Story & Keywords
    "saurabh kabadi wala story": "balaji kabadi wala story",
    "was born out of a singular, powerful vision by <strong>Saurabh Sharma</strong>. Having witnessed the clear lack of transparency and scale inaccuracy in traditional doorstep collection, Saurabh wanted to elevate the profession. He set out":
        "was born out of a singular, powerful vision by <strong>our founder</strong>. Having witnessed the clear lack of transparency and scale inaccuracy in traditional doorstep collection, we wanted to elevate the profession. We set out",
    'alt="Saurabh Sharma - Balaji Kabadi Wala Jaipur"': 'alt="Founder - Balaji Kabadi Wala Jaipur"',
    '<h4 class="founder-name" style="margin-top: 20px;">Saurabh Sharma</h4>': '<h4 class="founder-name" style="margin-top: 20px;">Founder</h4>',
}

files_updated = 0

print("Starting SEO optimization and personal brand cleanup...")

for root, dirs, files in os.walk('.'):
    # Skip hidden dirs
    dirs[:] = [d for d in dirs if not d.startswith('.')]
    
    for file in files:
        if file.endswith(('.html', '.py', '.txt', '.xml')):
            # Skip the script itself
            if file == 'optimize_seo_and_clean.py':
                continue
                
            filepath = os.path.join(root, file)
            
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                updated = False
                for target, replacement in replacements.items():
                    if target in content:
                        content = content.replace(target, replacement)
                        updated = True
                
                if updated:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Updated: {filepath}")
                    files_updated += 1
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

print(f"Done! SEO optimization and branding cleanup completed across {files_updated} file(s).")
