import React from 'react'
import { withRouter } from 'react-router-dom'
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import DemoData from "../../../utils/DemoData";
import { Button } from 'antd';

class WorkScheduler extends React.Component {
    constructor(props) {
        super(props)
        let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week, false, false, {
            schedulerWidth: '80%',
            // schedulerMaxHeight: 500,
            checkConflict: true,
            views: [
                { viewName: 'Day', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false },
                { viewName: 'Week', viewType: ViewTypes.Week, showAgenda: false, isEventPerspective: false },
                { viewName: 'Month', viewType: ViewTypes.Month, showAgenda: false, isEventPerspective: false }
            ]
        });
        schedulerData.localeMoment.locale('en');
        schedulerData.setResources(DemoData.resources);
        schedulerData.setEvents(DemoData.events);
        // console.log(schedulerData);
        this.state = {
            viewModel: schedulerData
        }
    }

    render() {
        const { viewModel } = this.state;
        return (
            <div>
                {/* <div>
                    <Button type="primary" onClick={this.RedirectToView}>Change View</Button>
                </div> */}
                <div>
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
                        conflictOccurred={this.conflictOccurred}
                        moveEvent={this.moveEvent}
                        newEvent={this.newEvent}
                        onScrollLeft={this.onScrollLeft}
                        onScrollRight={this.onScrollRight}
                        onScrollTop={this.onScrollTop}
                        onScrollBottom={this.onScrollBottom}
                        toggleExpandFunc={this.toggleExpandFunc}

                    />
                </div>

            </div>
        )
    }

    RedirectToView = () => {
        console.log(' its redirect link');
        // console.log(this.props);
        // this.props.hitory.push('/views')
    }

    prevClick = (schedulerData) => {
        // console.log(schedulerData);
        schedulerData.prev();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData) => {
        schedulerData.next();
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        // console.log("its onViewChange ");
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.events);
        this.setState({
            viewModel: schedulerData
        })
    }

    eventClicked = (schedulerData, event) => {
        // console.log("its eventClicked ");
        alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops1 = (schedulerData, event) => {
        // console.log("its ops1 ");
        alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    ops2 = (schedulerData, event) => {
        // console.log("its ops2 ");
        alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    };

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
        // console.log("its newEvent ");
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
        // console.log("its updateEventStart ");
        if (window.confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
            schedulerData.updateEventStart(event, newStart);
        }
        this.setState({
            viewModel: schedulerData
        })
    }

    updateEventEnd = (schedulerData, event, newEnd) => {
        // console.log("its updateEventEnd ");
        if (window.confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
            schedulerData.updateEventEnd(event, newEnd);
        }
        this.setState({
            viewModel: schedulerData
        })
    }

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        // console.log("its moveEvent ");
        if (window.confirm(`Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`)) {
            schedulerData.moveEvent(event, slotId, slotName, start, end);
            this.setState({
                viewModel: schedulerData
            })
        }
    }

    onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
        // console.log("its onScrollRight ");
        if (schedulerData.ViewTypes === ViewTypes.Day) {
            schedulerData.next();
            schedulerData.setEvents(DemoData.events);
            this.setState({
                viewModel: schedulerData
            });

            schedulerContent.scrollLeft = maxScrollLeft - 10;
        }
    }

    onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
        // console.log("its onScrollLeft ");
        if (schedulerData.ViewTypes === ViewTypes.Day) {
            schedulerData.prev();
            schedulerData.setEvents(DemoData.events);
            this.setState({
                viewModel: schedulerData
            });

            schedulerContent.scrollLeft = 10;
        }
    }

    onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log('onScrollTop');
    }

    onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log('onScrollBottom');
    }

    toggleExpandFunc = (schedulerData, slotId) => {
        // console.log("its toggleExpandFunc ");
        schedulerData.toggleExpandStatus(slotId);
        this.setState({
            viewModel: schedulerData
        });
    }

    conflictOccurred = (schedulerData, action, event, type, slotId, slotName, start, end) => {
        // console.log(action);
        // console.log(event);
        // console.log(type);
        // console.log(slotId);
        // console.log(slotName);
        // console.log(start);
        // console.log(end);
        alert(`Conflict occurred. {action: ${action}, event: ${event}`);
    }
}








export default DragDropContext(HTML5Backend)(withRouter(WorkScheduler));