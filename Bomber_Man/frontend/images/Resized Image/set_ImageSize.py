from PIL import Image

def resize_image(input_path, output_path, size=(100, 100)):
    
    with Image.open(input_path) as img:
        img = img.resize(size, Image.LANCZOS)
        img.save(output_path)
        print(f"save sucessful {output_path}")

input_image_path = 'monster.png'
output_image_path = 'reset_monster.png'

resize_image(input_image_path, output_image_path)
