import React from "react";
import Data from "../../../utils/boardData";
import Board from "react-trello";
// import CustomCard from './CustomCard';
import CustomCard from './CustomCard'
import './style.css';

class KanbanBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boardData: Data
        }
    }

    componentDidMount() {

    }

    movedCard = (fromLaneId, toLaneId, cardId, index) => {
        // console.log(fromLaneId, toLaneId, cardId, index);
    }


    render() {
        return (
            <div className="kanban-board">
                <Board
                    style={{ backgroundColor: "#6fd9a9" }}
                    components={{
                        Card: CustomCard
                    }}
                    data={this.state.boardData}
                    draggable
                    // onCardClick={function noRefCheck() { return null }}
                    tagStyle={{
                        fontSize: '80%'
                    }}
                    onCardMoveAcrossLanes={this.movedCard}

                />
                {/* <Board style={{ backgroundColor: "#6fd9a9" }} data={Data} draggable editable /> */}
            </div>
        )
    }

}

export default KanbanBoard;