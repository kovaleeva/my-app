'use strict';
import React from 'react';
import ModalApp from './ModalComponent';


class AppHeader extends React.Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal" style={{ margin: '0 1em' }}>Add item</button>
            </div>
        )
    }
}

class InventoryItem extends React.Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.category}</td>
                <td>{this.props.manufacturer}</td>
                <td>{this.props.title}</td>
                <td>{this.props.owner}</td>
                <td>{this.props.description}</td>
                <td>{this.props.modified}</td>
                <td>{this.props.archived}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick={this.props.onEdit} data-toggle="modal" data-target="#editModal">Edit</button>
                    <button type="button" className="btn btn" onClick={this.props.onDelete}>x</button>
                </td>
            </tr>
        )
    }
}

class AppTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.records,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.records
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" >Number</th>
                        <th scope="col">Category</th>
                        {/* <th scope="col" onClick={this.sortTable(1).bind(this)}>Category</th> */}
                        <th scope="col">Manufacturer</th>
                        <th scope="col">Title</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Descrition</th>
                        <th scope="col">Modified</th>
                        <th scope="col">Archived</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.items.map(el => {

                            console.log(el);
                            return <InventoryItem
                                key={el.id}
                                id={el.id}
                                category={el.category}
                                manufacturer={el.manufacturer}
                                owner={el.owner}
                                description={el.description}
                                modified={el.modified}
                                archived={el.archived}
                                onDelete={this.props.onDelete.bind(null, el)}
                            // onEdit={this.props.onEdit.bind(null, el)}
                            />;
                        })
                    }
                </tbody>
            </table>
        )
    }
}

class AddItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {
            items: props.records,
        }
    }

    addItem() {
        let formatDate = (date) => {
            let dd = date.getDate(),
                mm = date.getMonth() + 1,
                yy = date.getFullYear() % 100;

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
            if (yy < 10) yy = '0' + yy;

            return dd + '.' + mm + '.' + yy;
        };

        let d = new Date();

        const obj = {
            id: document.getElementById("newNumber").value,
            category: document.getElementById("newCategory").value,
            manufacturer: document.getElementById("newManufacturer").value,
            title: document.getElementById("newTitle").value,
            owner: document.getElementById("newOwner").value,
            description: document.getElementById("newDescrition").value,
            modified: formatDate(d),
            archived: 'No'
        };
        this.props.onAdd(obj);
    }

    render() {
        return (
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add/Edit</h4>
                            <button type="submit" className="btn btn-primary" onClick={this.addItem}>Save changes</button>
                        </div>
                        <div className="modal-body">
                            <p>Number</p>
                            <input type="text" id="newNumber" required />
                            <p>Category</p>
                            <select className="form-control" id="newCategory">
                                <option>WebCam</option>
                                <option>Computer</option>
                                <option>Mouse</option>
                            </select>
                            <p>Manufacturer</p>
                            <input type="text" id="newManufacturer" />
                            <p>Title</p>
                            <input type="text" id="newTitle" required />
                            <p>Owner</p>
                            <select className="form-control" id="newOwner">
                                <option>Karina</option>
                                <option>Dima</option>
                                <option>Sergey</option>
                            </select>
                            <p>Descrition</p>
                            <input type="text" id="newDescrition" />
                            <p>Archived</p>
                            <input type="text" id="newArchived" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

class EditItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.editItem = this.editItem.bind(this);
        this.state = {
            items: props.records,
        }
    }
    

    editItem() {
        let formatDate = (date) => {
            let dd = date.getDate(),
                mm = date.getMonth() + 1,
                yy = date.getFullYear() % 100;

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
            if (yy < 10) yy = '0' + yy;

            return dd + '.' + mm + '.' + yy;
        };

        let d = new Date();

        const obj = {
            id: document.getElementById("newNumber").value,
            category: document.getElementById("newCategory").value,
            manufacturer: document.getElementById("newManufacturer").value,
            title: document.getElementById("newTitle").value,
            owner: document.getElementById("newOwner").value,
            description: document.getElementById("newDescrition").value,
            modified: formatDate(d),
            archived: 'No'
        };
        // this.props.onEdit(obj);
        // onEdit() {
        //     this.setState({edited: true});
        //     }
    
    }

    render() {
        return (
            <div className="modal fade" id="editModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Edit</h4>
                            <button type="submit" className="btn btn-primary" onClick={this.editItem}>Save changes</button>
                        </div>
                        <div className="modal-body">
                            <p>Category</p>
                            <select className="form-control" id="newCategory" value="">
                                <option>WebCam</option>
                                <option>Computer</option>
                                <option>Mouse</option>
                            </select>
                            <p>Manufacturer</p>
                            <input type="text" id="newManufacturer" />
                            <p>Title</p>
                            <input type="text" id="newTitle" required />
                            <p>Owner</p>
                            <select className="form-control" id="newOwner">
                                <option>Karina</option>
                                <option>Dima</option>
                                <option>Sergey</option>
                            </select>
                            <p>Descrition</p>
                            <input type="text" id="newDescrition" />
                            <p>Archived</p>
                            <input type="text" id="newArchived" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}



class AppView extends React.Component {
    componentDidMount() {
        this.props.onGetItems();
    }

    render() {
        return (
            <div>
                <AddItemModal onAdd={this.props.onAdd} />
                <EditItemModal onEdit={this.props.onEdit} />
                <ModalApp />
                <AppHeader />
                <h1>Inventory</h1>
                <AppTable {...this.props} />
            </div>
        )
    }
}


export default AppView;