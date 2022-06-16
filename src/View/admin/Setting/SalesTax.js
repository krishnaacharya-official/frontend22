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
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Page from '../../../components/Page';
import backfill from '@iconify/icons-eva/arrow-left-fill';
import settingApi from '../../../Api/admin/setting';
import React, { useEffect, useState } from 'react';
import FrontLoader from '../../../Common/FrontLoader';
import ToastAlert from '../../../Common/ToastAlert';
import { hasPermission } from '../../../Common/Helper';
import salesTaxApi from '../../../Api/admin/salesTax';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

export default function SalesTax(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const adminAuthToken = localStorage.getItem('adminAuthToken');
    const adminData = JSON.parse(localStorage.getItem('adminData'));
    const [taxList, setTaxList] = useState([])
    const [editCountryId, setEditCountryId] = useState(0)


    const getCountryTaxList = async () => {
        const getTaxList = await salesTaxApi.list(adminAuthToken)
        if (getTaxList) {
            if (getTaxList.data.success) {
                setTaxList(getTaxList.data.data)
            }
        }

    }


    useEffect(() => {
        (async () => {
            await getCountryTaxList()
        })()
    }, [])

    const columns = [

        { name: "Country", selector: "countryDetails.country", sortable: true },

        {
            name: "Salex Tax",
            cell: (row) => <>
                {
                    editCountryId === row.countryId ?
                        <input type='text' value={row.salesTax} className="form-control" />
                        :
                        <span>{row.salesTax} %</span>

                }
            </>,
            ignoreRowClick: true,
            allowOverflow: true,
        },
        {
            name: "Status",
            cell: (row) => <>

                {
                    editCountryId === row.countryId ?
                        <div className='p-2'>
                            <label className="--switch mt-1">
                                <input type="checkbox" id="dashboardStats" checked={row.all} name="all" onClick={(e) => alert(e.target.checked)} />
                                <span className="--slider">
                                    <i className="fa fa-check"></i>
                                    <i className="fa fa-times"></i>
                                </span>
                            </label>
                        </div>
                        :
                        <Label
                            variant="ghost"
                            color={(row.all && 'success') || 'error'}
                        >
                            {row.all ? "Active" : "Inactive"}
                        </Label>
                }


            </>,
            ignoreRowClick: true,
            allowOverflow: true,
        },


        {
            name: "Actions",
            cell: (row) => <>
                {
                    editCountryId !== row.countryId ?
                        <>
                            <button className="btn btn-sm btn-primary" onClick={() => setEditCountryId(row.countryId)}><Icon icon={editfill} /></button>&nbsp;
                        </>

                        :
                        <>
                            <button className="btn btn-sm btn-primary" onClick={() => setEditCountryId(0)}><Icon icon='fa-solid:save' /></button>&nbsp;
                        </>

                }

                <button className="btn btn-info btn-sm" onClick={(e) => props.deleteCategory(row._id)}>State</button>

            </>,
            ignoreRowClick: true,
            allowOverflow: true,
            // button: true,
        },
    ];


    const data = [];
    if (taxList && taxList.length > 0) {
        taxList.map((tax) => {
            data.push(tax);
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
        <>
            <FrontLoader loading={loading} />
            <Page title="Setting |Sales-Tax">

                <Container>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            Sales Tax
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<Icon icon={backfill} />}
                            onClick={() => navigate('/admin/setting')}
                        >
                            Back
                        </Button>
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

        </>
    )

}