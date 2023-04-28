import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import Gallery from "../pexels";


function explorar () {

    return (
        <div className="appSecond">
            <Gallery />
        </div>
    );



}

export default explorar;