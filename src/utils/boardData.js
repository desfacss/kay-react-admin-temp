const data = {
    lanes: [
        {
            cards: [
                {
                    body: 'AC Installation',
                    cardColor: '#BD3B36',
                    cardStyle: {
                        borderRadius: 6,
                        boxShadow: '0 0 6px 1px #BD3B36',
                        marginBottom: 15
                    },
                    location: 'bangalore hsr layout 1',
                    workDescription: 'new AC setup needed',
                    id: 'Card1',
                    laneId: 'lane1',
                    metadata: {
                        id: 'Card1'
                    },
                    customer: 'Ajith Kumar',
                    technician: "Shankar ganesh",
                    subTitle: 'SMS received at 12:13pm today',
                    tags: [
                        {
                            bgcolor: 'red',
                            color: 'white',
                            title: 'High'
                        }
                    ]
                },
                {
                    body: 'Is the estimate free, and can someone call me soon?',
                    cardColor: '#E08521',
                    cardStyle: {
                        borderRadius: 6,
                        boxShadow: '0 0 6px 1px #E08521',
                        marginBottom: 15
                    },
                    location: 'bangalore hsr layout 1 267/25',
                    workDescription: 'AC monthly service',
                    id: 'Card2',
                    laneId: 'lane1',
                    metadata: {
                        id: 'Card2'
                    },
                    customer: 'Card Weathers',
                    technician: "prem kumar",
                    subTitle: 'Email received at 1:14pm',
                    tags: [
                        {
                            bgcolor: 'blue',
                            color: 'white',
                            title: 'Normal'
                        }
                    ]
                }
            ],
            currentPage: 1,
            id: 'lane1',
            // label: '12/12',
            // labelStyle: {
            //     color: '#009688',
            //     fontWeight: 'bold'
            // },
            // style: {
            //     backgroundColor: 'cyan',
            //     padding: 20
            // },
            title: 'ASSIGNED',
            className: 'lane1-style'
            // titleStyle: {
            //     fontSize: 20,
            //     marginBottom: 15
            // }
        },
        {
            cards: [
                {
                    body: 'Test the ac compressor fan performance and replacement',
                    cardColor: '#BD3B36',
                    cardStyle: {
                        borderRadius: 6,
                        boxShadow: '0 0 6px 1px #BD3B36',
                        marginBottom: 15
                    },
                    location: 'Bangalore electronic city',
                    workDescription: 'Compressor replacement',
                    id: 'Card1',
                    laneId: 'lane2',
                    metadata: {
                        id: 'Card2'
                    },
                    customer: 'Michael Caine',
                    technician: "Joseph",
                    subTitle: 'Email received at 4:23pm today',
                    tags: [
                        {
                            bgcolor: 'red',
                            color: 'white',
                            title: 'High'
                        }
                    ]
                },
                {
                    body: 'Test fan in the ac',
                    cardColor: '#E08521',
                    cardStyle: {
                        borderRadius: 6,
                        boxShadow: '0 0 6px 1px #E08521',
                        marginBottom: 15
                    },
                    location: 'bangalore hsr layout 2',
                    workDescription: 'AC Fan service',
                    id: 'Card2',
                    laneId: 'lane2',
                    metadata: {
                        id: 'Card2'
                    },
                    customer: 'Priyaranjan',
                    technician: "Sunil chethri",
                    subTitle: 'Email received at 1:14pm',
                    tags: [
                        {
                            bgcolor: 'blue',
                            color: 'white',
                            title: 'Normal'
                        }
                    ]
                }
            ],
            currentPage: 1,
            id: 'lane2',
            title: 'SCHEDULED'
        },
        {
            cards: [
                {
                    body: 'Monthly service',
                    cardColor: '#BD3B36',
                    cardStyle: {
                        borderRadius: 6,
                        boxShadow: '0 0 6px 1px #BD3B36',
                        marginBottom: 15
                    },
                    location: 'Bangalore whitefield',
                    workDescription: 'Normal AC Service',
                    id: 'Card1',
                    laneId: 'lane3',
                    metadata: {
                        id: 'Card2'
                    },
                    customer: 'Arun',
                    technician: "Rajesh kumar",
                    subTitle: 'Email received at 4:23pm today',
                    tags: [
                        {
                            bgcolor: 'green',
                            color: 'white',
                            title: 'Low'
                        }
                    ]
                }
            ],
            currentPage: 1,
            id: 'lane3',
            title: 'INPROGRESS'
        },
        {
            cards: [
                {
                    body: 'You are welcome. Interested in doing business with you again',
                    cardColor: '#BD3B36',
                    cardStyle: {
                        borderRadius: 6,
                        boxShadow: '0 0 6px 1px #BD3B36',
                        marginBottom: 15
                    },
                    location: 'bangalore,majestic',
                    workDescription: 'Compressor replacement',
                    id: 'Card1',
                    laneId: 'lane4',
                    metadata: {
                        id: 'Card1'
                    },
                    customer: 'Michael Caine',
                    technician: "Joseph",
                    subTitle: 'Email received at 4:23pm today',
                    tags: [
                        {
                            bgcolor: 'green',
                            color: 'white',
                            title: 'Low'
                        }
                    ]
                }
            ],
            currentPage: 1,
            id: 'lane4',
            title: 'COMPLETED'
        },
        {
            cards: [
                {
                    body: 'You are welcome. Interested in doing business with you again',
                    cardColor: '#BD3B36',
                    cardStyle: {
                        borderRadius: 6,
                        boxShadow: '0 0 6px 1px #BD3B36',
                        marginBottom: 15
                    },
                    location: 'bangalore,karnataka',
                    workDescription: 'Compressor replacement',
                    id: 'Card1',
                    laneId: 'lane5',
                    metadata: {
                        id: 'Card1'
                    },
                    customer: 'Michael Caine',
                    technician: "Joseph",
                    subTitle: 'Email received at 4:23pm today',
                    tags: [
                        {
                            bgcolor: 'green',
                            color: 'white',
                            title: 'Low'
                        }
                    ]
                }
            ],
            currentPage: 1,
            id: 'lane5',
            title: 'CANCELLED'
        }
    ],
    tableHeader: [
        { id: 1, title: '#' },
        { id: 2, title: 'Customer Name' },
        { id: 3, title: 'Location' },
        { id: 4, title: 'Type' },
        { id: 5, title: 'Technician' },
        { id: 5, title: 'Status' },
    ],
    statusColors: [
        {
            'status': 'assigned',
            'color': 'primary',
        },
        {
            'status': 'scheduled',
            'color': 'warning'
        },
        {
            'status': 'inprogress',
            'color': 'info'
        },
        {
            'status': 'completed',
            'color': 'success'
        },
        {
            'status': 'cancelled',
            'color': 'danger'
        }
    ]
}

export default data;