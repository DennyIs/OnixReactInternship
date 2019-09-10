import React, {Component} from "react";
import '../../../assets/components/app/App.css';
import Table from "../Biography/Table";
export default class Biography extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	        sortedByFunc: false,
	        sortedByBubble: false,
			insertDate: '',
			insertEvent: '',
			startIndex: null,
			finishIndex: null,
            imageStatus: 'loading',
            imgSrc: 'https://i.gifer.com/72gi.gif',
	        events:
                {
                	0:
					{
						date: "1996",
						event: "Год рождения",
                        classes: [],
					},
					1:
					{
						date: "2002",
						event: "Начало учебы в школе",
                        classes: [],
					},
					2:
					{
						date: "2011",
						event: "Закончил школу и поступил в колледж",
                        classes: [],
					},
					3:
					{
						date: "2015",
						event: "Закончил колледж",
                        classes: [],
					},
					4:
					{
						date: "2015",
						event: "Начал обудение в КНТУ",
                        classes: [],
					},
					5:
					{
						date: "2018",
						event: "Начал учить программирование",
                        classes: [],
					},
					6:
					{
						date: "2018",
						event: "Окончил бакалаврат и перешел на магистратуру",
                        classes: [],
					}
   				 },
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

	};

    deleteElement = (index) =>{
        const updEvents = {...this.state.events};
        delete updEvents[index];

        this.setState({
            events: updEvents
        })
    };

    handleImageLoaded = () => {
        this.setState({ imageStatus: "Loaded" });
    };

    handleImageError = () => {
        this.setState({ imageStatus: "failed to load" });
    };
    handleMarked =(index, e) =>{
        const updEvents = {...this.state.events};
        if (!e.ctrlKey && !e.altKey) {
            return;
        }
        if (e.ctrlKey && updEvents[index].marked) {
            updEvents[index].marked = false;
            updEvents[index].classes = "";
        }
        else{
            updEvents[index].marked = true;
            updEvents[index].classes = "active";

        }
        this.setState({
            events:updEvents
        });
        console.log(updEvents)
    };
   onDragStart = (e, index) => {
        this.draggedItem = this.state.events[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target);
       this.setState({
           startIndex: index
       });
    };
    onDragOver = (index) => {
        const draggedOverItem = this.state.events[index];
        if (this.draggedItem === draggedOverItem) {
            return;
        }
        this.setState({
            finishIndex: index
        });
    };
    onDragEnd = () => {
        const {events, startIndex, finishIndex} = this.state;
        let start = events[startIndex];
        events[startIndex] = events[finishIndex];
       	events[finishIndex] = start;
        this.setState({
            events,
            startIndex: null,
            finishIndex: null
        })
    };
    render() {
        const {events, imgSrc, imageStatus} = this.state;
        return (
                   <Table
                       sortFunction = {this.sortFunction}
                       bubbleSort = {this.bubbleSort}
                       updateEvent = {this.updateEvent}
                       insertElement = {this.insertElement}
                       deleteElement = {this.deleteElement}
                       handleImageLoaded = {this.handleImageLoaded}
                       handleImageError = {this.handleImageError}
                       handleMarked = {this.handleMarked}
                       onDragStart = {this.onDragStart}
                       onDragOver = {this.onDragOver}
                       onDragEnd = {this.onDragEnd}
                       renderRow = {this.renderRow}

                       events = {events}
                       imgSrc = {imgSrc}
                       imageStatus = {imageStatus}
                       classes = {events.classes}
                   />
        );
    };
}
