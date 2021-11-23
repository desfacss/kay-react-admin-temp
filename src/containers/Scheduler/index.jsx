import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row, Card, CardBody, } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WorkScheduler from './components/scheduler';

const Scheduler = ({ }) => {
   
    return (
        <Container className="overflow-auto bg-white">
            <Col md={12} lg={12} xl={12}>
                <Card>
                    <CardBody>
                        <div className="card__title">
                            <h5 className="bold-text">WORK SCHEDULER</h5>
                        </div>
                        <div className="react-vis">
                            <WorkScheduler />
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


export default Scheduler;
// export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);