// import React, { useState, useEffect } from 'react';
// import './Experiences.scss';

// interface Image {
//   src: string;
//   alt: string;
//   projectName: string;
//   companyName: string;
// }

// interface ExperiencesProps {
//   images: Image[];
// }

// const Experiences: React.FC<ExperiencesProps> = ({ images }) => {
//   const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

//   useEffect(() => {
//     images.forEach((image) => {
//       const img = new Image();
//       img.onload = () => {
//         setLoadedImages((prev) => ({ ...prev, [image.src]: true }));
//       };
//       img.src = image.src;
//     });
//   }, [images]);

//   return (
//     <div className="experiences">
//       {images.map((image, index) => (
//         <div key={index} className="experience-item">
//           {/* Black text (behind the image) */}
//           <div className="text-overlay black-text">
//             <h3 className="project-name">{image.projectName}</h3>
//             <p className="company-name">{image.companyName}</p>
//           </div>

//           {/* Image */}
//           <div className='image-container'>
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="experience-image"
//               onLoad={(e) => setLoadedImages((prev) => ({ ...prev, [image.src]: true }))}
//             />
//           </div>
//           {/* White text (visible only over the image) */}
//           {loadedImages[image.src] && (
//             <div
//               className="text-overlay white-text"
//               style={{
//                 maskImage: `url(${image.src})`,
//                 WebkitMaskImage: `url(${image.src})`,
//                 maskSize: 'contain',
//                 WebkitMaskSize: 'contain',
//                 maskPosition: 'center',
//                 WebkitMaskPosition: 'center',
//                 maskRepeat: 'no-repeat',
//                 WebkitMaskRepeat: 'no-repeat',
//               }}
//             >
//               <h3 className="project-name">{image.projectName}</h3>
//               <p className="company-name">{image.companyName}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Experiences;


import React, { useState, useEffect } from 'react';
import './Experiences.scss';

interface Image {
  src: string;
  alt: string;
  projectName: string;
  companyName: string;
}

interface ExperiencesProps {
  images: Image[];
}

const Experiences: React.FC<ExperiencesProps> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [image.src]: true }));
      };
      img.src = image.src;
    });
  }, [images]);

  return (
    <div className="experiences">
      {images.map((image, index) => {
        const urlSlug = image.projectName.toLowerCase().replace(/\s+/g, '-');
        return (
          <a key={index} href={`/${urlSlug}`} className="experience-link">
            <div className="experience-item">
              <div className="text-overlay black-text">
                <h3 className="project-name">{image.projectName}</h3>
                <p className="company-name">{image.companyName}</p>
              </div>
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="experience-image"
                  onLoad={(e) => setLoadedImages((prev) => ({ ...prev, [image.src]: true }))}
                />
              </div>
              {loadedImages[image.src] && (
                <div
                  className="text-overlay white-text"
                  style={{
                    maskImage: `url(${image.src})`,
                    WebkitMaskImage: `url(${image.src})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                  }}
                >
                  <h3 className="project-name">{image.projectName}</h3>
                  <p className="company-name">{image.companyName}</p>
                </div>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Experiences;
