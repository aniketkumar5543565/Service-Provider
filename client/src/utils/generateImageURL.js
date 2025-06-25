import axios from "axios";

// Default image URL in case no image is provided
const DEFAULT_IMAGE_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6cl1MISDvIR9C5YIw_J-uaMhiOaQRSwC7Lw&s"; // Replace with actual URL

const generateImageURL = async (image) => {
  if (!image) {
    // Return the default image URL if no image is provided
    return { url: DEFAULT_IMAGE_URL };
  }

  const file = new FormData();
  file.append("file", image);
  file.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

  try {
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_ENV}/image/upload`,
      file
    );
    return data;
  } catch (error) {
    console.error("Upload error:", error);  
    // Return the default image URL if there's an error
    return { url: DEFAULT_IMAGE_URL };
  }
};

export default generateImageURL;
