import React, { Component } from 'react';
import ReactTable from 'react-table';

const TablaInsumos = () => {
    return (
        <ReactTable
            defaultPageSize={10}
            showPagination={false}
            noDataText={false}
            columns={[
                {
                    Header: 'Detalles de insumos',
                    headerClassName: "header-tab",
                    columns: [
                        {
                            Header: "Producción",
                            accessor: ""
                        },
                        {
                            Header: "Nombre",
                            accessor: ""
                        },
                        {
                            Header: "Disponible",
                            accessor: ""
                        },
                        {
                            Header: "Necesario",
                            accessor: ""
                        },
                        {
                            Header: "Necesidad semanal",
                            accessor: ""
                        }
                    ]
                }
            ]}
        />
    );
};
export default TablaInsumos