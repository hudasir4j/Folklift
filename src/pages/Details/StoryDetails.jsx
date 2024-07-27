import React, { useEffect, useState } from "react";
import "./Details.css";
import { Helmet } from 'react-helmet';
import { useParams } from "react-router-dom";
import { textdetails } from "../../assets/data/data";

export const StoryDetails = () => {
  const { id } = useParams();
  const [textdetail, setTextDetail] = useState(null);

  useEffect(() => {
    let textItem = textdetails.find((text) => text.id === parseInt(id));
    if (textItem) {
      setTextDetail(textItem);
    }
  }, [id]);

  const parseText = (text) => {
    const elements = [];
    const lines = text.split('\n');

    lines.forEach((line, index) => {
      const subheadingMatch = line.match(/\[h2\](.*?)\[\/h2\]/);
      const italicMatch = line.match(/\[i\](.*?)\[\/i\]/);
      const linkMatch = line.match(/\[a href="(.*?)"\](.*?)\[\/a\]/);

      if (subheadingMatch) {
        elements.push(<h2 key={index}>{subheadingMatch[1]}</h2>);
      } else if (italicMatch) {
        elements.push(<i key={index}>{italicMatch[1]}</i>);
      } else if (linkMatch) {
        elements.push(
          <a key={index} href={linkMatch[1]} target="_blank" rel="noopener noreferrer">
            {linkMatch[2]}
          </a>
        );
      } else {
        elements.push(<p key={index}>{line}</p>);
      }
    });

    return elements;
  };

  const paragraphs = textdetail?.desc ? parseText(textdetail.desc) : null;

  const renderContactInfo = () => {
    const contactMethods = textdetail?.contact;

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
                {type.charAt(0).toUpperCase() + type.slice(1)}: {type === 'website' || type === 'facebook' || type === 'LinkedIn' ? (
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
      {textdetail ? (
        <section className="singlePage">
          <Helmet>
            <meta charSet="utf-8" name="home page" content="Folklift is a non-profit student led initiative to promote SMALL BUSINESSES. Beginning with the BAY AREA, and targeting MUSLIM-OWNED businesses, Folklift aims to expand their influence through different regions and support more underrepresented small businesses." />
            <title>Folklift | {textdetail.title}</title>
            <link rel="link" href="/story" />
          </Helmet>
          <div className="containerDetails">
            <div className="writerInfo">
              <h3>{textdetail.author}</h3>
              <h3>{textdetail.date}</h3>
              <h3>{textdetail.location}</h3>
            </div>
            <img src={textdetail.cover} alt="" />
            <div className="left">
              <hr />
              <h1>{textdetail.title}</h1>
              <hr />
              {paragraphs}
              {renderContactInfo()}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
