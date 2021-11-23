import React from "react";
import PropTypes from 'prop-types'

import { MovableCardWrapper, CardRightContent } from 'react-trello/dist/styles/Base';
import InlineInput from 'react-trello/dist/widgets/InlineInput'
import Tag from 'react-trello/dist/components/Card/Tag';
import DeleteButton from 'react-trello/dist/widgets/DeleteButton';
import { Card, CardBody, Col, CardHeader, CardTitle } from 'reactstrap';



class CustomCard extends React.Component {
    onDelete = e => {
        this.props.onDelete()
        e.stopPropagation()
    }

    render() {
        const {
            showDeleteButton,
            style,
            tagStyle,
            onClick,
            onDelete,
            onChange,
            className,
            id,
            title,
            subTitle,
            location,
            body,
            cardColor,
            workDescription,
            customer,
            technician,
            label,
            description,
            tags,
            cardDraggable,
            editable,
            t
        } = this.props
        // console.log(this.props, ' its this.props');
        const updateCard = (card) => {
            console.log('its called');
            onChange({ ...card, id })
        }

        return (
            <MovableCardWrapper
                data-id={id}
                onClick={onClick}
                style={style}
                className={className}
            // style={{top:"500px"}}
            >

                <CardHeader
                    style={{
                        borderBottom: '1px solid #eee',
                        paddingBottom: 6,
                        marginBottom: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        color: '#BD3B36'
                    }}>
                    <CardTitle draggable={cardDraggable}>

                        {editable ? <InlineInput value={customer} border placeholder={t('placeholder.title')} resize='vertical' onSave={(value) => updateCard({ title: value })} /> : customer}
                    </CardTitle>
                    <CardRightContent>
                        {editable ? <InlineInput value={location} border placeholder={t('placeholder.label')} resize='vertical' onSave={(value) => updateCard({ label: value })} /> : location}
                    </CardRightContent>
                    {showDeleteButton && <DeleteButton onClick={this.onDelete} />}
                </CardHeader>



                <div style={{ fontSize: 12, color: '#BD3B36' }}>
                    <div style={{ color: '#4C4C4C', fontWeight: 'bold' }}>{body}</div>
                    <div style={{ padding: '5px 0px' }}>
                        <i>{technician}</i>
                    </div>
                    <div style={{ marginTop: 10, textAlign: 'center', color: '#BD3B36', fontSize: 15, fontWeight: 'bold' }}>{workDescription}</div>
                    {tags && (
                        <div
                            style={{
                                borderTop: '1px solid #eee',
                                paddingTop: 6,
                                display: 'flex',
                                justifyContent: 'flex-end',
                                flexDirection: 'row',
                                flexWrap: 'wrap'
                            }}>
                            {tags.map(tag => (
                                <Tag key={tag.title} {...tag} tagStyle={tagStyle} />
                            ))}
                        </div>
                    )}
                </div>



            </MovableCardWrapper>
        )
    }
}

CustomCard.propTypes = {
    showDeleteButton: PropTypes.bool,
    onDelete: PropTypes.func,
    onClick: PropTypes.func,
    style: PropTypes.object,
    tagStyle: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
}

CustomCard.defaultProps = {
    showDeleteButton: true,
    onDelete: () => { },
    onClick: () => { },
    style: {},
    tagStyle: {},
    title: 'no title',
    description: '',
    label: '',
    tags: [],
    className: ''
}

export default CustomCard;