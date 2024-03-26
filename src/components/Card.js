/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import EditTask from '../modules/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {

    const [modal, setModal] = useState(false)

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "rgb(2, 9, 33)",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#ECF3FC"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    return (
        <div class="card-wrapper">
            <div class="card-top" style={{ "background-color": colors[index % 5].primaryColor }}></div>
            <div class="task-holder">
                <span class="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div class="icons">
                    <button class="update" style={{ marginRight: "20px", "borderRadius": "5px" }} onClick={() => setModal(true)}>
                        <i class="fa-solid fa-pen-to-square"></i>update</button>
                    <button class="delete" style={{ backgroundColor: "red", marginRight: "20px" }} onClick={handleDelete}>
                        <i class="fa-solid fa-trash"></i>delete
                    </button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;