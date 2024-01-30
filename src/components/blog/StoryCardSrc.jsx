import React from "react";
import './ArticleCard.css'
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ArticleCard = ({ article, isCopied, onCopy }) => {
  return (
    <div className="box boxItems" key={article.id}>
      <div className="img">
        <img src={article.cover} alt="" />
      </div>
      <div className="details">
        <div className="tag">
          <div className="outlineTag">
            <AiOutlineTags className="icon" />
            <a href="/">#{article.categories.join(", ")}</a>
          </div>
        </div>
        <Link to={`/story/${article.id}`} className="link">
          <h3>{article.title}</h3>
        </Link>
        <p>
          <i>{article.desc.slice(0, 180)}...</i>
        </p>
        {isCopied && (
          <span className="urlMessage">URL copied to clipboard!</span>
        )}
        <div className="date">
          <AiOutlineClockCircle className="icon" />{" "}
          <label htmlFor="">{article.date}</label>
          <CopyToClipboard text={`folklift.netlify.app/details/${article.id}`}>
            <button className="linkCopied" onClick={onCopy}>
              <AiOutlineShareAlt className="icon" /> <label htmlFor="">SHARE</label>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
