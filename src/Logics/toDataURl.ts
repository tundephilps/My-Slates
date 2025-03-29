// Function to convert HTML file to data URL
export const convertHtmlToFileUrl = (htmlFile:any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        // Event listener for when file reading is completed
        reader.onload = () => {
            // Resolve with the data URL
            resolve(reader.result as string);
        };

        // Event listener for file reading errors
        reader.onerror = () => {
            reject(reader.error);
        };

        // Read the HTML file as text
        reader.readAsDataURL(htmlFile);
    });
};
