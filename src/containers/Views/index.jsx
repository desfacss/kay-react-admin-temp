import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row, Card, CardBody, } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SchedulerViews from './components/views';

const Views = ({ }) => {

    return (
        <Container className="overflow-auto bg-white">
            <Col md={14} lg={14} xl={14}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">SCHEDULER VIEWS</h5>
                        </div>
                        <div className="react-vis">
                            <SchedulerViews />
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Container>
    );
};

// Strategy.propTypes = {
//     fetchPriceRate: PropTypes.func.isRequired,
//     covidData: PropTypes.shape(),
// };

// const mapStateToProps = state => ({
//     covidData: state.covid.data,
// });

// const mapDispatchToProps = {
//     fetchPriceRate: fetchPriceRate,
// };


export default Views;
// export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);