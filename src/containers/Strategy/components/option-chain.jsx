import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Card, CardBody, Col, Badge, Table, Container, Progress, Button
} from 'reactstrap';


const OptionChain = ({ fetchPriceRate }) => {
    const { t } = useTranslation('common');
    const tableHeaderData = [{
        id: 1,
        ltp: 65,
        pltp: 56,
        strike: 157600
    },
    {
        id: 2,
        ltp: 45,
        pltp: 56,
        strike: 157600
    }, {
        id: 3,
        ltp: 5,
        pltp: 56,
        strike: 157600
    }]
    const header = [
        { id: 1, title: '#' },
        { id: 2, title: 'Call LTP' },
        { id: 3, title: 'STRIKE' },
        { id: 4, title: 'Put LTP' },
    ];

    return (<Container>
        <Table className="table--bordered" responsive>
            <thead>
                <tr>
                    {header.map(item => (
                        <th key={item.id}>{item.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableHeaderData.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td> <Progress value={item.ltp} color="success">{item.ltp}</Progress></td>
                        <td> <Button outline color="primary">B</Button><Button outline color="primary">S</Button>{item.strike}<Button outline color="primary">B</Button><Button outline color="primary">S</Button></td>
                        <td>{item.pltp}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
    );
};

export default OptionChain;