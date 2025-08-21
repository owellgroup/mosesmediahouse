MOSES MEDIA HOUSE - GALLERY IMAGES FOLDER

This folder is where you should place all your gallery images.

INSTRUCTIONS:
1. Place your image files (JPG, JPEG, PNG) in this folder
2. Use descriptive filenames like:
   - wedding1.jpg
   - corporate-event-2024.png
   - family-portrait-smith.jpeg
   - graduation-ceremony.jpg
   etc.

3. After adding images to this folder, update the galleryImages array in:
   components/gallery-content.tsx

4. Add the exact filename to the array, for example:
   const galleryImages = [
     "wedding1.jpg",
     "corporate-event-2024.png",
     "family-portrait-smith.jpeg",
     "graduation-ceremony.jpg",
     // Add more images here...
   ]

SUPPORTED FORMATS:
- JPG
- JPEG  
- PNG

RECOMMENDED IMAGE SIZES:
- Minimum: 800x800 pixels
- Recommended: 1200x1200 pixels or higher
- Keep file sizes under 2MB for best performance

The gallery will automatically create a responsive grid layout and include:
- Hover effects
- Lightbox modal for full-size viewing
- Filter categories (you can categorize by filename)
- Mobile-responsive design

You can add as many images as you want - the gallery will handle them all!
