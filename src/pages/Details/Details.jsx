import React, { useEffect, useState } from "react"
import "./Details.css"
import { Helmet } from 'react-helmet';
import "../../components/Header/Header.css"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { blog } from "../../assets/data/data"

export const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogItem = blog.find((blog) => blog.id === parseInt(id));
    if (blogItem) {
      setBlogs(blogItem);
    }
  }, [id]);

  // Check if blogs and blogs.desc exist before attempting to split
  const paragraphs = blogs?.desc ? (
    blogs.desc.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)
  ) : null;

  return (
    <>

              

      {blogs ? (


          

        <section className="singlePage">
            <Helmet>
                <meta charSet="utf-8" name='home page' content='Folklift is a non-profit student led initiative to promote SMALL BUSINESSES. Beginning with the BAY AREA, and targetting MUSLIM-OWNED businesses, Folklift aims to expand their influence through different regions and support more underrepresented small businesses.'/>
                <title>Folklift | {blogs.title}</title>
                <link rel="link" href="/" />
            </Helmet>
          <div className="containerDetails">
            <div className="writerInfo">
              <h3>{blogs.author}</h3>
              <h3>{blogs.date}</h3>
            </div>
            <img src={blogs.cover} alt="" />
            <div className="left">
              <hr />
              <h1>{blogs.title}</h1>
              <h3>{blogs.founder}</h3>
              <hr />
              {/* Render paragraphs directly, no need for <p> tags */}
              {paragraphs}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
