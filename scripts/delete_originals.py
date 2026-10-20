import os

deleted = 0
skipped = 0

for root, dirs, files in os.walk('public'):
    for f in files:
        if f.lower().endswith(('.jpg', '.jpeg')):
            src = os.path.join(root, f)
            webp = os.path.splitext(src)[0] + '.webp'
            if os.path.exists(webp):
                os.remove(src)
                deleted += 1
            else:
                print('SKIPPED (no webp):', src)
                skipped += 1

print(f'Deleted {deleted} JPEG files. Skipped {skipped} (no webp counterpart).')

