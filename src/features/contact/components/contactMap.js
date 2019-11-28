import React, { useState } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { withMedia } from "react-media-query-hoc";

import {fsc} from '../../../helper/fontcontrolhelper.js'

const ContactMap = props => {
  const { media } = props;
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(!showingInfoWindow);
  };

  const onMapClicked = props => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  return (
    <div className='' style={{ zIndex: 4 }}>
      <Map
        google={window.google}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
        initialCenter={{
          lat: 21.9426,
          lng: 96.1078
        }}
        onClick={onMapClicked}
      >
        <Marker onClick={onMarkerClick} name={"MUSE Salon & Spa"} />

        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <div>
            <span style={{ fontSize: fsc(media, 25) }}>
              {selectedPlace.name}
            </span>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBgru9d8427Q2J_iNok_8dybJ5HRxxoSw0"
})(withMedia(ContactMap));
