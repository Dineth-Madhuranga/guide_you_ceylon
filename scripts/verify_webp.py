import os
import re

missing = []
for root, dirs, files in os.walk('components'):
    for f in files:
        if f.endswith('.tsx'):
            content = open(os.path.join(root, f), encoding='utf-8').read()
            paths = re.findall(r'src=["\'](/[^"\']+\.webp)', content)
            for p in paths:
                full = 'public' + p
                if not os.path.exists(full):
                    missing.append(full)

if missing:
    print('MISSING:')
    for m in missing:
        print(' ', m)
else:
    print('All WebP files verified OK!')

