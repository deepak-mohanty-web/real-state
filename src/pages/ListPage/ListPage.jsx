import React from "react";
import "./ListPage.scss";
import { listData } from "../../store/dummydata";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/card/Card";
import GoogleMap from "../../components/Googlemap/GoogleMap";


const ListPage = () => {
  const data = listData;
  return (
    <div className="listpage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map(item=>(
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
          <GoogleMap items={data} />
      </div>
    </div>
  );
};

export default ListPage;
