import styled from "@emotion/styled";
import "./App.css";
import { DataGridPremium } from "@mui/x-data-grid-premium";

const GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
  { id: 4, col1: "Hello", col2: "World" },
  { id: 5, col1: "DataGridPro", col2: "is Awesome" },
  { id: 6, col1: "MUI", col2: "is Amazing" },
  { id: 7, col1: "Hello", col2: "World" },
  { id: 8, col1: "DataGridPro", col2: "is Awesome" },
  { id: 9, col1: "MUI", col2: "is Amazing" },
];

const GridColDef = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

const DataGridContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: scroll;
`;

const App = () => {
  return (
    <DataGridContainer>
      <DataGridPremium rows={GridRowsProp} columns={GridColDef} />
    </DataGridContainer>
  );
};

export default App;
