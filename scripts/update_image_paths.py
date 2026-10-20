import os
import re

component_files = []
for root, dirs, files in os.walk('components'):
    for f in files:
        if f.endswith('.tsx'):
            component_files.append(os.path.join(root, f))

data_files = ['data/tours.ts', 'public/tours-manifest.json']
all_files = component_files + data_files

changed = 0
for path in all_files:
    if not os.path.exists(path):
        continue
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    new_content = re.sub(r'(/(?:tours|images)/[^"\']+)\.(jpe?g|png)', r'\1.webp', content)
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as fh:
            fh.write(new_content)
        changed += 1
        print('Updated:', path)

print('Done.', changed, 'files updated.')

