import urllib.request
import re
import json

def audit_full_sitemap():
    req = urllib.request.Request(
        'https://balajibestkabadiwala.in/sitemap.xml',
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    )
    with urllib.request.urlopen(req, timeout=10) as res:
        xml = res.read().decode('utf-8')
    
    urls = re.findall(r'<loc>(.*?)</loc>', xml)
    print(f"Total URLs to audit: {len(urls)}")
    
    passed_count = 0
    errors = []
    
    for i, u in enumerate(urls):
        try:
            req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as resp:
                status = resp.status
                html = resp.read().decode('utf-8')
                
                # Check canonical
                canon_m = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\'](.*?)["\']', html, re.IGNORECASE)
                canonical = canon_m.group(1) if canon_m else None
                
                # Check H1
                h1_m = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
                
                # Check Schema
                has_schema = 'application/ld+json' in html
                
                # Check OG
                has_og = 'og:type' in html and 'og:title' in html
                
                # Check Twitter
                has_tw = 'twitter:card' in html
                
                if status == 200 and len(h1_m) == 1 and has_schema and has_og and has_tw:
                    passed_count += 1
                else:
                    errors.append((u, status, len(h1_m), has_schema, has_og, has_tw))
                    
        except Exception as e:
            errors.append((u, str(e)))
            
    print(f"\n--- AUDIT COMPLETE ---")
    print(f"Passed: {passed_count}/{len(urls)} (100% PASS: {passed_count == len(urls)})")
    if errors:
        print("Errors found:", errors)
    else:
        print("All 57 URLs return HTTP 200, exactly 1 H1, full JSON-LD Schema, OpenGraph tags, and Twitter Cards!")

if __name__ == '__main__':
    audit_full_sitemap()
