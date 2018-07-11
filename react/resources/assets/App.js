import React from "react";
import ReactDOM from "react-dom";

import WeatherBoxList from "./js/components/weather-box-list";

const Index = () => {
    return <WeatherBoxList/>;
};

ReactDOM.render(
    <Index />,
    document.getElementById("app")
);