import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import Data from "../../../utils/boardData";


let newFilterArray = [];
let DataObject = Data.lanes.forEach((el) => {
    // console.log(el);
    if (el.cards.length) {
        el.cards.forEach((newEl) => {
            newEl.status = el.title.toLowerCase();
            newFilterArray.push(newEl);
        })
    }
});
// console.log(Data, ' its Data');
// console.log(newFilterArray, ' its newFilterArray');

const BasicTable = () => {
    const { t } = useTranslation('common');

    const getColor = (status) => {
        let returnColor;
        Data.statusColors.filter((el) => {
            if (el.status === status) {
                returnColor = el.color
            }
        });
        return returnColor;
    }

    return (
        <Col md={12} lg={12} xl={12}>
            <Card>
                <CardBody>
                    <div className="card__title">
                        <h5 className="bold-text">Work table</h5>
                        {/* <h5 className="subhead">Use default table</h5> */}
                    </div>
                    <Table responsive hover>
                        <thead>
                            <tr>
                                {Data.tableHeader.map(item => (
                                    <th key={item.id}>{item.title}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {newFilterArray.map((item, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.customer}</td>
                                    <td>{item.location}</td>
                                    <td>{item.workDescription}</td>
                                    <td>{item.technician}</td>
                                    <td><Badge color={getColor(item.status)}>{item.status}</Badge></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </Col>
    );
};

export default BasicTable;
