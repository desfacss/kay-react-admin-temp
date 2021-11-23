import React from "react";
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT, DnDSource } from 'react-big-scheduler'
import ResourceItem from './ResourceItem';
import ResourceList from './ResourceList';
import TaskItem from './TaskItem';
import TaskList from './TaskList';
import DnDTypes from './DnDTypes';
import { Row, Col } from 'antd';
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import DemoData from "../../../utils/DemoData";

class Views extends React.Component {
    constructor(props) {
        super(props)
        let schedulerData = new SchedulerData('2017-12-18', ViewTypes.Month, false, false, {
            schedulerWidth: '65%',
            schedulerMaxHeight: 500,
            views: [
                { viewName: 'Agenda View', viewType: ViewTypes.Month, showAgenda: true, isEventPerspective: false },
                { viewName: 'Resource View', viewType: ViewTypes.Month, showAgenda: false, isEventPerspective: false },
                { viewName: 'Task View', viewType: ViewTypes.Month, showAgenda: false, isEventPerspective: true },
            ]
        });
        schedulerData.localeMoment.locale('en');
        schedulerData.setResources(DemoData.resources);
        schedulerData.setEvents(DemoData.eventsForTaskView);
        this.state = {
            viewModel: schedulerData,
            taskDndSource: new DnDSource((props) => { return props.task; }, TaskItem, DnDTypes.TASK),
            resourceDndSource: new DnDSource((props) => { return props.resource; }, ResourceItem, DnDTypes.RESOURCE),
        }
    }

    componentDidMount() { }

    prevClick = (schedulerData) => {
        schedulerData.prev();
        schedulerData.setEvents(DemoData.eventsForTaskView);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData) => {
        schedulerData.next();
        schedulerData.setEvents(DemoData.eventsForTaskView);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.config.creatable = !view.isEventPerspective;
        schedulerData.setEvents(DemoData.eventsForTaskView);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.eventsForTaskView);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops1 = (schedulerData, event) => {
        alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops2 = (schedulerData, event) => {
        alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
        if (window.confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`)) {

            let newFreshId = 0;
            schedulerData.events.forEach((item) => {
                if (item.id >= newFreshId)
                    newFreshId = item.id + 1;
            });

            let newEvent = {
                id: newFreshId,
                title: 'New event you just created',
                start: start,
                end: end,
                resourceId: slotId,
                bgColor: 'purple'
            }
            schedulerData.addEvent(newEvent);
            this.setState({
                viewModel: schedulerData
            })
        }
    }

    updateEventStart = (schedulerData, event, newStart) => {
        if (window.confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
            schedulerData.updateEventStart(event, newStart);
        }
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventEnd = (schedulerData, event, newEnd) => {
        if (window.confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
            schedulerData.updateEventEnd(event, newEnd);
        }
        this.setState({
            viewModel: schedulerData
        })
    }

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        if (window.confirm(`Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`)) {
            schedulerData.moveEvent(event, slotId, slotName, start, end);
            this.setState({
                viewModel: schedulerData
            })
        }
    }

    subtitleGetter = (schedulerData, event) => {
        return schedulerData.isEventPerspective ? schedulerData.getResourceById(event.resourceId).name : event.groupName;
    }

    toggleExpandFunc = (schedulerData, slotId) => {
        schedulerData.toggleExpandStatus(slotId);
        this.setState({
            viewModel: schedulerData
        });
    }


    render() {
        const { viewModel, taskDndSource, resourceDndSource } = this.state;
        let dndList = viewModel.isEventPerspective ? (
            <ResourceList schedulerData={viewModel} newEvent={this.newEvent} resourceDndSource={resourceDndSource} />
        ) : (
            <TaskList schedulerData={viewModel} newEvent={this.newEvent} taskDndSource={taskDndSource} />
        );

        //register the external DnDSources
        let dndSources = [taskDndSource, resourceDndSource];
        return (
            <div>
                <Row>
                    <Col span={20}>
                        <Scheduler schedulerData={viewModel}
                            prevClick={this.prevClick}
                            nextClick={this.nextClick}
                            onSelectDate={this.onSelectDate}
                            onViewChange={this.onViewChange}
                            eventItemClick={this.eventClicked}
                            viewEventClick={this.ops1}
                            viewEventText="Ops 1"
                            viewEvent2Text="Ops 2"
                            viewEvent2Click={this.ops2}
                            updateEventStart={this.updateEventStart}
                            updateEventEnd={this.updateEventEnd}
                            moveEvent={this.moveEvent}
                            movingEvent={this.movingEvent}
                            newEvent={this.newEvent}
                            subtitleGetter={this.subtitleGetter}
                            dndSources={dndSources}
                            toggleExpandFunc={this.toggleExpandFunc}
                        />
                    </Col>
                    <Col span={4}>
                        {dndList}
                    </Col>
                </Row>
            </div>
        )
    }

}

export default DragDropContext(HTML5Backend)(Views);