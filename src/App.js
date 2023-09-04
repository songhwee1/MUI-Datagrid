import styled from "@emotion/styled";
import "./App.css";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";

const DataGridContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 1200px;
  overflow: scroll;
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
