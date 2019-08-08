import React, {Component} from "react";
import '../../assets/components/app/App.css';
class Biography extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	        sortedByFunc: false,
	        sortedByBubble: false,
	        events: [
	            {
	                date: "1996",
	                event: "Год рождения"
	            },
	            {
	                date: "2002",
	                event: "Начало учебы в школе"
	            },
	            {
	                date: "2011",
	                event: "Закончил школу и поступил в колледж"
	            },
	            {
	                date: "2015",
	                event: "Закончил колледж"
	            },
	            {
	                date: "2015",
	                event: "Начал обудение в КНТУ"
	            },
	            {
	                date: "2018",
	                event: "Начал учить программирование"
	            },
	            {
	                date: "2018",
	                event: "Окончил бакалаврат и перешел на магистратуру"
	            }
	        ],
	    };
	}

	sortFunction = () => {
		const updEvents = this.state.events.slice(0);
		const updSort = this.state.sortFunction;
		if (updSort) {
	            updEvents.sort((a, b) => ((+a.date) - (+b.date)));
	        } else {
	            updEvents.reverse();
	        }
	    this.setState({
	    	events: updEvents,
	    	sortFunction: !updSort
	    })
	};

	bubbleSort = () =>
	{
        const updEvents = this.state.events.slice(0);
        for (let i = updEvents.length - 1; i >= 0; i--) {
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
            events: updEvents
        })
	};

	insertElement =() =>{
        const updEvents = this.state.events.slice(0);
		const date = document.getElementById('field1').value;
        const events = document.getElementById('field2').value;
		updEvents.push({
			 date: date,
	         event: events
		});
		this.setState({
			events: updEvents
		})
	};


	deleteElement = () =>{
		const updEvents = this.state.events.slice(0);
		updEvents.pop();
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
	                {data.map((row, index) => this.renderRow(row, index))}
	                </tbody>
			</table>
			)
	};

		
	 
	renderRow(row, index) {
	    return (
	        <tr key={index}>
	            <td className="date">{row.date}</td>
	            <td className="event">{row.event}</td>
	        </tr>
	        
	    )
	};


    render() {
        return (
            <div className="content">
               {this.renderTable(this.state.events)} 
               <div className="button">
	                <div class="input_block">
				        <input type="text"  id="field1" className="fields" placeholder="date"/>
				        <input type="text"  id="field2" className="fields" placeholder="event"/>
			        </div>
                    <input type="button" className="button1" value="Добавить" onClick={this.insertElement}/>
                    <input type="button"  className="button1" value="Удалить" onClick={this.deleteElement}/>
                </div>
    		</div>
        );
    };
};
export default Biography; 