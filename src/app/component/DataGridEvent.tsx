// components/DataGridView.tsx

import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface DataGridViewProps {
  rows: { id: number; no: number; event: string; achievement: string }[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "no", headerName: "No", width: 150 },
  { field: "event", headerName: "Event", width: 150 },
  { field: "achievement", headerName: "Achievement", width: 150 },
];

const DataGridView: React.FC<DataGridViewProps> = ({ rows }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataGridView;
