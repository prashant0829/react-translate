import i18next from "i18next";
import React from "react";
import { ExampleComponent } from "./ExampleComponent";

export default function App() {
  return (
    <div className="App">
      <button onClick={() => i18next.changeLanguage("en")}>English</button>
      <button onClick={() => i18next.changeLanguage("zh")}>Chinese</button>
      <button onClick={() => i18next.changeLanguage("arab")}>Arab</button>
      <button onClick={() => i18next.changeLanguage("es")}>Espanol</button>
      <ExampleComponent />
    </div>
  );
}
