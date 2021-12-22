import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = {
  lat: 51.505,
  lnt: -0.09,
};

const OrderLocalization = () => {
  return (
    <div className="orderLocalization-container">
      <div className="orderLocalization-content">
        <h3>Selecione onde o pedido deve ser entregue:</h3>
        <div className="orderLocalization-filter">

        </div>
          <MapContainer
            center={[-23.0162642, -47.1121476]}
            zoom={8}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
  );
};

export default OrderLocalization;
