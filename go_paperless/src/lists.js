import React from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileViewer from 'react-file-viewer';
// import { Item } from 'react-bootstrap/lib/Breadcrumb';
class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                <ListGroup variant="flush">
                    {this.state.data.map((item) => <Item></Item>)}
                </ListGroup>
            </div>
        );
    }
}

class Item extends React.Component{
    render() {
        const type = 'pdf';
        const file = this.props.file;
        return (
            <FileViewer
                fileType={type}
                filePath={file}
            ></FileViewer>
        )
    }
}

export default List;