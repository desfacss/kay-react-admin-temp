import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import {
    DropdownItem, DropdownToggle, DropdownMenu, ButtonDropdown,
} from 'reactstrap';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import renderDatePickerField from '@/shared/components/form/DatePicker';
import { Field, reduxForm } from 'redux-form';
import { FormField } from '../../Form/ReactHookForm/FormHookValidation/components/FormField';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker'
import { SelectField } from '@/shared/components/form/Select';
//import { fetchPriceRate } from '@/redux/actions/strategyActions';
import './topPanel.css';

const TopPanel = ({ fetchPriceRate }) => {
    const { t } = useTranslation('common');
    const [dropdownOpen, setOpen] = React.useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const {
        control, register, handleSubmit, watch
    } = useForm();
    const onSubmit = data => console.log(data);
    const onChange = data => console.log(data);
    console.log(">>>>>>>>", watch("stock"))

    // React.useEffect(() => {
    //     console.log("============")
    //     let data = {
    //         "exchange": "NSE",
    //         "symbol": "NIFTY",
    //         "tradedate": "2020-01-01",
    //         "tradetime": "09:17:00"
    //     }
    //     // fetchPriceRate()
    // }, []);
    // const handleSubmit = (data) => { console.log("============", data) }
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>


                <Row>
                    <Col xs={12} sm={12} md={1} lg={1}>


                    </Col>


                    <Col xs={12} sm={12} md={2} lg={2}>

                        <Row>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <div style={{ paddingRight: 20 }}> <span className="form__form-group-label">Index/Stock</span>
                                </div>

                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <div style={{ paddingRight: 20, width: 120 }}>
                                    <Controller
                                        name="stock"
                                        as={SelectField}
                                        control={control}
                                        options={[
                                            { value: 'NIFTY', label: 'NIFTY' },
                                            { value: 'BANKNIFTY', label: 'BANKNIFTY' },
                                        ]}
                                        onChange={(data) => console.log(data)}
                                    />
                                </div>

                            </Col>


                        </Row>

                    </Col>


                    <Col xs={12} sm={12} md={2} lg={2}>
                        <Row>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div style={{ paddingRight: 20 }}>
                                    <span className="form__form-group-label">Kind</span>
                                </div>

                            </Col>
                            <Col xs={12} sm={12} md={8} lg={8}>
                                <div style={{ paddingRight: 20, width: 120 }}>
                                    <Controller
                                        name="kind"
                                        as={SelectField}
                                        control={control}
                                        options={[
                                            { value: 'NSE', label: 'NSE' },
                                            { value: 'NFO', label: 'NFO' },
                                        ]}
                                    />
                                </div>

                            </Col>


                        </Row>

                    </Col>




                    <Col xs={12} sm={12} md={3} lg={3}>
                        <Row>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <div style={{ paddingRight: 20 }}>
                                    <span className="form__form-group-label">Trade Date</span>
                                </div>

                            </Col>
                            <Col xs={12} sm={12} md={7} lg={7}>
                                <div className="wrapper topWrapper">
                                    <Controller
                                        className="topPanel"
                                        name="trade"
                                        control={control}
                                        as={renderDatePickerField}
                                        ref={(date) => date}
                                        style={{ borderWidth: 0 }}
                                    />
                                    <CalendarBlankIcon />
                                </div>

                            </Col>


                        </Row>

                    </Col>



                    <Col xs={12} sm={12} md={2} lg={2}>
                        <Row>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div style={{ paddingRight: 20 }}>
                                    <span className="form__form-group-label">Expiry</span>
                                </div>

                            </Col>
                            <Col xs={12} sm={12} md={8} lg={8}>
                                <div style={{ paddingRight: 5,  height: 40 }}>
                                    <Controller
                                        name="expiry"
                                        as={SelectField}
                                        control={control}
                                        className="expiryController"
                                        options={[
                                            { value: '01/12/2019', label: '01/12/2019' },
                                            { value: '01/12/2020', label: '01/12/2020' },
                                            { value: '01/12/2021', label: '01/12/2021' },
                                        ]}
                                    />
                                </div>

                            </Col>


                        </Row>




                    </Col>

                    <Col xs={12} sm={12} md={2} lg={2}>
                        <div style={{ paddingRight: 20 }}>
                            <span className="form__form-group-label">Current Spot 15700 Futures 15800</span>
                        </div>


                    </Col>
                </Row>



                {/* <Row>

                    <Col sm={2}></Col>
                    <Col sm={2} >
                        <Row>
                            <div style={{ paddingRight: 20 }}> <span className="form__form-group-label">Index/Stock</span>
                            </div>
                            <div style={{ paddingRight: 20, width: 120 }}>
                                <Controller
                                    name="stock"
                                    as={SelectField}
                                    control={control}
                                    options={[
                                        { value: 'NIFTY', label: 'NIFTY' },
                                        { value: 'BANKNIFTY', label: 'BANKNIFTY' },
                                    ]}
                                    onChange={(data) => console.log(data)}
                                />
                            </div>
                        </Row>
                       
                    </Col>
                    <Col sm={2} >

                        <Row>
                            <div style={{ paddingRight: 20 }}>
                                <span className="form__form-group-label">Kind</span>
                            </div>
                            <div style={{ paddingRight: 20, width: 120 }}>
                                <Controller
                                    name="kind"
                                    as={SelectField}
                                    control={control}
                                    options={[
                                        { value: 'NSE', label: 'NSE' },
                                        { value: 'NFO', label: 'NFO' },
                                    ]}
                                />
                            </div>
                        </Row>
                    </Col>
                    <Col sm={2}>
                        <Row>
                            <div style={{ paddingRight: 20 }}>
                                <span className="form__form-group-label">Trade Date</span>
                            </div>
                            <div className="wrapper topWrapper">
                                <Controller
                                    className="topPanel"
                                    name="trade"
                                    control={control}
                                    as={renderDatePickerField}
                                    ref={(date) => date}
                                    style={{ borderWidth: 0 }}
                                />
                                <CalendarBlankIcon />
                            </div>
                        </Row>
                    </Col>
                    <Col sm={2}>
                        <Row>
                            <div style={{ paddingRight: 20 }}>
                                <span className="form__form-group-label">Expiry</span>
                            </div>
                            <div style={{ paddingRight: 5, width: 175, height: 40 }}>
                                <Controller
                                    name="expiry"
                                    as={SelectField}
                                    control={control}
                                    options={[
                                        { value: '01/12/2019', label: '01/12/2019' },
                                        { value: '01/12/2020', label: '01/12/2020' },
                                        { value: '01/12/2021', label: '01/12/2021' },
                                    ]}
                                />
                            </div>
                        </Row>
                    </Col>
                    <Col sm={2}>  <span className="form__form-group-label">Current Spot 15700 Futures 15800</span></Col>


                </Row> */}
            </form>
        </Container >
    );
};

export default TopPanel;