export const uploadFile = async (file: File): Promise<string | null> => {
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await fetch("https://backend-9tgm.onrender.com/upload", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("File upload failed");
      }
  
      const result = await response.json();
      return result.url; // Assuming your API returns { url: "https://..." }
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    }
  };
  