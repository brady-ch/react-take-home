import React, { useEffect, useState } from "react";
import { BsDownload, BsLink45Deg, BsPlayFill } from "react-icons/bs";

export default function SingleCampaign({ data }) {
  const imageURL = data ? data.campaign_icon_url : null;
  const campaignName = data ? data.campaign_name : null;
  const media = data ? data.medias : [];
  const pay = data ? data.pay_per_install : null;

  return (
    <div className="App">
      <div className="row borderForTop">
        <img className="logo" src={imageURL} alt={campaignName} />
        <div className="col textData">
          <div className="campaignTitle">{campaignName}</div>
          <div className="payPerInstall">{pay + " per install"}</div>
        </div>
      </div>

      <div className="row scroll">
        {media.map((el) => {
          return (
            <div className="col">
              <div className="imageWithOverlay">
                <img className="card" src={el.cover_photo_url} />
                <i className="playBtn">
                  {el.media_type === "video" ? <BsPlayFill size={40} /> : null}
                </i>
              </div>
              <div className="row cardBottom">
                <a
                  className="btn"
                  onClick={() => {
                    navigator.clipboard.writeText(el.tracking_link);
                    alert(`Copied: ${el.tracking_link}`);
                  }}
                >
                  <BsLink45Deg size={60} />{" "}
                  {/*This is just a react Icon component */}
                </a>
                <a
                  className="btn"
                  href={el.download_url}
                  download={campaignName + ".mp4"} //This doesnt work as it is not from the same origin, I haven't come across this error before and didn't have enough time to address it
                  target="_blank"
                >
                  <BsDownload size={60} />{" "}
                  {/*This is just a react Icon component */}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
