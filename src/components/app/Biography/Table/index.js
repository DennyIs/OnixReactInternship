import React, {Component, Fragment} from 'react';

export default class Table extends Component {

    render() {
        return(
            <Fragment>
            <div className="container">
                <div>
                    <div className="gif_item">

                        <img className="gif"
                             alt="gif"
                             src={this.props.imgSrc}
                             onLoad={this.props.handleImageLoaded.bind(this)}
                             onError={this.props.handleImageError.bind(this)}
                        />
                        <div>
                            {this.props.imageStatus}
                        </div>
                    </div>
                    <table>
                        <tbody>

                        <tr>
                            <th onClick={this.props.sortFunction}>Year<br/></th>
                            <th onClick={this.props.bubbleSort}>Event<br/></th>
                        </tr>
                        {
                            Object.entries(this.props.events).map(([index, row])  =>

                                <tr
                                    onDragStart={e => this.props.onDragStart(e, index)}
                                    draggable
                                    onDragOver={() => this.props.onDragOver(index)}
                                    onDragEnd={this.props.onDragEnd}
                                    className={row.marked ? "active" : ""} onClick = {this.props.handleMarked.bind(this, index)} key={index}
                                >
                                    <td className="date">{row.date}</td>
                                    <td className="event">{row.event}</td>
                                    <td><input type="button"  className="button button--table" value="Удалить" onClick={this.props.deleteElement.bind(this, index)}/></td>
                                </tr>

                            )}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="container">
                <div>
                    <div className="form_item">
                        <input type="text"  id="insertDate"  onChange={this.props.updateEvent} className="fields" placeholder="date"/>
                        <input type="text"  id="insertEvent"  onChange={this.props.updateEvent} className="fields" placeholder="event"/>
                    </div>
                    <div className="btn_item">
                        <input type="button" className="button button--table" value="Добавить" onClick={this.props.insertElement}/>
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }



}