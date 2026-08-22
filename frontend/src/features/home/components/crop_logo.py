import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw

img_path = r"C:\Users\malik  hassan\.gemini\antigravity-ide\brain\0a641e07-07c2-4b35-99cb-5007d7804419\.user_uploaded\media_1787433638997.png"
im = Image.open(img_path).convert("RGBA")

# Exact logo center and radius in 791x1024 space
# Center ~ (317, 112), Radius ~ 65
cx, cy, r = 317, 112, 65

left = cx - r
top = cy - r
right = cx + r
bottom = cy + r

logo_crop = im.crop((left, top, right, bottom))

# Resize using Lanczos for crisp HD 512x512
logo_hd = logo_crop.resize((512, 512), Image.Resampling.LANCZOS)

# Create a smooth circular alpha mask so it has a transparent background around the circle
mask = Image.new("L", (512, 512), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((4, 4, 508, 508), fill=255)

# Apply mask
logo_hd.putalpha(mask)

# Sharpen and enhance contrast slightly for ultra-crisp output
enhancer = ImageEnhance.Sharpness(logo_hd)
logo_hd = enhancer.enhance(1.5)

# Save HD PNG to frontend/public/images/fyc_official_logo.png
out_path = r"c:\Users\malik  hassan\Desktop\FYC-WEB\frontend\public\images\fyc_official_logo.png"
logo_hd.save(out_path, "PNG")

print(f"Successfully created Ultra-HD FYC Official Logo at: {out_path}")
