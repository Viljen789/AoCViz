// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { buildMergeSortTree, ArrayNode, MergeSortTree } from '../../utils/MergeSort';
//
// export default function MergeSortVisualizer({
//   initialArray = [8, 4, 6, 1, 3, 7, 2, 5]
// }) {
//   const [tree, setTree] = useState(null);
//
//   useEffect(() => {
//     const mergeTree = buildMergeSortTree(initialArray);
//     setTree(mergeTree);
//   }, [initialArray]);
//
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         padding: '20px'
//       }}
//     >
//       {tree ? <MergeSortTree node={tree} /> : <p>Loading...</p>}
//     </div>
//   );
// }