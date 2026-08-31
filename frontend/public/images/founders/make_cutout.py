from PIL import Image, ImageFilter, ImageOps
import numpy as np

img_path = r"c:\Users\malik  hassan\Desktop\FYC-WEB\frontend\public\images\founders\adan_shahzad.jpg"
output_path = r"c:\Users\malik  hassan\Desktop\FYC-WEB\frontend\public\images\founders\adan_shahzad_cutout.png"

img = Image.open(img_path).convert("RGBA")
arr = np.array(img, dtype=np.float32)

r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]

# Compute background likelihood: background in this studio portrait is light neutral gray/white (r,g,b > 180 and r,g,b within 25 of each other)
bg_mask = (r > 175) & (g > 175) & (b > 175) & (np.abs(r - g) < 30) & (np.abs(g - b) < 30)

# Also upper left and upper right background regions
h, w, _ = arr.shape
y_coords, x_coords = np.ogrid[:h, :w]

# Soft transition alpha
alpha = np.ones((h, w), dtype=np.float32) * 255.0

# Where bg_mask is true, calculate smooth falloff
lightness = (r + g + b) / 3.0
bg_score = np.clip((lightness - 165.0) / 45.0, 0.0, 1.0)

# Protect subject skin tones (r > g > b, r > 160)
skin_mask = (r > 150) & (g > 100) & (b > 80) & (r > g) & (g > b)
subject_mask = (r < 150) | (g < 150) | (b < 150) | skin_mask

bg_score[subject_mask] = 0.0

alpha = (1.0 - bg_score) * 255.0

arr[:,:,3] = alpha
result = Image.fromarray(arr.astype(np.uint8))

# Save PNG
result.save(output_path, "PNG")
print("SUCCESS: High quality cutout created at adan_shahzad_cutout.png")
