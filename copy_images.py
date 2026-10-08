import shutil
import os

source_dir = r"C:\Users\Ashok Sharma\.gemini\antigravity-ide\brain\83667b4f-bfdd-4e7a-a5dd-4d0e66ad22fc"
target_dir = r"d:\saurabh kabadi wala"

images_to_copy = {
    "blog_battery_featured_1785323920877.png": "blog_battery_featured.png",
    "blog_battery_inline_1785323935076.png": "blog_battery_inline.png",
    "blog_copper_featured_1785323947855.png": "blog_copper_featured.png",
    "blog_copper_inline_1785323962319.png": "blog_copper_inline.png",
    "blog_office_featured_1785323975555.png": "blog_office_featured.png",
    "blog_office_inline_1785323988618.png": "blog_office_inline.png",
    "blog_scale_featured_1785324002185.png": "blog_scale_featured.png",
    "blog_scale_digital_1785324018120.png": "blog_scale_digital.png",
    "blog_aluminium_featured_1785324031130.png": "blog_aluminium_featured.png",
    "blog_aluminium_alloys_1785324043556.png": "blog_aluminium_alloys.png",
    "blog_rates_featured_1785324056199.png": "blog_rates_featured.png",
    "blog_rates_pickup_1785324068892.png": "blog_rates_pickup.png",
    "blog_rates_metals_1785324081785.png": "blog_rates_metals.png",
}

for src_name, dest_name in images_to_copy.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(target_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy(src_path, dest_path)
        print(f"Copied {src_name} -> {dest_name}")
    else:
        print(f"Source not found: {src_path}")
