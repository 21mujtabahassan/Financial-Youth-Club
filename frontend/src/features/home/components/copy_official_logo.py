from PIL import Image, ImageEnhance, ImageDraw
import os

img_path = r"C:\Users\malik  hassan\.gemini\antigravity-ide\brain\0a641e07-07c2-4b35-99cb-5007d7804419\.user_uploaded\media_1787434527561.jpg"
im = Image.open(img_path).convert("RGBA")
width, height = im.size
print(f"User logo dimensions: {width}x{height}")

# Resize using Lanczos to 512x512
logo_hd = im.resize((512, 512), Image.Resampling.LANCZOS)

# Create a smooth circular alpha mask so background outside the outer dark ring is clean & transparent
mask = Image.new("L", (512, 512), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((2, 2, 510, 510), fill=255)

logo_hd.putalpha(mask)

# Save to public/images/fyc_official_logo.png
out_path = r"c:\Users\malik  hassan\Desktop\FYC-WEB\frontend\public\images\fyc_official_logo.png"
logo_hd.save(out_path, "PNG")

print("Saved logo to public/images/fyc_official_logo.png")
