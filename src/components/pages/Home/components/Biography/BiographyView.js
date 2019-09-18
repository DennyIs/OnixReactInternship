import React, {Fragment} from 'react';
import '../../../../scss/layout/table.scss';
import Button from '../../../../elements/Button/Button'
import Input from '../../../../elements/Input/Input'

const BiographyView = (props) => {
    const {
        sortFunction,
        bubbleSort,
        updateEvent,
        insertElement,
        deleteElement,
        handleImageLoaded,
        handleImageError,
        handleMarked,
        onDragStart,
        onDragOver,
        onDragEnd,

        events,
        imgSrc,
        imageStatus} = props;

    return(
            <Fragment>
                <div className="container">
                    <div>
                        <div className="gif_item">

                            <img className="gif"
                                 alt="gif"
                                 src={imgSrc}
                                 onLoad={handleImageLoaded.bind(this)}
                                 onError={handleImageError.bind(this)}
                            />
                            <div>
                                {imageStatus}
                            </div>
                        </div>
                        <table>
                            <tbody>

                            <tr>
                                <th onClick={sortFunction}>Year<br/></th>
                                <th onClick={bubbleSort}>Event<br/></th>
                            </tr>
                            {
                                Object.entries(events).map(([index, row])  =>

                                    <tr
                                        onDragStart={e => onDragStart(e, index)}
                                        draggable
                                        onDragOver={() => onDragOver(index)}
                                        onDragEnd={onDragEnd}
                                        className={row.marked ? "active" : ""} onClick = {handleMarked.bind(this, index)} key={index}
                                    >
                                        <td className="date">{row.date}</td>
                                        <td className="event">{row.event}</td>
                                        <td>
                                            <Button className={'button--table'} title ={'Удалить'} onButtonClick = {deleteElement.bind(this, index)}/>
                                        </td>
                                    </tr>

                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <div className="form_item">
                            <Input id={'insertDate'}  onInputChange={updateEvent} className={'fields'} placeholder={'date'}/>
                            <Input id={'insertEvent'}  onInputChange={updateEvent} className={'fields'} placeholder={'event'}/>
                        </div>
                        <div className="btn_item">
                            <Button className={'button--table'} title ={'Добавить'} onButtonClick = {insertElement}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    };



export default BiographyView;