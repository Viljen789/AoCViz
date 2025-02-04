// import React from 'react';
// import { motion } from 'framer-motion';
//
// const buildMergeSortTree = (arr) => {
//   if (arr.length <= 1) {
//     return { arr, left: null, right: null };
//   }
//   const mid = Math.floor(arr.length / 2);
//   return {
//     arr,
//     left: buildMergeSortTree(arr.slice(0, mid)),
//     right: buildMergeSortTree(arr.slice(mid))
//   };
// };
//
// const ArrayNode = ({ arr }) => {
//   return (
//     <div style={{ display: 'flex', gap: '5px', margin: '5px' }}>
//       {arr.map((num, idx) => (
//         <motion.div
//           key={idx}
//           layout
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           style={{
//             padding: '5px 10px',
//             background: '#61dafb',
//             borderRadius: '4px',
//             fontWeight: 'bold'
//           }}
//         >
//           {num}
//         </motion.div>
//       ))}
//     </div>
//   );
// };
//
// const MergeSortTree = ({ node }) => {
//   return (
//     <motion.div
//       layout
//       style={{
//         border: '1px solid #ccc',
//         padding: '10px',
//         margin: '10px',
//         borderRadius: '4px',
//         minWidth: 'fit-content'
//       }}
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <ArrayNode arr={node.arr} />
//       {node.left && node.right && (
//         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//           <MergeSortTree node={node.left} />
//           <MergeSortTree node={node.right} />
//         </div>
//       )}
//     </motion.div>
//   );
// };
//
// export { buildMergeSortTree, ArrayNode, MergeSortTree };