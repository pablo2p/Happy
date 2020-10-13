import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import mapMakerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    const [theme] = useState('light')

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Jequié</strong>
                    <span>Bahia</span>
                </footer>
            </aside>

            <Map
                center={[-13.8563495, -40.0910473]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer
                    url={`http://api.mapbox.com/styles/v1/mapbox/${theme}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap