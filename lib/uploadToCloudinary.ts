export const handleUpload = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET!);
  formData.append("folder", "payment-receipts");

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) {
      const errData = await res.json();
      console.error("Cloudinary error:", errData);
      throw new Error("Upload failed");
    }

    const data = await res.json();
    console.log("Uploaded image URL:", data.secure_url);
    return data.secure_url;
  } catch (err) {
    console.error(err);
    return null;
  }
};
