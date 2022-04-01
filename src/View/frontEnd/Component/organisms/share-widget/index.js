import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import { Button } from "react-bootstrap";

import "./style.scss";

function ShareWidget(props) {
  const [active, setActive] = useState(0);
  return (
    <div className="position-relative">
      <Button variant="link" onClick={() => setActive(!active)} className="btn__share">
        <FontAwesomeIcon icon={regular("share-nodes")} />
      </Button>
      {active ? (
        <div className="share-dialog share-dialog--post">
          <div className="sh__box">
            <div className="sh__header">
              <Button
                variant="link"
                onClick={()=>setActive(!active)}
                className="icon icon--close"
              >
                <FontAwesomeIcon icon={regular("close")} />
              </Button>
            </div>
            <div className="sh__header">
              <div>Share this post.</div>
            </div>
            <div className="sh__list">
              <a
                href="https://www.twitter.com"
                className="sh__type sh__type--twitter"
              >
                <FontAwesomeIcon icon={brands("twitter")} />
              </a>
              <a
                href="https://www.twitter.com"
                className="sh__type sh__type--facebook"
              >
                <FontAwesomeIcon icon={brands("facebook")} />
              </a>
              <a
                href="https://www.twitter.com"
                className="sh__type sh__type--email"
              >
                <FontAwesomeIcon icon={solid("envelope")} />
              </a>
              <a
                href="https://www.twitter.com"
                className="sh__type sh__type--linkedin"
              >
                <FontAwesomeIcon icon={brands("linkedin-in")} />
              </a>
            </div>
            <div className="sh__header share__header--sub">
              <div>Or copy link</div>
            </div>
            <div className="sh__link">
              <a href="#" className="icon icon--secure">
                <FontAwesomeIcon icon={solid("lock")} />
              </a>
              <div className="sh__url">
                https://codepen.io/ayoisaiah/peerberberbwerb
              </div>
              <Button variant="outline-info">Copy Link</Button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShareWidget;
