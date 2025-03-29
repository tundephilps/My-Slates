interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  async function getCurrentLocation(): Promise<Coordinates | null> {
    if (navigator.permissions) {
      try {
        const result = await navigator.permissions.query({ name: 'geolocation' });
        if (result.state === 'granted') {
          // User has granted permission, proceed to get location
          return await getCoordinates();
        } else if (result.state === 'prompt') {
          // Permission is not determined, show a prompt to the user
          const position = await new Promise<Coordinates | null>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              (pos) => resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
              reject
            );
          });
          return position;
        } else {
          // Permission denied or unavailable
          console.error('Geolocation permission denied or unavailable');
          // Handle accordingly
          return null;
        }
      } catch (error:any) {
        console.error(`Error checking geolocation permission: ${error.message}`);
        return null;
      }
    } else if (navigator.geolocation) {
      // Geolocation API is supported, but Permissions API is not available
      return await getCoordinates();
    } else {
      console.error('Geolocation is not supported by this browser');
      // Handle the case where geolocation is not supported
      return null;
    }
  }
  
  async function getCoordinates(): Promise<Coordinates | null> {
    try {
      const position = await new Promise<Coordinates | null>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
          reject
        );
      });
      return position;
    } catch (error:any) {
      console.error(`Error getting location: ${error.message}`);
      // Handle errors, e.g., user denied access or location services are disabled
      return null;
    }
  }
  
  // Call the function when the user visits the web app
 export default getCurrentLocation
  