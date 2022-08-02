import React, { useState, useEffect } from "react";
import { Button, Dropdown, FormControl, InputGroup } from "react-bootstrap";
import { ReactComponent as SearchIcon } from "../../../../../assets/svg/search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./style.scss";
import helper from "../../../../../Common/Helper";
import ReactMapboxGl, { Layer, Feature, Marker, ScaleControl, GeoJSONLayer, Source } from 'react-mapbox-gl';

import mapboxgl, { MapTouchEvent } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import { useSelector, useDispatch } from "react-redux";
import { setDistance, setLatLong, setLocationFilter } from "../../../../../user/user.action"

// require('mapbox-gl/dist/mapbox-gl.css');

mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line


let Map = ReactMapboxGl({
  accessToken:
    helper.MapBoxPrimaryKey
});




const GeoLocation = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()


  const mapStyles = {
    "londonCycle": "mapbox://styles/mapbox/light-v9",
    "light": "mapbox://styles/mapbox/light-v9",
    "dark": "mapbox://styles/mapbox/dark-v9",
    "basic": "mapbox://styles/mapbox/basic-v9",
    "outdoor": "mapbox://styles/mapbox/outdoors-v10"

  };



  const [state, setState] = useState({
    locked: true
  })

  const [objectVal, setObjectVal] = useState()

  const [location, setLocation] = useState({
    organizationLocation: "",
    locationName: "",
    lng: 0,
    lat: 0,
    zoomlevel: 13

  })
  // const scale = new mapboxgl.ScaleControl({
  //   unit: "imperial"
  // });
  // scale.setUnit("metric");
  // Map.addControl(scale)
  // scale.setUnit('metric')
  // console.log(scale)
  // document.getElementById("scale").appendChild(scale.onAdd(Map));
  // scale.onAdd(Map)
  // 





  const ToggleButton = React.forwardRef(({ children, onClick }, ref) => {
    return (
      <Button
        ref={ref}
        variant="link"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        className="p-0 icon__btn text-decoration-none"
      >
        {children}
      </Button>
    );
  });

  const toggleState = () => {
    if (state.locked) {



      setState({ ...state, locked: false })
    } else {
      setLocation({
        ...location,
        lat: user.lat ? Number(user.lat) : 0,
        lng: user.lng ? Number(user.lng) : 0,
        zoomlevel: 13
      })
      setState({ ...state, locked: true });
    }

  };

  const sugg = (result, lat, lng, text) => {
    // console.log("result", result)
    // console.log("lat", lat)
    // console.log("lng", lng)
    // console.log("text", text)

    // setLocation({
    //   ...stateData,
    //   address: result,
    //   lat: lat,
    //   lng: lng,

    // })

    setLocation({
      ...location,
      locationName: result,
      lat: lat,
      lng: lng
    })

    let locationData = {}
    locationData.lat = lat
    locationData.lng = lng
    dispatch(setLatLong(locationData))

  }

  useEffect(() => {


    setLocation({
      ...location,
      organizationLocation: user.countrySortName,
      lat: user.lat ? Number(user.lat) : 0,
      lng: user.lng ? Number(user.lng) : 0
    })



  }, [user])


  let Obj = {
    'circle-radius': 100,
    'circle-color': '#E54E52',
    'circle-opacity': 0.8
  }



  useEffect(() => {

    if (objectVal?.includes("© Mapbox ")) {
      const after_ = objectVal?.substring(objectVal.indexOf('map') + 3);
      dispatch(setDistance(after_))

    } else {
      dispatch(setDistance(objectVal))

    }

    // console.log(objectVal)

    // Map.setPaintProperty("point-blip", "circle-radius", 8)
    // Map.on("load", () => {
    //   Map.addLayer({
    //     id: "snotel-sites-circle",
    //     type: "circle",
    //     source: "snotel-sites",
    //     paint: {
    //       "circle-color": "#1d1485",
    //       "circle-radius": 8,
    //       "circle-stroke-color": "#ffffff",
    //       "circle-stroke-width": 2,
    //     },
    //   })
    // })


    // console.log(Map)

  }, [objectVal])





  return (
    <>
      <Dropdown className="d-flex" autoClose="outside" >
        <Dropdown.Toggle as={ToggleButton}>
          <span className="d-flex align-items-center icon">
            <FontAwesomeIcon icon={solid("circle-location-arrow")} />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="geo__dropdown dropdown-top-arrow w-310">
          <div className="dropdown__inner position-relative">
            <div className="geo_dropdown-top d-flex align-items-center">
              <InputGroup className="input-group__alpha">
                <InputGroup.Text>
                  <SearchIcon />
                </InputGroup.Text>
                {/* <FormControl placeholder="Search" /> */}
                <MapboxAutocomplete
                  publicKey={helper.MapBoxPrimaryKey}
                  inputClass='form-control search'
                  // query={location.locationName}
                  // defaultValue={location.locationName}
                  onSuggestionSelect={sugg}
                  country={location.organizationLocation}
                  resetSearch={false} />
              </InputGroup>

              <div className="geo__distance" id="scale">
                <div className="mapboxgl-ctrl mapboxgl-ctrl__scale me-1" style={{ fontSize: 'small' }}>
                  {/* {objectVal} */}
                  {user.distance}
                </div>
              </div>

              <div className="geo__lock d-flex align-items-center">
                <Button
                  variant="link"
                  className="p-0 text-decoration-none mx-auto"
                  onClick={() => toggleState()}
                >
                  <span className="d-flex align-items-center icon">
                    {state.locked ? (
                      <FontAwesomeIcon icon={light('lock-open')} />
                    ) : (
                      <FontAwesomeIcon icon={solid('lock')} />
                    )}
                  </span>
                </Button>
              </div>
            </div>
            <div className="mapboxgl-map">
              <Map
                style={mapStyles.outdoor}
                zoom={[location.zoomlevel]}
                onRender={(e) => {
                  setObjectVal(e.boxZoom._container.outerText)

                }} //boxZoom._container.outerText
                containerStyle={{
                  height: '300px',
                  width: '310px'
                }}
                center={[location.lng, location.lat]}

              // onStyleLoad={onStyleLoad}

              >
                <Layer type="circle" id="circle"

                  paint={Obj}
                  // layout={{ 'icon-image': 'custom-marker' }}
                  layout={{ "icon-image": "harbor-15" }}

                >

                  <Feature coordinates={[location.lng, location.lat]} />
                </Layer>

                {/* <Source
                  id="point"
                  geoJsonSource={{
                    type: "geojson",
                    data: {
                      type: "Point",
                      coordinates: [0, 0]
                    }
                  }}
                /> */}


                {/* <Layer
                  id="point-blip"
                  type="circle"
                  sourceId="point"
                  paint={{
                    "circle-radius": 8,
                    "circle-radius-transition": { duration: 0 },
                    "circle-opacity-transition": { duration: 0 },
                    "circle-color": "#007cbf"
                  }}
                /> */}
                {/* <Layer
                  id="point"
                  type="circle"
                  sourceId="point"
                  paint={{
                    "circle-radius": 8,
                    "circle-color": "#007cbf"
                  }}
                /> */}
                <ScaleControl />


                <Marker
                  coordinates={[location.lng, location.lat]}
                  anchor="bottom">
                  <div className="mapboxgl-user-location-dot"></div>
                </Marker>

              </Map>

            </div>

            <div className="geo__slider">

              <Slider
                handleStyle={{
                  width: "26px",
                  height: "26px",
                  border: "none",
                  background: "#3596F3",
                  marginTop: "-10px",
                }}
                min={1}
                max={150}
                value={location.zoomlevel * 10}
                railStyle={{ backgroundColor: "#C7E3FB", height: "8px" }}
                disabled={!state.locked}
                onChange={(e) => setLocation({ ...location, zoomlevel: e / 10 })}
              />
            </div>

            <div className="d-grid gap-2 p-2">
              <Button variant="success" onClick={() => dispatch(setLocationFilter(true))}>
                Update Results {user.locationProductCount > 0 ? ' ( ' + user.locationProductCount + ' ) ' : ''}
              </Button>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default GeoLocation;
