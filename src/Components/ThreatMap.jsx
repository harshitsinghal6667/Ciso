// src/Components/ThreatMap.jsx
import { useEffect, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";

function ThreatMap() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    d3.json("/dist/data/countries-110m.json").then((topology) => {
      const geoData = feature(topology, topology.objects.countries).features;
      setCountries(geoData);
    });
  }, []);

  const projection = d3.geoMercator().scale(100).translate([500 / 2, 300 / 1.5]);
  const pathGenerator = d3.geoPath().projection(projection);

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">Global Threat Map</h2>
      <svg width={500} height={300}>
        {countries.map((country, idx) => (
          <path
            key={idx}
            d={pathGenerator(country)}
            fill="#ccc"
            stroke="#333"
            strokeWidth={0.5}
            onClick={() => alert(`Clicked: ${country.properties.name}`)}
          />
        ))}
      </svg>
    </div>
  );
}

export default ThreatMap;
