import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase.config";


export async function uploadHtmlFile(file: File): Promise<string> {
  if (!file) throw new Error("No file selected");

  const storageRef = ref(storage, `football-site-files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      null, // Progress function (optional)
      (error:any) => reject(error), // Handle error
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(url);
      }
    );
  });
}
