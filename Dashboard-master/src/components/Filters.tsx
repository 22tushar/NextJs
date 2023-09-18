import React, { useState } from 'react';

interface Entry {
  _id: string;
  end_year: number;
  topic: string;
  sector: string;
  region: string;
  pestle: string;
  source: string;
  swot: string;
  country: string;
  city: string;
  title: string;
}

interface DashboardProps {
  data: Entry[];
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const [endYearFilter, setEndYearFilter] = useState<number | null>(null);
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const [sectorFilter, setSectorFilter] = useState<string | null>(null);
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
  const [pestFilter, setPestFilter] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [swotFilter, setSwotFilter] = useState<string | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(null);
  const [cityFilter, setCityFilter] = useState<string | null>(null);

  const filteredData = data.filter(entry => {
    return (
      (!endYearFilter || entry.end_year === endYearFilter) &&
      (!topicFilter || entry.topic === topicFilter) &&
      (!sectorFilter || entry.sector === sectorFilter) &&
      (!regionFilter || entry.region === regionFilter) &&
      (!pestFilter || entry.pestle === pestFilter) &&
      (!sourceFilter || entry.source === sourceFilter) &&
      (!swotFilter || entry.swot === swotFilter) &&
      (!countryFilter || entry.country === countryFilter) &&
      (!cityFilter || entry.city === cityFilter) 
    );
  });

  return (
    <div>
      <select value={endYearFilter || ''} onChange={e => setEndYearFilter(Number(e.target.value) || null)}>
        <option value="">All End Years</option>
      </select>

      <select value={topicFilter || ''} onChange={e => setTopicFilter(e.target.value || null)}>
        <option value="">All Topics</option>
        <option value="oil">oil</option>
        <option value="market">Market</option>
        <option value="gdp">gdp</option>
        <option value="war">war</option>
        <option value="export">export</option>
      </select>

      <select value={sectorFilter || ''} onChange={e => setSectorFilter(e.target.value || null)}>
        <option value="">All Sectors</option>
        <option value="Government">Government</option>
        <option value="Environment">Environment</option>
        <option value="Aerospace & defence">Aerospace & defence</option>
        <option value="Energy">Energy</option>
        <option value="Retail">Retail</option>
      </select>

      <select value={regionFilter || ''} onChange={e => setRegionFilter(e.target.value || null)}>
        <option value="">All Regions</option>
        <option value="Northern America">Northern America</option>
        <option value="Western Asia">Western Asia</option>
        <option value="Central America">Central America</option>
        <option value="World">World</option>
        <option value="Western Africa">Western Africa</option>
        <option value="Northern America">Northern America</option>
        {/* Add options for available regions */}
      </select>

      <select value={pestFilter || ''} onChange={e => setPestFilter(e.target.value || null)}>
        <option value="">All PESTs</option>
        <option value="Environmental">Environmental</option>
        <option value="Economic">Economic</option>
        <option value="Political">Political</option>

        {/* Add options for available PESTs */}
      </select>

      <select value={sourceFilter || ''} onChange={e => setSourceFilter(e.target.value || null)}>
        <option value="">All Sources</option>
        <option value="sustainablebrands.com">sustainablebrands.com</option>
        <option value="Vanguard News">Vanguard News</option>
        <option value="SBWire">SBWire</option>
        <option value="Avi Melamed">Avi Melamed</option>
        <option value="WSJ">WSJ</option>
        {/* Add options for available sources */}
      </select>

      {/* Add controls for Country, City, or any other filters as needed */}
      <h4>Enter Country</h4>
      <input
        type="text"
        value={countryFilter || ''}
        onChange={e => setCountryFilter(e.target.value || null)}
        placeholder="Country"
      />


      <ul>
        {filteredData.length == 1 && filteredData.map(entry => (
          <li key={entry._id}>Title: {entry.title}</li>
        ))}
      </ul>
      <ul>
        {filteredData.length == 1 &&filteredData.map(entry => (
          <li key={entry._id}>Topic: {entry.topic}</li>
        ))}
      </ul>
      <ul>
        {filteredData.length == 1 &&filteredData.map(entry => (
          <li key={entry._id}>Region: {entry.region}</li>
        ))}
      </ul>
      <ul>
        {filteredData.length == 1 &&filteredData.map(entry => (
          <li key={entry._id}>Source: {entry.source}</li>
        ))}
      </ul>
      <ul>
        {filteredData.length == 1 &&filteredData.map(entry => (
          <li key={entry._id}>Swot: {entry.swot}</li>
        ))}
      </ul>
      <ul>
        {filteredData.length == 1 &&filteredData.map(entry => (
          <li key={entry._id}>Pestle: {entry.pestle}</li>
        ))}
      </ul>
      <ul>
        {filteredData.length == 1 &&filteredData.map(entry => (
          <li key={entry._id}>Sector: {entry.sector}</li>
        ))}
      </ul>
    

    </div>
  );
};

export default Dashboard;
