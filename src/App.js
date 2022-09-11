import React from "react";
import Alert from "./component/Alert";

function App() {

    return(
        <div className="container p-4">
            <Alert type="primary" text="what is love?" />
            <Alert type="warning" text="Love is..." />
            <Alert type="danger" text="what is love?" />
            <Alert text="Love is..." />

        </div>
    )
}

export default App;