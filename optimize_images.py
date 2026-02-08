import os
from PIL import Image

def optimize_images(directory):
    # Supported extensions
    extensions = {'.png', '.jpg', '.jpeg', '.webp'}
    
    # Walk through directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in extensions:
                file_path = os.path.join(root, file)
                try:
                    # Get file size in MB
                    file_size = os.path.getsize(file_path) / (1024 * 1024)
                    
                    # If image is larger than 1MB
                    if file_size > 1.0:
                        print(f"Optimizing {file} ({file_size:.2f} MB)...")
                        
                        with Image.open(file_path) as img:
                            # Resize if header is too large (e.g. > 1920px width)
                            max_dimension = 1600
                            if img.width > max_dimension or img.height > max_dimension:
                                img.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)
                            
                            # Save with optimization
                            # For PNG, use optimize=True. For JPG, use quality=85
                            if ext == '.png':
                                # Check if it has transparency
                                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                                    img.save(file_path, optimize=True)
                                else:
                                    # Convert to RGB if no transparency to save space? 
                                    # actually PNG optimization is good enough usually.
                                    # Let's try to convert to optimized PNG.
                                    img.save(file_path, optimize=True)
                            elif ext in {'.jpg', '.jpeg'}:
                                img.save(file_path, quality=85, optimize=True)
                            
                        new_size = os.path.getsize(file_path) / (1024 * 1024)
                        print(f"Done. New size: {new_size:.2f} MB")
                        
                except Exception as e:
                    print(f"Error optimizing {file}: {e}")

if __name__ == "__main__":
    # Assuming the script is run from the root of the project
    public_dir = os.path.join(os.getcwd(), 'public')
    if os.path.exists(public_dir):
        print(f"Scanning {public_dir}...")
        optimize_images(public_dir)
    else:
        print("Public directory not found.")
