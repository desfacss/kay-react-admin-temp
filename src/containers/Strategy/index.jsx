import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopPanel from './components/top-panel';
import OptionChain from './components/option-chain';
import { fetchPriceRate } from './redux/actions';

const Strategy = ({ fetchPriceRate, covidData }) => {
    const { t } = useTranslation('common');
    React.useEffect(() => {
        fetchPriceRate();
    }, [fetchPriceRate]);
    return (
        <Container>
            <Row>
                <Col md={12}>
                    {/* <h3 className="page-title">{t('chat_application.page_title')}</h3> */}
                    <TopPanel />
                </Col>

            </Row>
            <Row>
                <OptionChain />
            </Row>
        </Container>
    );
};

Strategy.propTypes = {
    fetchPriceRate: PropTypes.func.isRequired,
    covidData: PropTypes.shape(),
};

const mapStateToProps = state => ({
    covidData: state.covid.data,
});

const mapDispatchToProps = {
    fetchPriceRate: fetchPriceRate,
};

// export default Strategy;
export default connect(mapStateToProps, mapDispatchToProps)(Strategy);