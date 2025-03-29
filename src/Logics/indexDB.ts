import { useState, useEffect } from 'react';



export function useIndexedDB(databaseName: string, storeName: string) {
  const [db, setDb] = useState<IDBDatabase | null>(null);

  useEffect(() => {
    const request = indexedDB.open(databaseName, 1);

    request.onerror = () => {
      console.error('Database error: ', request.error);
    };

    request.onsuccess = () => {
      if (request.result) {
        setDb(request.result);
      } else {
        console.error('Failed to open database: ', databaseName);
      }
    };

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
    };
  }, [databaseName, storeName]);

  function addObject(data: any) {
    if (db) {
      const transaction = db.transaction([storeName], 'readwrite');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.add(data);

      request.onsuccess = () => {
        console.log('Data added successfully');
      };

      request.onerror = () => {
        console.error('Error adding data: ', request.error);
      };
    } else {
      console.error('Database is not available');
    }
  }

  function getAllObjects(callback: (data: any[]) => void) {
    if (db) {
      const transaction = db.transaction([storeName], 'readonly');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.getAll();

      request.onsuccess = () => {
        callback(request.result || []);
      };
    } else {
      console.error('Database is not available');
    }
  }

  function updateObject(id: number, newData: any) {
    if (db) {
      const transaction = db.transaction([storeName], 'readwrite');
      const objectStore = transaction.objectStore(storeName);
      const getRequest = objectStore.get(id);

      getRequest.onsuccess = () => {
        const data = getRequest.result;
        if (data) {
          const updateRequest = objectStore.put(newData);
          updateRequest.onsuccess = () => {
            console.log('Data updated successfully');
          };
          updateRequest.onerror = () => {
            console.error('Error updating data: ', updateRequest.error);
          };
        } else {
          console.error('No data found with id: ', id);
        }
      };
    } else {
      console.error('Database is not available');
    }
  }

  function deleteObject(id: number) {
    if (db) {
      const transaction = db.transaction([storeName], 'readwrite');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.delete(id);

      request.onsuccess = () => {
        console.log('Data deleted successfully');
      };

      request.onerror = () => {
        console.error('Error deleting data: ', request.error);
      };
    } else {
      console.error('Database is not available');
    }
  }

  return { addObject, getAllObjects, updateObject, deleteObject };
}
