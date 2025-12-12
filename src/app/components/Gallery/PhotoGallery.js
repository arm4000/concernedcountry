import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import CustomDivider from "../CustomDivider/CustomDivider";

const photos = [
  "/images/ccc-2.jpeg",
  "/images/ccc-3.jpeg",
  "/images/ccc-4.jpeg",
  "/images/ccc-5.jpeg",
  "/images/ccc-11.jpeg",
  "/images/ccc-12.jpeg",
  "/images/ccc-13.jpeg",
  "/images/headerBanner.webp",
  "/images/ccc-1.jpeg",
  "/images/ccc-6.jpeg",
  "/images/ccc-7.jpeg",
  "/images/ccc-8.jpeg",
  "/images/ccc-9.jpeg",
  "/images/ccc-10.jpeg",
  "/images/ccc-14.jpeg",
  "/images/ccc-15.jpeg",
  "/images/ccc-16.jpeg",
  "/images/ccc-17.jpeg",
];  

const PhotoGallery = () => {
  return (
    <Container className="py-5">
      <h1 className="py-3 text-center" style={{ color: "#FF8F8F" }}>
        Our Community Photo Gallery
      </h1>
      {/* <CustomDivider /> */}
      <div className="container mt-4">
        <div className="row">
          {photos.map((src, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <Image
                  src={src}
                  alt={`Photo ${index + 1}`}
                  // layout="responsive"
                  // objectFit="contain"
                  // width={800}
                  // height={600}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="card-img-top"
                  style={{height: 280, width: 'auto', objectFit: 'contain'}}
                />
                {/* <div className="card-body">
                  <p className="card-text">Photo {index + 1}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PhotoGallery;
