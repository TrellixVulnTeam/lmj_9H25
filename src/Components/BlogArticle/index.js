import React, { lazy, Suspense } from "react";
import { HashLoader } from "react-spinners";
const NavBar = lazy(() => require("../Reusable Components/Navbar"));
const Article = lazy(() => require("./Article"));
const MoreArticles = lazy(() => require("./MoreArticles"));
const Subscribe = lazy(() => require("../Reusable Components/Subscribe"));
const Footer = lazy(() => require("../Reusable Components/Footer"));

const BlogArticle = () => {
	return (
		<Suspense
			fallback={
				<div className="fallback">
					<HashLoader color={"#1c3ae3"} loading />
				</div>
			}
		>
			<div className="blog-article">
				<NavBar />
				<Article />
				<MoreArticles />
				<Subscribe />
				<Footer />
			</div>
		</Suspense>
	);
};

export default BlogArticle;
