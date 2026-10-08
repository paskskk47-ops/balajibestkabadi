import glob
import os
from PIL import Image

artifacts_dir = r"C:\Users\Ashok Sharma\.gemini\antigravity-ide\brain\04783954-18dc-4c70-a9f1-83ca089cb8bd"

mapping = {
    "card_newspaper_raddi": "card_newspaper_raddi.webp",
    "card_plastic_scrap": "card_plastic_scrap.webp",
    "card_copper_wire": "card_copper_wire.webp",
    "card_brass_utensils": "card_brass_utensils.webp",
    "card_aluminium_scrap": "card_aluminium_scrap.webp",
    "card_iron_steel": "card_iron_steel.webp",
    "card_ewaste_electronics": "card_ewaste_electronics.webp",
    "card_home_appliances": "card_home_appliances.webp",
}

for prefix, dest_name in mapping.items():
    matches = glob.glob(os.path.join(artifacts_dir, f"{prefix}_*.png"))
    if matches:
        src_path = matches[-1]
        dest_path = os.path.join("public", dest_name)
        img = Image.open(src_path)
        img.save(dest_path, "WEBP", quality=85)
        print(f"Converted {prefix} -> public/{dest_name} ({os.path.getsize(dest_path)} bytes)")
    else:
        print(f"WARNING: No file found for {prefix}")
