import { useState, useEffect } from 'react';
import { projectStorage } from '../firbase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);

    const uploadTask = storageRef.put(file);

    uploadTask.on(
      'state_changed',
      (snap) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const downloadUrl = await storageRef.getDownloadURL();
        setUrl(downloadUrl);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
