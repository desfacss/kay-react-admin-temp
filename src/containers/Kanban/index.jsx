import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row, Card, CardBody, } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Kanban from './components/kanban';
import ReactTableCustomizerToggle from '../../shared/components/table/components/ReactTableCustomizerToggle';
import Table from './components/table';

const KanbanView = ({ }) => {
    const [view, setView] = useState(false);
    const changeView = (event) => {
        console.log(event);
        setView(!view)
    }
    return (
        // <Container className="overflow-auto bg-white">
        //     <Col md={12} lg={12} xl={12}>
        //         <Card>
        <CardBody>
            <div className="card__title">
                <div className="table__collapse-item">

                    <ReactTableCustomizerToggle
                        // key={item.id}
                        text="Change view"
                        handleClick={changeView}
                        isChecked={view}
                    />
                </div>
            </div>
            <div className={ view ? 'react-vis d-none' : 'react-vis' }>
                <Kanban />
            </div>
            <div className={ !view ? 'react-vis d-none' : 'react-vis' }>
                <Table />
            </div>
        </CardBody>
        //         </Card>
        //     </Col>
        // </Container>
    );
};

export default KanbanView;