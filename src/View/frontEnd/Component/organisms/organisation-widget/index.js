import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button, FormControl, InputGroup } from "react-bootstrap";

// import { WidgetTitle, TagTitle, ToggleSwitch } from "../../Component";
import WidgetTitle from "../../atoms/widget-title"

import TagTitle from "../../atoms/tag-title"

import ToggleSwitch from '../../atoms/toggle-switch'

import OrganisationItem from "../../molecules/org-item";

import "./style.scss";

function OrganisationWidget() {
  const [check, setCheck] = useState(0);
  return (
    <>
      <TagTitle>Organisation</TagTitle>
      <div className="mb-2">
        <WidgetTitle>Items</WidgetTitle>
      </div>

      <div className="d-sm-flex align-items-center mb-1 pb-2 border-bottom">
        <div className="d-flex align-items-center flex-grow-1 mb-2 mb-sm-0">
          <span>Donate:</span>
          <InputGroup className="donate__control">
            <InputGroup.Text className="">
              $
            </InputGroup.Text>
            <FormControl type="number" />
          </InputGroup>

          <div className="d-flex align-items-center ms-auto">
            <span className="fs-7 me-1">Tax Receipt?</span>
            <ToggleSwitch
              isOn={check}
              handleToggle={() => setCheck(!check)}
              colorOne="#06D6A0"
              colorTwo="#efefef"
            />
          </div>
        </div>
        <Button variant="outline-primary" className="organisation__cart-btn">
          Add to cart (0)
        </Button>
      </div>
      <div className="note note__info mb-12p">
        <FontAwesomeIcon
          icon={regular("circle-info")}
          className="text-info mr-6p"
        />
        Item availability will be confirmed at checkout.
      </div>
      <ul className="list-unstyled mb-0">
        <OrganisationItem />
        <OrganisationItem />
        <OrganisationItem />
      </ul>
    </>
  );
}

export default OrganisationWidget;
