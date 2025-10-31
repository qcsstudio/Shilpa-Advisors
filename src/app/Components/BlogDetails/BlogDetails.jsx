'use client'
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
	const { slug } = useParams();
	const decodedSlug = decodeURIComponent(slug);

	const [blog, setBlog] = useState(null);
	const [blogs, setBlogs] = useState([]);
	console.log(blogs, "blogsblogsblogsblogsblogsblogsblogs")
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	console.log(blog)

	const fetchBlog = async () => {
		try {
			const OriginalHeading = decodedSlug.replace(/-/g, " ");
			const res = await fetch(`/api/blog/${OriginalHeading}`);
			if (!res.ok) throw new Error('Failed to fetch blog');
			const data = await res.json();
			setTimeout(() => {
				setBlog(data);
				setLoading(false);
			}, 2000);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	};
	const fetchBlogs = async () => {
		try {
			const res = await fetch('/api/blog');
			if (!res.ok) throw new Error('Failed to fetch blogs');
			const data = await res.json();
			setTimeout(() => setBlogs(data), 3000);
		} catch (err) {
			console.error('Error fetching recent blogs:', err);
		}
	};

	useEffect(() => {
		if (slug) {
			fetchBlog();
			fetchBlogs();
		}
		const interval = setInterval(() => fetchBlogs(), 10000);
		return () => clearInterval(interval);
	}, [slug]);
	return (
		<div className="blogs-section">
			<div className="container">
				<div className="row">

					{/* -------Recent Post's------- */}

					<div className="col-lg-4 responsive">
						<div className="widget-sidebar-box">
							<h4 className="sidebar-title"> Recent Post </h4>
							<div className="widget-recent-post">
								{blogs?.map((blog) => (
									<div className="d-flex mb-3" key={blog.id}>
										<div className="rpost-thumb me-3">
											<a href={`/blogs/${blog.heading.trim().replace(/\s+/g, "-")}`}>
												<Image
													src={blog.thumbnail}
													alt={blog.heading}
													width={50}
													height={50}
													className="rounded"
												/>
											</a>
										</div>

										<div className="rpost-content">
											<div className="rpost-title">
												<h5 className="mb-1">{blog.heading}</h5>
												<span className="text-muted small"> {new Date(blog?.createdAt).toLocaleString()}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

					</div>

					{/*----- Blog--------- */}

					<div className="col-lg-8">
						<div className="row blogs-pr">
							<div className="col-lg-12">
								<div className="single-blog-dtls-box">
									<div className="blog-thumb">
										<Image src={blog?.thumbnail} alt="img" width={846} height={497} />
										<div className="meta-blog">
											<a href="#"> <i className="bi bi-calendar2-check"></i> {new Date(blog?.createdAt).toLocaleString()}</a>
										</div>
									</div>
									<div className="blog-content2">
										<h2 className="blog-title2">{blog?.heading}</h2>

										<p
											className="blog-desc2"
											dangerouslySetInnerHTML={{ __html: blog?.description }}
										></p>
									</div>

									{/* <div className="blogs-social-share">
										<span className="social-text">Social Share :</span>
										<ul className="social-share">
											<li><a href="#"><i className="bi bi-facebook"></i></a></li>
											<li><a href="#"><i className="bi bi-twitter"></i></a></li>
											<li><a href="#"><i className="bi bi-linkedin"></i></a></li>
											<li><a href="#"><i className="bi bi-pinterest"></i></a></li>
										</ul>
									</div> */}


								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	);
};

export default BlogDetails;