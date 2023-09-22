// import { useState, useEffect } from 'react';
// import { projectFirestore } from '../firbase';

// const useFirestore = (collection) => {
//   const [docs, setDocs] = useState([]);

//   useEffect(() => {
//     const unsubscribe = projectFirestore
//       .collection(collection)
//       .orderBy('createdAt', 'desc')
//       .onSnapshot((snap) => {
//         const documents = snap.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         setDocs(documents);
//       });

//     return () => unsubscribe();
//   }, [collection]);

//   return { docs };
// };

// export default useFirestore;
import { useState, useEffect } from 'react';
import {  collection, query, orderBy, onSnapshot } from 'firebase/firestore'; 
import { projectFirestore } from '../firbase';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const firestore = projectFirestore; 

    const q = query(
      collection(firestore, collectionName),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocs(documents);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
