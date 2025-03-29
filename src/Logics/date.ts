import moment from "moment";
// const crypto = require('crypto');

export const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  export const Years = (() => {
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 27; // Complete up to the year 2050
    const yearsArray:string[] = [];
  
    for (let year = currentYear; year <= maxYear; year++) {
      yearsArray.push(year.toString());
    }
  
    return yearsArray;
  })();
  
  export const getPassedYears = (): string[] => {
    const currentYear:number =Number(new Date().getFullYear());
    const yearsArray:string[] = [];
  
    for (let i:number = 0; i < 10; i++) {
      yearsArray.push((currentYear - i).toString());
    }
  
    return yearsArray;
  };
  
  export const getPassedMonths = (): string[] => {
    const currentMonthIndex = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months.slice(0, currentMonthIndex);
  };
  
  export const getRemainingMonths = (): string[] => {
    const currentMonthIndex = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months.slice(currentMonthIndex,months.length);
  };

  export const getCurrentMonthName = (): string => {
    const currentMonthIndex = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months[currentMonthIndex];
  };
  
  export const getCurrentMonthsToEndOfYear = (): string[] => {
    const currentMonthIndex = new Date().getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    return months.slice(currentMonthIndex);
  };
  export const getMonthNumber = (monthName: string): number | null => {
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    const monthIndex = months.findIndex((month) => month.toLowerCase() === monthName.toLowerCase());
  
    // Return null if the input month name is invalid
    if (monthIndex === -1) {
      return null;
    }
  
    // Return month number (1 to 12) based on the index + 1
    return monthIndex + 1;
  };
  


  export const generateUniqueString=(length:number)=>{ const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let uniqueString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    uniqueString += characters.charAt(randomIndex);
  }

  return uniqueString;
  }
  let timeoutID:any=0;
export const fireAfterStop = (callBack:any,ms:number)=>{
if(timeoutID)clearTimeout(timeoutID);
timeoutID=setTimeout(()=>{
callBack()
},ms);

}

let timeoutIDClick: any = 0;
export const fireAfterStopClick = (callback: any, ms: number) => {
  clearTimeout(timeoutIDClick);

  const handleMouseDown = () => {
    timeoutIDClick = setTimeout(() => {
      callback();
    }, ms);
  };

  const handleMouseUp = () => {
    clearTimeout(timeoutIDClick);
  };

  return {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };
};

export function getMonthNameFromDate(dateString: string): string {
  //if(typeof dateString=="object")dateString=dateString[0];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const date = new Date(dateString);
  const monthIndex = date.getMonth();

  return months[monthIndex];
}

export function getYearFromDate(dateString: string): number {
  if(typeof dateString=="object")dateString=dateString[0];
  const date = new Date(dateString);
  console.log(date);
  return date.getFullYear();
}
export function calculateSMSCharges(message:string,charactersPerPage:number=70){
  return Math.ceil(message.length/charactersPerPage);
}

export function getTimeAgoString(dateString: string): string {
  const now = moment();
  const targetDate =  moment(dateString);
  const diffInSeconds = now.diff(targetDate, 'seconds');

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  }
}

export function getGreeting(): string {
  const currentHour = new Date().getHours();

  if (currentHour >= 0 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

export function formatToNaira(value: string | number, showSymbol: boolean = false): string {
  if (typeof value === 'string') {
      const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
      if (isNaN(numericValue)) {
          return '0';
      }
      return showSymbol ? numericValue.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', currencyDisplay: 'symbol' }) : numericValue.toLocaleString();
  } else if (typeof value === 'number') {
      return showSymbol ? value.toLocaleString('en-NG', { style: 'currency', currency: 'NGN', currencyDisplay: 'symbol' }) : value.toLocaleString();
  } else {
      return '0';
  }
}


export const shareReferralLink = async (referralLink:string) => {
  try {
    // Check if the Web Share API is supported
    if (navigator.share) {
      await navigator.share({
        title: 'Check out swiftkonet!',
        text: 'Join and buy airtime , data and electricity bills effortlessly!',
        url: referralLink,
      });
      console.log('Successfully shared referral link.');
    } else {
      console.log('Web Share API not supported.');
    }
  } catch (error) {
    console.error('Error sharing referral link:', error);
  }
};

// Example usage:
export const validateNigerianAccountNumber=(accountNumber:string | number)=> {
  // Remove any whitespace from the account number
  if(typeof accountNumber=="number")accountNumber=accountNumber.toString();
  const cleanAccountNumber = accountNumber.replace(/\s/g, '');

  // Check if the account number is numeric and has the correct length (10 digits)
  const isValidLength = /^\d{10}$/.test(cleanAccountNumber);

  if (!isValidLength) {
    return false;
  }

  // Perform additional checks if needed based on the specific bank's account number format

  // Add your specific bank validation logic here if necessary

  // If no additional checks are needed, consider the account number as valid
  return true;
}


export const redirectToWhatsApp=(phoneNumber:string |  number, message:string)=>{
  // Format the phone number by removing non-numeric characters
  const formattedPhoneNumber = phoneNumber.toString().replace(/\D/g, '');
  // Create the WhatsApp URL with the formatted phone number and optional message
  const whatsappURL = `https://wa.me/${formattedPhoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  // Redirect to the WhatsApp URL
  window.location.href = whatsappURL;
}


export const getCurrentDateString=()=>{
  const options:any = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date());

  const dayWithSuffix = addDaySuffix(formattedDate);

  return `${dayWithSuffix}`;
}

const addDaySuffix=(dateString:string)=>{
  const dayWithoutSuffix = dateString.replace(/\d+(st|nd|rd|th)/, '');
  const day = parseInt(dayWithoutSuffix, 10);

  let suffix = 'th';
  if (day === 1 || day === 21 || day === 31) {
    suffix = 'st';
  } else if (day === 2 || day === 22) {
    suffix = 'nd';
  } else if (day === 3 || day === 23) {
    suffix = 'rd';
  }

  return dateString.replace(/\d+(st|nd|rd|th)/, `${day}${suffix}`);
}

export const replaceProtocol=(link:string)=>{
  // Check if the link starts with // and replace it with https://
  if (link.startsWith('//')) {
    return `https:${link}`;
  }

  // If the link doesn't start with //, return it as is
  return link;
}


export const CopyText= async (textToCopy:string) => {
  try {
    // Use the Clipboard API to write text to the clipboard
    const a=await navigator.clipboard.writeText(textToCopy);
  return a;
  } catch (error:any) {
    console.log(error);
 return false;
  }
};

export const convertToNumber = (num_Str: string): number => {
  if (!num_Str) return 0;
num_Str=num_Str.toString().split(",").join("");
  // Count the number of alphabets in the string
  const alphabetCount = (num_Str.match(/[a-zA-Z]/g) || []).length;

  // If the number of alphabets exceeds a certain threshold, return 0
  const maxAlphabetThreshold = 3; // Set your desired threshold here
  if (alphabetCount > maxAlphabetThreshold) return 0;

  // Use regex to extract numbers and decimal points from the string
  const numbersArray = num_Str.match(/[\d.]+/g);

  // If numbersArray is null or empty, return NaN
  if (!numbersArray || numbersArray.length === 0) {
    return NaN; // or return 0 if you prefer
  }

  // Join the extracted parts to form a single number string and convert to a number
  const numberStr = numbersArray.join('');
  
  // Check if the resulting string is a valid number
  const result = Number(numberStr);
  return isNaN(result) ? NaN : result;
};


export const convertToCamelCase=(inputString:string)=>{
  // Split the input string into words
  const words = inputString.split(' ');
  // Capitalize the first letter of each word (except the first word)
  const camelCaseWords = words.map((word:string, index:number) => {
    if (index === 0) {
      return word.toLowerCase(); // Lowercase the first word
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  // Join the words to create the camelCase string
  const camelCaseString = camelCaseWords.join('');
  return camelCaseString;
}

export const removeChar = (inputString: string, charToRemove: string): string => {
  // Use regular expression to replace all occurrences of the specified character
  const regex = new RegExp(charToRemove, 'g');
  return inputString.replace(regex, '');
};


export function getCurrentDateTime() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDateTime = `${month} ${day} ${year}`;
  return formattedDateTime;
}

export function spaceToCamelCase(str: string): string {
  // Split the string by spaces
  const words: string[] = str.split(' ');

  // Capitalize the first letter of each word
  const camelCaseWords: string[] = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words and return the camelCase string
  return camelCaseWords.join('');
}
export function camelCaseToSpace(str: string): string {
  // Split the camelCase string into words
  const words: string[] = str.split(/(?=[A-Z])/);

  // Capitalize the first letter of each word
  const capitalizedWords: string[] = words.map(word => {
      // Capitalize the first letter of each word and convert the rest to lowercase
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words with spaces
  return capitalizedWords.join(' ');
}


export function truncateString(text:string, maxLength:number) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength - 3) + "...";
    } else {
        return text;
    }
}

export function downloadFileFromDataURL(dataURL:string, filename:string, fileExtension:string){
  // Create a temporary anchor element
  const anchor = document.createElement('a');
  anchor.href = dataURL;
  anchor.download = `${filename}.${fileExtension}`;

  // Programmatically trigger a click event on the anchor element
  const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
  });
  anchor.dispatchEvent(clickEvent);
}


export function dataURLToBlob(dataURL:string) {
  // Split the data URL string into two parts: metadata and base64-encoded data
  const parts = dataURL.split(',');
  const metadata = parts[0]; // e.g., "data:image/jpeg;base64"
  const base64Data = atob(parts[1]); // Decode base64-encoded data

  // Create a Uint8Array from the base64-decoded data
  const arrayBuffer = new ArrayBuffer(base64Data.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < base64Data.length; i++) {
      uint8Array[i] = base64Data.charCodeAt(i);
  }

  // Create a Blob object from the Uint8Array and metadata
  return new Blob([uint8Array], { type: metadata });
}


export function emptyObjectValues(obj:  any): any {
    const newObj: Record<string, any> = {};
    for (const key in obj) {
        newObj[key] = '';
    }
    return newObj;
}

export const getCurrentDay = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const currentDay = daysOfWeek[currentDayIndex];
  return currentDay;
};




export function removeDuplicatesByDate(objects: any[]) {
  // Create an empty array to store unique objects
  const uniqueObjects: any[] = [];

  // Create a Set to keep track of unique 'addedAt' values
  const uniqueAddedAtSet = new Set();

  // Iterate over the objects array
  objects.forEach((obj) => {
    // Extract the 'addedAt' property value

    // Check if the uniqueAddedAtSet already has this 'addedAt' value
    if (!uniqueAddedAtSet.has(obj.assetName      )) {
      // If not, add the object to the uniqueObjects array
      uniqueObjects.push(obj);

      // Add the 'addedAt' value to the uniqueAddedAtSet
      uniqueAddedAtSet.add(obj.assetName        );
    }
  });

  return uniqueObjects;
}

export function sortObjectsByDate(objects:any,removeDouble:boolean=true) {
  // Sort the objects based on the updatedAt and addedAt properties
  if(removeDouble)objects=removeDuplicatesByDate(objects);
  console.log({objects});
  objects.sort((a:any, b:any) => {
      // Convert updatedAt strings to Date objects for comparison
      const dateA:any = new Date(a.updatedAt || a.addedAt);
      const dateB:any = new Date(b.updatedAt || b.addedAt);

      // Sort by descending order of date (recently updated/added first)
      return dateB - dateA;
  });

  return objects;
}


export function sortObjectsByAddedAt(objects:any) {
  // Sort the objects based on the updatedAt and addedAt properties
  objects.sort((a:any, b:any) => {
      // Convert updatedAt strings to Date objects for comparison
      const dateA:any = new Date(a.addedAt);
      const dateB:any = new Date(b.addedAt);

      // Sort by descending order of date (recently updated/added first)
      return dateB - dateA;
  });

  return objects;
}

export function sortByAddedAt(objects:any) {
  // Sort the objects based on the updatedAt and addedAt properties
  objects.sort((a:any, b:any) => {
      // Convert updatedAt strings to Date objects for comparison
      const dateA:any = new Date(a.addedAt);
      const dateB:any = new Date(b.addedAt);

      // Sort by descending order of date (recently updated/added first)
      return dateB - dateA;
  });

  return objects;
}
export function fetchActivitiesForRecordId_7Days(activities:any, recordId:string) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the date 7 days ago
  const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Filter activities based on the recordId and date range
  const filteredActivities = activities.filter((activity:any) => {
      // Convert activity date string to Date object
      const activityDate = new Date(activity.date);

      // Check if the activity's recordId matches the input recordId
      // and the activity date is within the past 7 days
      return activity.recordId === recordId && activityDate >= sevenDaysAgo;
  });

  return filteredActivities;
}

export function fetchActivitiesFor_7Days(activities:any) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the date 7 days ago
  const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Filter activities based on the recordId and date range
  const filteredActivities = activities.filter((activity:any) => {
      // Convert activity date string to Date object
      const activityDate = new Date(activity.date);

      // Check if the activity's recordId matches the input recordId
      // and the activity date is within the past 7 days
      return activityDate >= sevenDaysAgo;
  });

  return filteredActivities;
}

export function formatDate(dateString: string): string {
  // Parse the date string using Moment.js
  const date = moment(dateString, 'YYYY-MM-DD HH:mm:ss');

  // Format the date to the desired format
  const formattedDate = date.format('DD MMMM YYYY');

  return formattedDate;
}

export function getPrevious7DaysActivities(activities:any) {
  const today = moment();
  const prevStartDate = today.clone().subtract(7, 'days').startOf('day');
  const prevEndDate = today.clone().endOf('day');

  // Filter activities for the previous 14 days
  const prev7DaysActivities = activities.filter((activity:any) => {
      const activityDate = moment(activity.date);
      return activityDate.isBetween(prevStartDate, prevEndDate, null, '[]');
  });

  return prev7DaysActivities;
}
export function getPrevious4WeeksActivities(activities:any) {
  const today = moment();
  const prevStartDate = today.clone().subtract(4, 'weeks').startOf('week').startOf('day');
  const prevEndDate = today.clone().endOf('week').endOf('day');

  // Filter activities for the previous 4 weeks
  const prev4WeeksActivities = activities.filter((activity:any) => {
      const activityDate = moment(activity.date);
      return activityDate.isBetween(prevStartDate, prevEndDate, null, '[]');
  });

  return prev4WeeksActivities;
}
export function getObjectByDay(activities:any, targetDay:string) {
  // Find the object with the matching day
  const foundObject = (activities||[]).find((activity:any) => activity.day.toLowerCase() === targetDay.toLowerCase());

  // If the object is found, return it; otherwise, return null
  return foundObject || null;
}
export function getPrevious12MonthsActivities(activities:any) {
  const today = moment();
  const prevStartDate = today.clone().subtract(12, 'months').startOf('month').startOf('day');
  const prevEndDate = today.clone().endOf('month').endOf('day');

  // Filter activities for the previous 12 months
  const prev12MonthsActivities = activities.filter((activity:any) => {
      const activityDate = moment(activity.date);
      return activityDate.isBetween(prevStartDate, prevEndDate, null, '[]');
  });

  return prev12MonthsActivities;
}

export function getPreviousWeekActivities(activities:any,type:string) {
   
    let prevWeekActivities;
    
    if(type.toLowerCase()==='daily'){
    prevWeekActivities= getPrevious7DaysActivities(activities)
    }
    if(type.toLowerCase()==='weekly'){
      prevWeekActivities= getPrevious4WeeksActivities(activities)
    }
    if(type.toLowerCase()==='monthly'){
      prevWeekActivities=getPrevious12MonthsActivities(activities);
    }
    if(!prevWeekActivities){
      return console.error(prevWeekActivities);
    }
    // Merge activities for each day and sum the numberOfActivities
    const mergedActivities:any = {};
    prevWeekActivities.forEach((activity:any) => {
        const day = moment(activity.date).format('dddd');
        if (!mergedActivities[day]) {
            mergedActivities[day] = {
                date: moment(activity.date).format('YYYY-MM-DD'),
                day: day,
                numberOfActivities: activity.numberOfActivities
            };
        } else {
            mergedActivities[day].numberOfActivities += activity.numberOfActivities;
        }
    });
    // Convert mergedActivities object to array
    const result = Object.values(mergedActivities);
    return result;
}
