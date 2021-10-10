import {
  Map as GoogleMap,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
} from "google-maps-react";
import { useState } from "react";

const Map = (props) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [activeTooltip, setActiveTooltip] = useState(false);

  const { selectedRestaurant } = props;

  const position = {
    lat: selectedRestaurant?.latitude,
    lng: selectedRestaurant?.longitude,
  };

  function handleMarkerMouseover(props, marker) {
    setActiveMarker(marker);
    setActiveTooltip(true);
  }

  return (
    <GoogleMap
      onMouseout={() => setActiveTooltip(false)}
      google={props.google}
      zoom={14}
      center={position}
    >
      <Marker
        onMouseover={handleMarkerMouseover}
        name={"Current location"}
        position={position}
      />
      <InfoWindow
        marker={activeMarker}
        visible={activeTooltip}
        onClose={() => null}
      >
        <span>{selectedRestaurant?.name}</span>
      </InfoWindow>
    </GoogleMap>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9fhTvm068oPCMCOcvNX_FmrnR1TbS0Gk",
})(Map);
