# Integrated Centre Joundi assets

All website images are local project assets. `images/teachers/` contains real portrait crops, `images/logo/` the circular JND logo, `images/center/` the classroom crop, and `images/gallery/` two event crops. `sources/` retains the supplied screenshots for reproducibility; it is not required for deployment.

Teacher mapping, established from the names printed on each poster:

- Joundi: Screenshot 2026-09-26 123838.png → teachers/joundi.webp
- Ayoub Cheikhi: 123848.png → teachers/cheikhi.webp
- Lahmoudi: 123853.png → teachers/lahmoudi.webp
- Taha Arkhis: 123902.png → teachers/arkhis.webp
- Kamal: 123909.png → teachers/kamal.webp
- Benani: 123920.png → teachers/benani.webp
- Amine: 123928.png → teachers/amine.webp

Logo: 122853.png, cropped to the white circular logo with transparency outside the circle. No logo redrawing or generated pixels.

Centre image: the classroom thumbnail at the right of the first grid row in 122956.png. Gallery: that classroom, the auditorium thumbnail at the left of its first row, and the certificate/group photograph in its second row. No duplicate images within the gallery. Instagram UI, video icons and poster text are excluded from these crops.

Limitations: classroom and event crops are only 195–200 pixels wide because the supplied images are profile screenshots. They are not digitally upscaled or sharpened; the existing larger image slots necessarily reveal the limited source resolution. Original photographs are strongly recommended. All seven teacher crops are usable, but original portraits would offer more flexible framing and higher quality. The existing hero typography and preparation-method graphic are retained instead of repeating low-resolution classroom imagery.

`images/manifest.json` records source filenames, crop coordinates and native dimensions. `scripts/prepare-images.py` reproduces the exports using Pillow, prioritizing archived local sources. It is an optional asset-maintenance tool, not a website runtime dependency. No AI generation, face modification or background replacement is used.

To replace images, update the corresponding paths, native dimensions, alt text and object positions in `data.js`. Export original photos to WebP without enlarging them. PDFs still belong under `assets/resources/`.
