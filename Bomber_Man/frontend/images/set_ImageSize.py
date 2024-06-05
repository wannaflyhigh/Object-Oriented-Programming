from PIL import Image

def resize_image(input_path, output_path, size=(300, 200)):
    with Image.open(input_path) as img:
        img = img.resize(size, Image.LANCZOS)
        img.save(output_path)
        print(f"success: {output_path}")

num_images = int(input("num :"))

for i in range(num_images):
    input_image_path = input(f"Input :")
    output_image_path = input(f"Output {i+1} : ")
    resize_image(input_image_path, output_image_path)
