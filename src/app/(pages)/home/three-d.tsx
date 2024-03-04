// "use client";

import React from "react";

interface HomePageProps {
  children: React.ReactNode;
}

export default function HomePage({ children }: HomePageProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}


// interface ThreeDComponentProps {
//   children: React.ReactNode;
// }

// const ThreeDComponent: React.FC<ThreeDComponentProps> = ({ children }) => {
//   const [style3d, setStyle3d] = useState({
//     transform: "",
//     transformStyle: "preserve-3d" as React.CSSProperties["transformStyle"],
//   });

//   const handleMouseMove = useCallback((ev: any) => {
//     if (!ev.target) return;

//     const rect = ev.currentTarget.getBoundingClientRect();
//     const offsetX = ev.clientX - rect.left;
//     const offsetY = ev.clientY - rect.top;

//     // Check if the screen width is below a certain threshold
//     const isMobile = window.innerWidth <= 600;

//     // Adjust the rotation values based on the device type
//     const rotX = isMobile ? 0 : 90 - (offsetX / rect.width) * 180;
//     const rotY = isMobile ? 0 : 90 - (offsetY / rect.height) * 180;

//     setStyle3d({
//       transform: `rotateX(${rotY}deg) rotateY(${rotX}deg)`,
//       transformStyle: "preserve-3d",
//     });
//   }, []);

//   return (
//     <div onMouseMove={handleMouseMove}>
//       <div className="item-3d" style={style3d as React.CSSProperties}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default ThreeDComponent;
