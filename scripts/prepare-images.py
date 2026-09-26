"""Reproducible, non-generative crops of supplied screenshots. No upscaling."""
from pathlib import Path
from PIL import Image, ImageDraw
import shutil
import json

ROOT = Path(__file__).resolve().parent.parent
SOURCE = Path('d:/images/Screenshots')
ARCHIVE = ROOT / 'assets/sources'

portraits = [
    ('joundi', '123838', (50, 55, 450, 655)),
    ('cheikhi', '123848', (45, 70, 390, 650)),
    ('lahmoudi', '123853', (35, 55, 418, 655)),
    ('arkhis', '123902', (30, 65, 430, 665)),
    ('kamal', '123909', (48, 42, 434, 650)),
    ('benani', '123920', (32, 58, 429, 655)),
    ('amine', '123928', (34, 53, 408, 655)),
]
manifest = []

def source(stamp):
    path = ARCHIVE / f'screenshot-{stamp}.png'
    if not path.exists():
        shutil.copy2(SOURCE / f'Screenshot 2026-09-26 {stamp}.png', path)
    return Image.open(path)

def crop(stamp, box, destination, description):
    result = source(stamp).crop(box).convert('RGB')
    path = ROOT / destination
    result.save(path, 'WEBP', quality=90, method=6)
    manifest.append({'file': destination, 'source': f'screenshot-{stamp}.png', 'crop': box,
                     'width': result.width, 'height': result.height, 'description': description})

for name, stamp, box in portraits:
    crop(stamp, box, f'assets/images/teachers/{name}.webp', f'Portrait from the poster explicitly named {name}')

# The white circular JND logo, excluding the surrounding black screenshot.
logo = source('122853').crop((39, 155, 348, 464)).convert('RGBA')
mask = Image.new('L', logo.size)
ImageDraw.Draw(mask).ellipse((1, 1, 307, 307), fill=255)
logo.putalpha(mask)
logo.save(ROOT / 'assets/images/logo/centre-joundi.png', optimize=True)

# Crop only the real photographic area, excluding Instagram chrome and overlays.
crop('122956', (971, 476, 1166, 704), 'assets/images/center/classroom.webp',
     'Two teachers at the board, with students in the foreground')
crop('122956', (158, 476, 358, 704), 'assets/images/gallery/educational-event.webp',
     'Teacher addressing an auditorium')
crop('122956', (362, 751, 558, 904), 'assets/images/gallery/team-event.webp',
     'Group on stage holding certificates')

(ROOT / 'assets/images/manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
print('Created 7 portraits, the official logo, and 3 real photographic crops without upscaling.')
