import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogLatest = () => {
	const [posts, setAllPosts] = useState();
	const [post, setPost] = useState();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		fetch(`/blog/articles.json`, { method: "GET" })
			.then((res) => res.json())
			.then((json) => {
				setAllPosts(json);
				setLoaded(true);
			})
			.catch((e) => console.log(`An error occured: ${e}`));

		if (loaded) {
			setPost(posts[0]);
		}

		return () => {
			setLoaded(false);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loaded]);
	
	if (post) {
		return (
			<div className="container-fluid px-0">
				<div className="container my-5 my-lg-8 blog-latest">
					<h3 className="font-weight-bold mb-4">Latest blog post</h3>
					<div className="row">
						<div className="col-lg-6 mb-3 mb-lg-5">
							<img className="w-100" src={post.image} alt={post.heading} />
						</div>
						<div className="col-lg-6">
							<h4 className="font-weight-bold">{post.heading}</h4>
							<p>{post.intro}</p>
							<Link key={post.id} to={`/blog-article/${post.heading}`}>
								<button className="btn btn-outline-primary">Read more</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="blog-news" style={{ background: `url('/images/lmj-sit.jpg') no-repeat` }}>
					<div className="overlay w-100 h-100 py-5">
						<div className="container d-flex flex-column h-100 justify-content-center align-items-start">
							<h2 className="text-light font-weight-bold">Blog News</h2>
							<div className="row">
								<div className="col-md-6 col-lg-4 my-3">
									<div className="card shadow h-100">
										<img className="card-img-top" src="/images/lmj013.JPG" alt="LMJ Portrait" />
										<div className="card-body">
											<h4 className="card-title font-weight-bold">Politics</h4>
											<p className="card-text">
												Praying and hoping for change is not enough to birth the new Nigeria we are expecting. It is
												important that we take proactive actions as youth and get involved in national service. As a
												politician committed to serving the community, my engagement is to ensure a new Nigeria we
												can all be proud of is born.
											</p>
											<Link to="/blog" className="bg-primary__light text-secondary__light btn more">
												Explore
											</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4 my-3">
									<div className="card shadow h-100">
										<img className="card-img-top" src="/images/lmj-on-farm.jpg" alt="LMJ Portrait" />
										<div className="card-body">
											<h4 className="card-title font-weight-bold">Agriculture</h4>
											<p className="card-text">
												One of the core needs of man is food. By providing food for the nation, farmers do not only
												reduce the mortality rate, but also equip the citizens with the energy to do their
												respective work effectively through the provision of farm products. I am glad to be part of
												this noble profession.
											</p>
											<Link to="/blog" className="bg-primary__light text-secondary__light btn more">
												Explore
											</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4 my-3">
									<div className="card shadow h-100">
										<img className="card-img-top" src="/images/lmj012.JPG" alt="LMJ Portrait" />
										<div className="card-body">
											<h4 className="card-title font-weight-bold">Philanthropy</h4>
											<p className="card-text">
												I do not see giving to others as a thing only specific people can do. If a nation will grow,
												it is important the citizens learn to give back to the community. Everybody may not have
												cash or material thing to give. However, it is important to note that everybody has
												something to offer towards the growth and development of the community. I do not only
												believe this, I practise it also.
											</p>
											<Link to="/blog" className="bg-primary__light text-secondary__light btn more">
												Explore
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else return null;
};

export default BlogLatest;
