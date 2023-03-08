import React, { useState } from "react";
import { FormBuilder as FormBuilderIo, Formio } from "react-formio";
import { formIoData } from "./consts";
import "./style.css";
import "formiojs/dist/formio.full.css";

export default function App() {
  const [formData, setFormData] = useState(formIoData);

  const printResult = () => {
    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
      console.log(document.getElementById("formio-result"));
    });
  };

  return (
    <div className="App">
        <div>
            <FormBuilderIo
            form={formIoData}
            onChange={schema => setFormData(schema)}
            onSubmit={(data) => { console.log(data); }}
            saveForm={(data) => setFormData(data)}
            saveText="Save Form"
            onSubmitDone={(data) => console.log(data)}
            />
            
            <div style={{ display: "none" }}>
                <div id="formio-result" />
            </div>
            <button className="green" onClick={printResult}>
            display result
            </button>
        </div>
    </div>
  );
}
