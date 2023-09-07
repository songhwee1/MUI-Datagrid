import React from "react";
import styled from "@emotion/styled";
import "./App.css";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";

const DataGridContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 1200px;
  overflow: scroll;
  .css-v4u5dn-MuiInputBase-root-MuiInput-root {
    border: 1px solid #e2e2e1 !important;
  }
  .css-v4u5dn-MuiInputBase-root-MuiInput-root:before {
    border-bottom: none !important;
  }
  .css-v4u5dn-MuiInputBase-root-MuiInput-root:after {
    border-bottom: none !important;
  }
  .css-aqpgxn-MuiFormLabel-root-MuiInputLabel-root {
    color: #fff !important;
  }
`;

const App = () => {
  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 100,
  });

  return (
    <DataGridContainer>
      <DataGridPremium
        unstable_headerFilters
        slots={{
          headerFilterMenu: null,
        }}
        {...data}
        initialState={{
          ...data.initialState,
          columns: {
            columnVisibilityModel: {
              avatar: false,
              id: false,
            },
          },
        }}
      />
    </DataGridContainer>
  );
};

export default App;
