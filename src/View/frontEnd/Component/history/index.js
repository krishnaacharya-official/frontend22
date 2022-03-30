import React from "react";
import {Button} from 'react-bootstrap';

// import { WidgetTitle, TagTitle } from "../../Component";
import WidgetTitle from "../widget-title"
import TagTitle from "../tag-title"
import HistoryItem from "../history-item";
import "./style.scss";

function History() {
  return (
    <>
    <TagTitle>History</TagTitle>
    <WidgetTitle href="/log">Purchase Log</WidgetTitle>
      
      <div className="log__wrap">
        <div className="log__recent border-bottom">
          <div className="log__avatar avatar--title">
            <div className="log__avatar__img avatar__img--recent">
              <i className="fa-solid fa-clock"></i>
            </div>
          </div>
          <div className="action__info">
            <div className="log__title">
              <div>6 Recent Donations</div>
              <div className="billing__type">48 hours</div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled">
          <HistoryItem active />
          <HistoryItem
            categoryName="Fish"
            categoryColor="hsla(0, 96.46%, 76.14%, 1.00)"
          />
          <HistoryItem categoryName="Captain" categoryColor="#000" />
        </ul>
        <div className="more__log">
          <Button variant="info" className="fs-6 pt-12p pb-12p w-100">Load More . . .</Button>
        </div>
      </div>
    </>
  );
}

export default History;
