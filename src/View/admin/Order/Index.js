import {
    Card,
    Table,
    Stack,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination
} from '@mui/material';
import plusFill from '@iconify/icons-eva/plus-fill';
import trash from '@iconify/icons-eva/trash-2-fill';
import editfill from '@iconify/icons-eva/edit-fill';
import Label from '../../../components/Label';

import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";


import Page from '../../../components/Page';

export default function Index(props) {

    const columns = [

        { name: "Name", selector: "userDetails.name", sortable: true },
        {
            name: "Payment Status",
            cell: (row) => <>

                <Label
                    variant="ghost"
                    color={(row.transactionStatus === "succeeded" && 'success') || 'error'}
                >
                    {row.transactionStatus}
                </Label>
            </>,
            ignoreRowClick: true,
            allowOverflow: true,
        },
        {
            name: "Amount",
            cell: (row) => <>
                <span>${row.total}</span>
            </>,
            ignoreRowClick: true,
            allowOverflow: true,
        },


    ];
    const data = [];
    if (props.orderList && props.orderList.length > 0) {
        props.orderList.map((order) => {
            data.push(order);
        },
        );
    };


    const tableData = {
        columns,
        data,
        export: false,
        print: false,
    };
    return (

        <Page title="Order | Minimal-UI">
            {console.log(data)}

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Order List
                    </Typography>
                    {/* <Button
                        variant="contained"
                        startIcon={<Icon icon={plusFill} />}
                        onClick={() => props.openModel()}
                    >
                        Add Category
                    </Button> */}
                </Stack>
                <Card>
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            columns={columns}
                            data={data}
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>

                </Card>
            </Container>
        </Page>
    )

}