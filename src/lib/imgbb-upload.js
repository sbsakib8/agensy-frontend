// ImgBB upload utility
const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
const IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

export const uploadImageToImgBB = async (imageFile) => {
  try {
    if (!IMGBB_API_KEY) {
      throw new Error('ImgBB API key not configured');
    }

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('key', IMGBB_API_KEY);

    const response = await fetch(IMGBB_API_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const result = await response.json();
    
    if (result.success) {
      return {
        success: true,
        imageUrl: result.data.url,
        deleteUrl: result.data.delete_url,
      };
    } else {
      throw new Error('Image upload failed');
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};