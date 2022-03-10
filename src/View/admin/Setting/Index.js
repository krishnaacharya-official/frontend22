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

import { Modal, Row, Tab, Col, Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import trash from '@iconify/icons-eva/trash-2-fill';
import editfill from '@iconify/icons-eva/edit-fill';
import Label from '../../../components/Label';
import Page from '../../../components/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import '../../../assets/css/style.css';
import { Link } from 'react-router-dom';

export default function Settings() {
    const cardStyle ={
        // borderRadius:'1.25rem'
    }
    return (
        <>

            <Page title="Settings | Minimal-UI">

                <Container>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                        <Typography variant="h4" gutterBottom>
                            Settings
                        </Typography>

                    </Stack>
              
                        <div className="row-cols-1 row-cols-md-2 g-2 row">
                            <div className="col">
                                <div className="hover-scale-up h-100 card" style={cardStyle}>
                                    <div className="card-body">
                                        <div className="g-0 row">
                                            <div className="col-auto">
                                                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center  mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cs-icon gear text-primary">
                                                        <path d="M8.32233 3.75427C8.52487 1.45662 11.776 1.3967 11.898 3.68836C11.9675 4.99415 13.2898 5.76859 14.4394 5.17678C16.4568 4.13815 18.0312 7.02423 16.1709 8.35098C15.111 9.10697 15.0829 10.7051 16.1171 11.4225C17.932 12.6815 16.2552 15.6275 14.273 14.6626C13.1434 14.1128 11.7931 14.9365 11.6777 16.2457C11.4751 18.5434 8.22404 18.6033 8.10202 16.3116C8.03249 15.0059 6.71017 14.2314 5.56062 14.8232C3.54318 15.8619 1.96879 12.9758 3.82906 11.649C4.88905 10.893 4.91709 9.29487 3.88295 8.57749C2.06805 7.31848 3.74476 4.37247 5.72705 5.33737C6.85656 5.88718 8.20692 5.06347 8.32233 3.75427Z"></path>
                                                        <path d="M10 8C11.1046 8 12 8.89543 12 10V10C12 11.1046 11.1046 12 10 12V12C8.89543 12 8 11.1046 8 10V10C8 8.89543 8.89543 8 10 8V8Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex flex-column ps-card justify-content-start">
                                                    <div className="d-flex flex-column justify-content-center mb-2"><Link className="heading text-primary stretched-link" to="/admin/setting/general">General</Link></div>
                                                    {/* <div className="text-alternate">Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy sesame snaps lollipop croissant.</div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col">
                                <div className="hover-scale-up h-100 card" style={cardStyle}>
                                    <div className="card-body">
                                        <div className="g-0 row">
                                            <div className="col-auto">
                                                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center  mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cs-icon building text-primary">
                                                        <path d="M5 5.5C5 4.09554 5 3.39331 5.33706 2.88886C5.48298 2.67048 5.67048 2.48298 5.88886 2.33706C6.39331 2 7.09554 2 8.5 2H11.5C12.9045 2 13.6067 2 14.1111 2.33706C14.3295 2.48298 14.517 2.67048 14.6629 2.88886C15 3.39331 15 4.09554 15 5.5V14.5C15 15.9045 15 16.6067 14.6629 17.1111C14.517 17.3295 14.3295 17.517 14.1111 17.6629C13.6067 18 12.9045 18 11.5 18H8.5C7.09554 18 6.39331 18 5.88886 17.6629C5.67048 17.517 5.48298 17.3295 5.33706 17.1111C5 16.6067 5 15.9045 5 14.5V5.5Z"></path>
                                                        <path d="M12 18V15.75C12 15.0478 12 14.6967 11.8315 14.4444C11.7585 14.3352 11.6648 14.2415 11.5556 14.1685C11.3033 14 10.9522 14 10.25 14H9.75C9.04777 14 8.69665 14 8.44443 14.1685C8.33524 14.2415 8.24149 14.3352 8.16853 14.4444C8 14.6967 8 15.0478 8 15.75V18"></path>
                                                        <path d="M8 5H8.5M8 8H8.5M8 11H8.5M11.5 5H12M11.5 8H12M11.5 11H12"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex flex-column ps-card justify-content-start">
                                                    <div className="d-flex flex-column justify-content-center mb-2"><a className="heading text-primary stretched-link" href="/settings/general">Other 1</a></div>
                                                    <div className="text-alternate">Cheesecake bonbon chocolate bar. Tart sugar plum candy canes toffee sweet roll muffin oat cake. Chupa chups cookie icing tart tiramisu chocolate cake.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="hover-scale-up h-100 card" style={cardStyle}>
                                    <div className="card-body">
                                        <div className="g-0 row">
                                            <div className="col-auto">
                                                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center  mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cs-icon folders text-primary">
                                                        <path d="M18 15 18 5C18 4.06812 18 3.60218 17.8478 3.23463 17.6448 2.74458 17.2554 2.35523 16.7654 2.15224 16.3978 2 15.9319 2 15 2 14.0681 2 13.6022 2 13.2346 2.15224 12.7446 2.35523 12.3552 2.74458 12.1522 3.23463 12 3.60217 12 4.06812 12 5L12 15C12 15.9319 12 16.3978 12.1522 16.7654 12.3552 17.2554 12.7446 17.6448 13.2346 17.8478 13.6022 18 14.0681 18 15 18 15.9319 18 16.3978 18 16.7654 17.8478 17.2554 17.6448 17.6448 17.2554 17.8478 16.7654 18 16.3978 18 15.9319 18 15zM8 15 8 5C8 4.06812 8 3.60218 7.84776 3.23463 7.64477 2.74458 7.25542 2.35523 6.76537 2.15224 6.39782 2 5.93188 2 5 2 4.06812 2 3.60218 2 3.23463 2.15224 2.74458 2.35523 2.35523 2.74458 2.15224 3.23463 2 3.60217 2 4.06812 2 5L2 15C2 15.9319 2 16.3978 2.15224 16.7654 2.35523 17.2554 2.74458 17.6448 3.23463 17.8478 3.60217 18 4.06812 18 5 18 5.93188 18 6.39782 18 6.76537 17.8478 7.25542 17.6448 7.64477 17.2554 7.84776 16.7654 8 16.3978 8 15.9319 8 15z"></path>
                                                        <path d="M15 5 15 11M15 14 15 15M5 5 5 11M5 14 5 15"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex flex-column ps-card justify-content-start">
                                                    <div className="d-flex flex-column justify-content-center mb-2"><a className="heading text-primary stretched-link" href="/settings/general">Other</a></div>
                                                    <div className="text-alternate">Marshmallow donut sweet roll. Wafer tootsie roll gingerbread croissant ice cream. Sweet roll ice cream marzipan croissant soufflé fruitcake.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="hover-scale-up h-100 card" style={cardStyle}>
                                    <div className="card-body">
                                        <div className="g-0 row">
                                            <div className="col-auto">
                                                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center  mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cs-icon pin text-primary">
                                                        <path d="M3.5 8.49998C3.5 -0.191432 16.5 -0.191368 16.5 8.49998C16.5 12.6585 12.8256 15.9341 11.0021 17.3036C10.4026 17.7539 9.59777 17.754 8.99821 17.3037C7.17467 15.9342 3.5 12.6585 3.5 8.49998Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex flex-column ps-card justify-content-start">
                                                    <div className="d-flex flex-column justify-content-center mb-2"><a className="heading text-primary stretched-link" href="/settings/general">Other</a></div>
                                                    <div className="text-alternate">Chocolate bar sesame snaps tootsie roll donut apple pie. Tart chocolate cake pastry cupcake croissant chocolate. Gingerbread danish tiramisu.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col">
                                <div className="hover-scale-up h-100 card" style={cardStyle}>
                                    <div className="card-body">
                                        <div className="g-0 row">
                                            <div className="col-auto">
                                                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center  mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cs-icon coin text-primary">
                                                        <circle cx="10" cy="10" r="8"></circle>
                                                        <path d="M8.76255 8.23745C9.25911 7.74089 9.50739 7.49261 9.80491 7.43343C9.93371 7.40781 10.0663 7.40781 10.1951 7.43343C10.4926 7.49262 10.7409 7.74089 11.2374 8.23745L11.7626 8.76261C12.2591 9.25916 12.5074 9.50744 12.5666 9.80495C12.5922 9.93375 12.5922 10.0663 12.5666 10.1951C12.5074 10.4927 12.2591 10.7409 11.7626 11.2375L11.2374 11.7626C10.7409 12.2592 10.4926 12.5074 10.1951 12.5666C10.0663 12.5922 9.93371 12.5922 9.80491 12.5666C9.50739 12.5074 9.25912 12.2592 8.76256 11.7626L8.23741 11.2375C7.74086 10.7409 7.49258 10.4926 7.4334 10.1951C7.40778 10.0663 7.40778 9.93373 7.4334 9.80494C7.49258 9.50742 7.74086 9.25914 8.23741 8.76259L8.76255 8.23745Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex flex-column ps-card justify-content-start">
                                                    <div className="d-flex flex-column justify-content-center mb-2"><a className="heading text-primary stretched-link" href="/settings/general">Currencies</a></div>
                                                    <div className="text-alternate">Halvah jujubes bonbon gummies caramels. Carrot cake pie caramels caramels. Wafer tootsie roll gingerbread croissant ice cream.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="hover-scale-up h-100 card" style={cardStyle}>
                                    <div className="card-body">
                                        <div className="g-0 row">
                                            <div className="col-auto">
                                                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center  mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cs-icon wallet text-primary">
                                                        <path d="M5.5 17L14.5 17C15.9045 17 16.6067 17 17.1111 16.6629C17.3295 16.517 17.517 16.3295 17.6629 16.1111C18 15.6067 18 14.9045 18 13.5L18 13.2667L18 9.53333C18 9.03764 18 8.78979 17.9563 8.58418C17.7921 7.81154 17.1885 7.20793 16.4158 7.0437C16.2102 7 15.9624 7 15.4667 7L10.9366 7C10.5447 7 10.3488 7 10.1749 6.93285C10.0984 6.90331 10.0259 6.86447 9.95884 6.81721C9.80652 6.70978 9.69784 6.54676 9.48048 6.22073L7.85285 3.77927C7.63549 3.45323 7.52681 3.29022 7.37449 3.18279C7.30748 3.13553 7.23491 3.09669 7.15841 3.06715C6.98454 3 6.78861 3 6.39676 3L5.5 3C4.09554 3 3.39331 3 2.88886 3.33706C2.67048 3.48298 2.48298 3.67048 2.33706 3.88886C2 4.39331 2 5.09554 2 6.5L2 13.5C2 14.9045 2 15.6067 2.33706 16.1111C2.48298 16.3295 2.67048 16.517 2.88886 16.6629C3.39331 17 4.09554 17 5.5 17Z"></path>
                                                        <path d="M18 9L18 7.5C18 6.09554 18 5.39331 17.6629 4.88886C17.517 4.67048 17.3295 4.48298 17.1111 4.33706C16.6067 4 15.9045 4 14.5 4L8 4"></path>
                                                        <path d="M6 13H8"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex flex-column ps-card justify-content-start">
                                                    <div className="d-flex flex-column justify-content-center mb-2"><a className="heading text-primary stretched-link" href="/settings/general">Payment</a></div>
                                                    <div className="text-alternate">Dessert sweet roll cake lollipop. Jelly-o danish donut tiramisu biscuit toffee tart tootsie roll lemon drops. Lemon drops powder.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="hover-scale-up h-100 card" style={cardStyle}>
                                    <div className="card-body">
                                        <div className="g-0 row">
                                            <div className="col-auto">
                                                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center  mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cs-icon file-text text-primary">
                                                        <path d="M6.5 18H13.5C14.9045 18 15.6067 18 16.1111 17.6629C16.3295 17.517 16.517 17.3295 16.6629 17.1111C17 16.6067 17 15.9045 17 14.5V7.44975C17 6.83775 17 6.53175 16.9139 6.24786C16.8759 6.12249 16.8256 6.00117 16.7638 5.88563C16.624 5.62399 16.4076 5.40762 15.9749 4.97487L14.0251 3.02513L14.0251 3.02512C13.5924 2.59238 13.376 2.37601 13.1144 2.23616C12.9988 2.1744 12.8775 2.12415 12.7521 2.08612C12.4682 2 12.1622 2 11.5503 2H6.5C5.09554 2 4.39331 2 3.88886 2.33706C3.67048 2.48298 3.48298 2.67048 3.33706 2.88886C3 3.39331 3 4.09554 3 5.5V14.5C3 15.9045 3 16.6067 3.33706 17.1111C3.48298 17.3295 3.67048 17.517 3.88886 17.6629C4.39331 18 5.09554 18 6.5 18Z"></path>
                                                        <path d="M13 6 7 6M13 10 7 10M13 14 7 14"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex flex-column ps-card justify-content-start">
                                                    <div className="d-flex flex-column justify-content-center mb-2"><a className="heading text-primary stretched-link" href="/settings/general">Billing</a></div>
                                                    <div className="text-alternate">Macaroon candy ice cream candy canes chocolate bar sesame snaps jelly pudding caramels. Dragée macaroon lemon drops icing cupcake gingerbread.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="hover-scale-up h-100 card" style={cardStyle}>
                                    <div className="card-body">
                                        <div className="g-0 row">
                                            <div className="col-auto">
                                                <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center  mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="cs-icon content text-primary">
                                                        <path d="M3 5.5C3 4.09554 3 3.39331 3.33706 2.88886C3.48298 2.67048 3.67048 2.48298 3.88886 2.33706C4.39331 2 5.09554 2 6.5 2H13.5C14.9045 2 15.6067 2 16.1111 2.33706C16.3295 2.48298 16.517 2.67048 16.6629 2.88886C17 3.39331 17 4.09554 17 5.5V14.5C17 15.9045 17 16.6067 16.6629 17.1111C16.517 17.3295 16.3295 17.517 16.1111 17.6629C15.6067 18 14.9045 18 13.5 18H6.5C5.09554 18 4.39331 18 3.88886 17.6629C3.67048 17.517 3.48298 17.3295 3.33706 17.1111C3 16.6067 3 15.9045 3 14.5V5.5Z"></path>
                                                        <path d="M7 6.75C7 6.04777 7 5.69665 7.16853 5.44443C7.24149 5.33524 7.33524 5.24149 7.44443 5.16853C7.69665 5 8.04777 5 8.75 5H11.25C11.9522 5 12.3033 5 12.5556 5.16853C12.6648 5.24149 12.7585 5.33524 12.8315 5.44443C13 5.69665 13 6.04777 13 6.75V7.25C13 7.95223 13 8.30335 12.8315 8.55557C12.7585 8.66476 12.6648 8.75851 12.5556 8.83147C12.3033 9 11.9522 9 11.25 9H8.75C8.04777 9 7.69665 9 7.44443 8.83147C7.33524 8.75851 7.24149 8.66476 7.16853 8.55557C7 8.30335 7 7.95223 7 7.25V6.75Z"></path>
                                                        <path d="M7 12H13M7 15H13"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex flex-column ps-card justify-content-start">
                                                    <div className="d-flex flex-column justify-content-center mb-2"><a className="heading text-primary stretched-link" href="/settings/general">Taxes</a></div>
                                                    <div className="text-alternate">Dragée macaroon lemon drops icing cupcake gingerbread. Apple pie caramels tart. Caramels brownie gummies.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                </Container>
            </Page>

        </>
    );
}
