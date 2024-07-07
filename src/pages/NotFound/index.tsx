const NotFound = () => {
  return (
    <div>
      Page not found
    </div>
  );
};

export default NotFound;
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
//     height: 100vh;
//     overflow: hidden;
//     display: flex;
//     font-family: 'Anton', sans-serif;
//     justify-content: center;
//     align-items: center;
//     margin: 0;
//     padding: 0;
//   }
// `;

// const sky = keyframes`
//   0% {
//     transform: rotate(45deg);
//   }
//   100% {
//     transform: rotate(405deg);
//   }
// `;

// const tail = keyframes`
//   0% {
//     width: 0;
//   }
//   30% {
//     width: 100px;
//   }
//   100% {
//     width: 0;
//   }
// `;

// const shining = keyframes`
//   0% {
//     width: 0;
//   }
//   50% {
//     width: 30px;
//   }
//   100% {
//     width: 0;
//   }
// `;

// const shooting = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(300px);
//   }
// `;

// const Night = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   transform: rotateZ(45deg);
//   // animation: ${sky} 200000ms linear infinite;
// `;

// const ShootingStar = styled.div`
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   height: 2px;
//   background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
//   border-radius: 999px;
//   filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
//   animation:
//     ${tail} 3000ms ease-in-out infinite,
//     ${shooting} 3000ms ease-in-out infinite;

//   &::before,
//   &::after {
//     content: '';
//     position: absolute;
//     top: calc(50% - 1px);
//     right: 0;
//     height: 2px;
//     background: linear-gradient(
//       -45deg,
//       rgba(0, 0, 255, 0),
//       rgba(95, 145, 255, 1),
//       rgba(0, 0, 255, 0)
//     );
//     transform: translateX(50%) rotateZ(45deg);
//     border-radius: 100%;
//     animation: ${shining} 3000ms ease-in-out infinite;
//   }

//   &::after {
//     transform: translateX(50%) rotateZ(-45deg);
//   }

//   ${(props) =>
//     Array.from({ length: 20 }).map(
//       (_, i) => `
//     &:nth-child(${i + 1}) {
//       top: calc(50% - ${Math.random() * 400 - 200}px);
//       left: calc(50% - ${Math.random() * 300}px);
//       animation-delay: ${Math.random() * 9999}ms;
      
//       &::before,
//       &::after {
//         animation-delay: ${Math.random() * 9999}ms;
//       }
//     }
//   `
//     )}
// `;

// const NotFound = () => (
//   <>
//     <GlobalStyle />
//     <Night>
//       {Array.from({ length: 20 }).map((_, i) => (
//         <ShootingStar key={i} />
//       ))}
//     </Night>
//   </>
// );

// export default NotFound;