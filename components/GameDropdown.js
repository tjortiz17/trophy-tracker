import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

//for now will just have thieves in time, can update later to have list of multiple games
export default class GameDropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {game: ''};
    }

    render(){
        return (
            <DropdownButton id="dropdown-basic-button" title="Choose your game">
                <Dropdown.Item href="../games/sly4">Sly Cooper: Thieves in Time</Dropdown.Item>
                {/*Future game addiitions will be added here*/}
            </DropdownButton>
        );
    }
}