from PIL import Image, ImageFilter
import sys
import os

img_path = r"c:\Users\malik  hassan\Desktop\FYC-WEB\frontend\public\images\founders\adan_shahzad.jpg"
output_path = r"c:\Users\malik  hassan\Desktop\FYC-WEB\frontend\public\images\founders\adan_shahzad_cutout.png"

try:
    from rembg import remove
    with open(img_path, 'rb') as f:
        img_bytes = f.read()
    output_bytes = remove(img_bytes)
    with open(output_path, 'wb') as f:
        f.write(output_bytes)
    print("SUCCESS: rembg background removal complete -> adan_shahzad_cutout.png")
except Exception as e:
    print(f"rembg failed or not available yet: {e}, falling back to PIL mask processing...")
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()

    # The background of adan_shahzad.jpg is light gray/white (#E5E5E5 to #FFFFFF)
    # Adan is wearing dark blue hoodie with dark hair
    newData = []
    for item in datas:
        r, g, b, a = item
        # If color is close to white/light gray (high brightness, low saturation)
        if r > 190 and g > 190 and b > 190:
            newData.append((255, 255, 255, 0))
        elif r > 160 and g > 160 and b > 160 and abs(r-g) < 15 and abs(g-b) < 15:
            # Transition edge alpha mapping
            alpha = max(0, 255 - int((min(r, g, b) - 160) * 8))
            newData.append((r, g, b, alpha))
        else:
            newData.append((r, g, b, 255))

    img.putdata(newData)
    img.save(output_path, "PNG")
    print("SUCCESS: PIL mask extraction complete -> adan_shahzad_cutout.png")
