import React, { useEffect, useState } from "react"
import "./Details.css"
import { Helmet } from 'react-helmet';
import "../../components/Header/Header.css"
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

  const paragraphs = blogs?.desc ? (
    blogs.desc.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)
  ) : null;

  const renderContactInfo = () => {
    const contactMethods = blogs?.contact;

    if (!contactMethods) {
      return null;
    }

    return (
      <div className="ContactInfo">
        <div className="insideStuff">
            <h4>Contact Information</h4>
            <ul>
              {Object.entries(contactMethods).map(([type, value], index) => (
                <li key={index}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}: {type === 'website' || type==='facebook' ? (
                    <a href={value} target="_blank" rel="noopener noreferrer">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </li>
              ))}
            </ul>
        </div>
      </div>
    );
  };

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
              <h3>{blogs.location}</h3>
            </div>
            <img src={blogs.cover} alt="" />
            <div className="left">
              <hr />
              <h1>{blogs.title}</h1>
              <h3>{blogs.founder}</h3>
              <hr />
              {/* Render paragraphs directly, no need for <p> tags */}
              {paragraphs}
              {renderContactInfo()}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
