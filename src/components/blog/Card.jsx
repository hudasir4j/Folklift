import React, { useState } from "react";
import "./Blog.css";
import { articles } from "../../assets/data/data";
import { AiOutlineTags } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Card = () => {
  const [copiedStates, setCopiedStates] = useState(Array(articles.length).fill(false));

  const handleClick = (index) => {
    const newCopiedStates = [...copiedStates];
    newCopiedStates[index] = true;
    setCopiedStates(newCopiedStates);

    setTimeout(() => {
      newCopiedStates[index] = false;
      setCopiedStates(newCopiedStates);
    }, 10);
  };

  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {articles.map((item, index) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <div className="outlineTag">
                    <AiOutlineTags className="icon" />
                    <a href="/">#{item.category}</a>
                  </div>
                </div>
                <Link to={`/details/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>
                  <i>{item.desc.slice(0, 180)}...</i>
                </p>
                {copiedStates[index] && (
                  <span className="urlMessage">URL copied to clipboard!</span>
                )}
                <div className="date">
                  <AiOutlineClockCircle className="icon" /> <label htmlFor="">{item.date}</label>
                  <CopyToClipboard text={`folklift.netlify.app/details/${item.id}`}>
                    <button className="linkCopied" onClick={() => handleClick(index)}>
                      <AiOutlineShareAlt className="icon" /> <label htmlFor="">SHARE</label>
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
