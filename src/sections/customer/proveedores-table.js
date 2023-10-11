import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ProveedoresTable = ({ items }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phone', headerName: 'Teléfono', flex: 1 },
    { field: 'address', headerName: 'Dirección', flex: 1 },
    { field: 'createdAt', headerName: 'Fecha de Creación', flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={10} // Número de filas por página
        checkboxSelection // Para seleccionar filas
        autoHeight
      />
    </div>
  );
};

export default ProveedoresTable;

