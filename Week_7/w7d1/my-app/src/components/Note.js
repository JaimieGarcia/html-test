import React, {Component} from 'react';
import '../css/Note.css';

class Note extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="col-sm-6">
                <div className="card card-view"></div>
                    <div className="card-body"></div>
                        <h5 className="card-title">Note Title</h5>
                        <p>here goes a long note</p>
                        <button className="btn btn-info">Edit</button>
                        <button className="btn btn-danger">Delete</button>
            </div>
        )
    }
}

export default Note;