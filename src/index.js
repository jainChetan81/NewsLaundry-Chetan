import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter basename="/NewsLaundry-Chetan">
        <Suspense
            fallback={
                <div className="text-center m-5 text-uppercase">Loading...</div>
            }>
            <App />
        </Suspense>
    </BrowserRouter>,
    document.getElementById("root")
);
