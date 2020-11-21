import React from "react";
import Gallery from "react-grid-gallery";

const GalleryGrid = () => {
	const IMAGES = [
		{
			src: "/images/lmj-at-office.jpg",
			thumbnail: "/images/lmj-at-office.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
            caption: "Lamiju at office",
            alt: "Lamiju at office"
		},
		{
			src: "/images/lmj-with-wife.jpg",
			thumbnail: "/images/lmj-with-wife.jpg",
			thumbnailWidth: 900,
			thumbnailHeight: 1125,
			caption: "Lamiju with wife",
			alt: "Lamiju with wife",
		},
		{
			src: "/images/lmj012.JPG",
			thumbnail: "/images/lmj012.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 720,
			caption: "Lamiju speaking with primary school children",
			alt: "Lamiju speaking with primary school children",
		},
		{
			src: "/images/lmj01.jpg",
			thumbnail: "/images/lmj01.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju reaching out to a family",
			alt: "Lamiju reaching out to a family",
		},
		{
			src: "/images/lmj007.JPG",
			thumbnail: "/images/lmj007.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju - The man of the people",
			alt: "Lamiju - The man of the people",
		},
		{
			src: "/images/lmj013.JPG",
			thumbnail: "/images/lmj013.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju receiving his election certificate",
			alt: "Lamiju receiving his election certificate",
		},
		{
			src: "/images/lmj006.JPG",
			thumbnail: "/images/lmj006.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with fans",
			alt: "Lamiju with fans",
		},
		{
			src: "/images/lmj004.JPG",
			thumbnail: "/images/lmj004.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju at office",
			alt: "Lamiju at office",
		},
		{
			src: "/images/lmj-with-osinbajo.JPG",
			thumbnail: "/images/lmj-with-osinbajo.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with Osinbajo",
			alt: "Lamiju with Osinbajo",
		},
		{
			src: "/images/lmj-with-siblings.jpg",
			thumbnail: "/images/lmj-with-siblings.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with siblings",
			alt: "Lamiju with siblings",
		},
		{
			src: "/images/lmj-addressing-people.jpg",
			thumbnail: "/images/lmj-addressing-people.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju addressing people",
			alt: "Lamiju addressing people",
		},
		{
			src: "/images/lmj-at-office.jpg",
			thumbnail: "/images/lmj-at-office.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
            caption: "Lamiju at office",
            alt: "Lamiju at office"
		},
		{
			src: "/images/lmj-with-wife.jpg",
			thumbnail: "/images/lmj-with-wife.jpg",
			thumbnailWidth: 900,
			thumbnailHeight: 1125,
			caption: "Lamiju with wife",
			alt: "Lamiju with wife",
		},
		{
			src: "/images/lmj012.JPG",
			thumbnail: "/images/lmj012.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 720,
			caption: "Lamiju speaking with primary school children",
			alt: "Lamiju speaking with primary school children",
		},
		{
			src: "/images/lmj01.jpg",
			thumbnail: "/images/lmj01.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju reaching out to a family",
			alt: "Lamiju reaching out to a family",
		},
		{
			src: "/images/lmj007.JPG",
			thumbnail: "/images/lmj007.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju - The man of the people",
			alt: "Lamiju - The man of the people",
		},
		{
			src: "/images/lmj013.JPG",
			thumbnail: "/images/lmj013.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju receiving his election certificate",
			alt: "Lamiju receiving his election certificate",
		},
		{
			src: "/images/lmj006.JPG",
			thumbnail: "/images/lmj006.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with fans",
			alt: "Lamiju with fans",
		},
		{
			src: "/images/lmj004.JPG",
			thumbnail: "/images/lmj004.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju at office",
			alt: "Lamiju at office",
		},
		{
			src: "/images/lmj-with-osinbajo.JPG",
			thumbnail: "/images/lmj-with-osinbajo.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with Osinbajo",
			alt: "Lamiju with Osinbajo",
		},
		{
			src: "/images/lmj-with-siblings.jpg",
			thumbnail: "/images/lmj-with-siblings.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with siblings",
			alt: "Lamiju with siblings",
		},
		{
			src: "/images/lmj-addressing-people.jpg",
			thumbnail: "/images/lmj-addressing-people.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju addressing people",
			alt: "Lamiju addressing people",
		},
		{
			src: "/images/lmj-at-office.jpg",
			thumbnail: "/images/lmj-at-office.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
            caption: "Lamiju at office",
            alt: "Lamiju at office"
		},
		{
			src: "/images/lmj-with-wife.jpg",
			thumbnail: "/images/lmj-with-wife.jpg",
			thumbnailWidth: 900,
			thumbnailHeight: 1125,
			caption: "Lamiju with wife",
			alt: "Lamiju with wife",
		},
		{
			src: "/images/lmj012.JPG",
			thumbnail: "/images/lmj012.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 720,
			caption: "Lamiju speaking with primary school children",
			alt: "Lamiju speaking with primary school children",
		},
		{
			src: "/images/lmj01.jpg",
			thumbnail: "/images/lmj01.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju reaching out to a family",
			alt: "Lamiju reaching out to a family",
		},
		{
			src: "/images/lmj007.JPG",
			thumbnail: "/images/lmj007.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju - The man of the people",
			alt: "Lamiju - The man of the people",
		},
		{
			src: "/images/lmj013.JPG",
			thumbnail: "/images/lmj013.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju receiving his election certificate",
			alt: "Lamiju receiving his election certificate",
		},
		{
			src: "/images/lmj006.JPG",
			thumbnail: "/images/lmj006.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with fans",
			alt: "Lamiju with fans",
		},
		{
			src: "/images/lmj004.JPG",
			thumbnail: "/images/lmj004.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju at office",
			alt: "Lamiju at office",
		},
		{
			src: "/images/lmj-with-osinbajo.JPG",
			thumbnail: "/images/lmj-with-osinbajo.JPG",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with Osinbajo",
			alt: "Lamiju with Osinbajo",
		},
		{
			src: "/images/lmj-with-siblings.jpg",
			thumbnail: "/images/lmj-with-siblings.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju with siblings",
			alt: "Lamiju with siblings",
		},
		{
			src: "/images/lmj-addressing-people.jpg",
			thumbnail: "/images/lmj-addressing-people.jpg",
			thumbnailWidth: 1080,
			thumbnailHeight: 771,
			caption: "Lamiju addressing people",
			alt: "Lamiju addressing people",
		},
	];
	return <div className="container-fluid px-0 gallery-grid my-5">
        <h3 className="font-weight-bold text-center mb-3">Photo Speaks</h3>
        <Gallery images={IMAGES} enableImageSelection={false} margin={4} />
    </div>;
};

export default GalleryGrid;
