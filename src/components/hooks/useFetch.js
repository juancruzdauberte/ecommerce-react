// import { useEffect, useState } from "react";

// export const useFetch = (endpoint) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       const fetchData = async () => {
//         try {
//           const res = await fetch(endpoint);
//           if (!res.ok) {
//             throw new Error(`Error HTTP: ${res.status}`);
//           }
//           const dataRes = await res.json();
//           setData(dataRes);
//         } catch (error) {
//           setError(error);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchData();
//     }, 3000);
//   }, []);
//   return { data, loading, error };
// };
