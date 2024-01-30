import React, { useEffect, useState } from "react"
import "./Details.css"
import { Helmet } from 'react-helmet';
import { useParams } from "react-router-dom"
import { textdetails } from "../../assets/data/data"

export const StoryDetails = () => {
  const { id } = useParams();
  const [textdetail, setTextDetail] = useState(null);

  useEffect(() => {
    let textItem = textdetails.find((text) => text.id === parseInt(id));
    if (textItem) {
      setTextDetail(textItem);
    }
  }, [id]);

  const paragraphs = textdetail?.desc ? (
    textdetail.desc.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)
  ) : null;

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
      {textdetail ? (
        <section className="singlePage">
          <Helmet>
              <meta charSet="utf-8" name='home page' content='Folklift is a non-profit student led initiative to promote SMALL BUSINESSES. Beginning with the BAY AREA, and targetting MUSLIM-OWNED businesses, Folklift aims to expand their influence through different regions and support more underrepresented small businesses.'/>
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
