'use client'
import Link from 'next/link';
import data from '../../Data/blog.json';
import Image from "next/image";
import { useState ,useEffect} from 'react';

const BlogGrid = () => {
	  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blog');
      if (!res.ok) throw new Error('Failed to fetch blogs');
      const data = await res.json();


      setTimeout(() => {
        setBlogs(data);
        setLoading(false);

        const totalPages = Math.ceil(data.length / blogsPerPage);
        if (currentPage > totalPages) setCurrentPage(1);
      }, 2000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
console.log(blogs,"blogsblogsblogsblogs")

  useEffect(() => {
    fetchBlogs();
    const interval = setInterval(fetchBlogs, 10000);
    return () => clearInterval(interval);
  }, []);

    return (
        <div className="blogs-section">
		<div className="container">
			<div className="row">
            {data.map((item, i) => (
				<div key={i} className="col-lg-4 col-md-6">
					<div className="single-blog-box">
						<div className="blog-thumb">
						<Image src={item.img} alt="img" width={379} height={280}   />
						</div>
						<div className="blog-content">
							<h2 className="blog-title"><Link href="/blog/blog-details">{item.title}</Link></h2>
							<p className="blog-desc">{item.desc}</p>
							<div className="blog-btn">
								<Link href="/blog/blog-details">Read More</Link>
							</div>
						</div>
					</div>
				</div>
                ))}

			</div>
		</div>
	</div>
    );
};

export default BlogGrid;