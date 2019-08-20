import React, {Component} from "react";
import '../../assets/components/app/App.css';
class Biography extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	        sortedByFunc: false,
	        sortedByBubble: false,
			insertDate: '',
			insertEvent: '',
	        events:
                {
                	0:
						{
							date: "1996",
							event: "Год рождения"
						},
					1:
						{
							date: "2002",
							event: "Начало учебы в школе"
						},
					2:
						{
							date: "2011",
							event: "Закончил школу и поступил в колледж"
						},
					3:
						{
							date: "2015",
							event: "Закончил колледж"
						},
					4:
						{
							date: "2015",
							event: "Начал обудение в КНТУ"
						},
					5:
						{
							date: "2018",
							event: "Начал учить программирование"
						},
					6:
						{
							date: "2018",
							event: "Окончил бакалаврат и перешел на магистратуру"
						}
				}
	    	};
		}

	sortFunction = () => {
		const updEvents = {...this.state.events};
		const updSort = this.state.sortFunction;
		let sort;
		if (updSort) {
	            sort = Object.values(updEvents).sort((a, b) => ((+a.date) - (+b.date)));
	        } else {
            sort = Object.values(updEvents).reverse();
	        }
	        for (let key in Object.keys(updEvents)){
	        	updEvents[key] = sort[key];
			}
	    this.setState({
	    	events: updEvents,
	    	sortFunction: !updSort
	    })
	};

    bubbleSort = () => {
        const updEvents = {...this.state.events};
        const keys = Object.keys(updEvents);
        for (let i = keys.length - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                let cur = updEvents[j];
                let prev = updEvents[j + 1];

                if (cur.event.toLowerCase() > prev.event.toLowerCase()) {
                    let temp = updEvents[j];
                    updEvents[j] = updEvents[j + 1];
                    updEvents[j + 1] = temp;
                }
            }
        }
        this.setState({
            events: updEvents,
        })
	};

    updateEvent = (event) =>{
            const { target : {id, value} } = event;
            this.setState({
                [id]: value
            })
        };

	insertElement =() =>{
        const updEvents = {...this.state.events};
		const insertDate = this.state.insertDate;
        const insertEvent = this.state.insertEvent;
        if (!insertDate || !insertEvent) {
        	alert('Заполните поля');
            return;
        }
        if (isNaN(insertDate)) {
            alert('Введите дату');
            return;
        }
        if (insertDate <= 1990 || insertDate >= 3000) {
            alert('Дата должна быть больше 1990 и меньше 3000');
            return;
        }
		updEvents[Object.keys(updEvents).length] = {
			 date: insertDate,
	         event: insertEvent
		};
        this.setState({
            events: updEvents,
        });
		console.log(insertDate, insertEvent);
	};

    deleteElement = (index) =>{
        const updEvents = {...this.state.events};
        delete updEvents[index];

        this.setState({
            events: updEvents
        })
    };

	renderTable(data){
		return(
			<table>
				<tbody>
	                <tr>
	                    <th onClick={this.sortFunction}>Year<br/></th>
	                    <th onClick={this.bubbleSort}>Event<br/></th>
	                </tr>
					{
                    Object.entries(data).map(([index, row]) => this.renderRow(row, index))
                    }
	                </tbody>
			</table>
			)
	};

	renderRow(row, index) {
	    return (
	        <tr key={index}>
	            <td className="date">{row.date}</td>
	            <td className="event">{row.event}</td>
				<td><input type="button"  className="button1" value="Удалить" onClick={this.deleteElement.bind(this, index)}/></td>
	        </tr>

	    )
	};

    render() {
        return (
            <div className="content">
               {this.renderTable(this.state.events)}
               <div className="button">
	                <div className="input_block">
				        <input type="text"  id="insertDate"  onChange={this.updateEvent} className="fields" placeholder="date"/>
				        <input type="text"  id="insertEvent"  onChange={this.updateEvent} className="fields" placeholder="event"/>
			        </div>
                    <input type="button" className="button1" value="Добавить" onClick={this.insertElement}/>
                </div>
    		</div>
        );
    };
}
export default Biography;