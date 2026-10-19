import os
import zipfile
import stat

def make_posix_zip():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    source_dir = os.path.join(base_dir, 'out')
    output_zip = os.path.join(base_dir, 'out.zip')
    
    if os.path.exists(output_zip):
        os.remove(output_zip)
        
    print(f"Packaging {source_dir} into {output_zip} with explicit POSIX 755/644 permissions...")
    
    with zipfile.ZipFile(output_zip, 'w', compression=zipfile.ZIP_DEFLATED) as zf:
        # First ensure root .htaccess is included
        htaccess_path = os.path.join(source_dir, '.htaccess')
        if os.path.exists(htaccess_path):
            zinfo = zipfile.ZipInfo.from_file(htaccess_path, '.htaccess')
            zinfo.create_system = 3  # Unix
            zinfo.external_attr = (stat.S_IFREG | 0o644) << 16
            with open(htaccess_path, 'rb') as f:
                zf.writestr(zinfo, f.read(), compress_type=zipfile.ZIP_DEFLATED)
            print("  + Added .htaccess (644)")

        for root, dirs, files in os.walk(source_dir):
            dirs.sort()
            files.sort()
            for d in dirs:
                full_dir_path = os.path.join(root, d)
                rel_dir_path = os.path.relpath(full_dir_path, source_dir).replace('\\', '/') + '/'
                zinfo = zipfile.ZipInfo(rel_dir_path)
                zinfo.create_system = 3  # Unix
                zinfo.external_attr = (stat.S_IFDIR | 0o755) << 16
                zf.writestr(zinfo, '')
            for f in files:
                if f == '.htaccess':
                    continue  # already added at top
                full_file_path = os.path.join(root, f)
                rel_file_path = os.path.relpath(full_file_path, source_dir).replace('\\', '/')
                zinfo = zipfile.ZipInfo.from_file(full_file_path, rel_file_path)
                zinfo.create_system = 3  # Unix
                zinfo.external_attr = (stat.S_IFREG | 0o644) << 16
                with open(full_file_path, 'rb') as fp:
                    zf.writestr(zinfo, fp.read(), compress_type=zipfile.ZIP_DEFLATED)
                    
    print(f"Success! Created {output_zip} ({os.path.getsize(output_zip)} bytes)")

if __name__ == '__main__':
    make_posix_zip()
