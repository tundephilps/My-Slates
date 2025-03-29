
export function formatDate_Name(date=new Date()) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return `${month}, ${year}`;
  }
  export function getCurrentTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  

  export function convertCamelCaseToSpaced(inputString:string) {
    // Use a regular expression to insert a space before each uppercase letter
    
    return inputString.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  }
  
  
  export const convertToTitleCase = (str:string) => {
    return str.toString()
      .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
      .replace(/^./, ((char:string) => char.toUpperCase())) // Capitalize the first letter
      .trim(); // Remove leading/trailing spaces
  };
  

  export const validateData = (data:any,onError:(err:string)=>void) => {
    // Validate each field of the data object
    // Iterate over each property of the data object
    for (let key in data) {
      const value = data[key];
      
      // Check if the value is null, undefined, or has a length less than 3 (for strings)
      if (value === null || value === undefined || (typeof value === 'string' && value.length < 3)) {
        // Display an error message based on the property name
        onError(`Please provide valid (${convertToTitleCase(key)})`);
        return false;
      }
  
      // Check if the value is an object (excluding arrays)
      if (typeof value === 'object' && !Array.isArray(value)) {
        // Recursively call validateData for nested objects
        if (!validateData(value,onError)) {
          return false;
        }
      }
    }
  
    // If all fields are valid, return true
    return true;
  };
  