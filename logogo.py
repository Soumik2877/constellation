import shutil
import os

# Source file
source_file = "/Users/soumikchattterjee/constellation/logos/logo.png"

# Destination folder
destination_folder = "logos"

# Make sure destination folder exists
os.makedirs(destination_folder, exist_ok=True)

# Generate 50 copies in the 'logos' folder
for i in range(51, 81):
    destination_file = os.path.join(destination_folder, f"logo{i}.png")
    shutil.copy(source_file, destination_file)

print("✅ 50 image copies created in the 'logos' folder.")
