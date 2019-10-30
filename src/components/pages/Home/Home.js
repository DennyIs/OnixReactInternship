import React, { useState } from 'react';

import HomeView from './HomeView';

function Home() {
  const [events, setEvents] = useState({
    0:
        {
          date: '1996',
          event: 'Год рождения',
          classes: [],
        },
    1:
        {
          date: '2002',
          event: 'Начало учебы в школе',
          classes: [],
        },
    2:
        {
          date: '2011',
          event: 'Закончил школу и поступил в колледж',
          classes: [],
        },
    3:
        {
          date: '2015',
          event: 'Закончил колледж',
          classes: [],
        },
    4:
        {
          date: '2015',
          event: 'Начал обудение в КНТУ',
          classes: [],
        },
    5:
        {
          date: '2018',
          event: 'Начал учить программирование',
          classes: [],
        },
    6:
        {
          date: '2018',
          event: 'Окончил бакалаврат и перешел на магистратуру',
          classes: [],
        }
  });
  const [myCity, setMyCity] = useState('');
  const [weather, setWeather] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
  });
  const [insertDate, setInsertDate] = useState('');
  const [insertEvent, setInsertEvent] = useState('');
  const [startIndex, setStartIndex] = useState(null);
  const [finishIndex, setFinishIndex] = useState(null);
  const [show] = useState(true);
  const [imageStatus, setImageStatus] = useState('loading');
  const [imgSrc] = useState('https://i.gifer.com/72gi.gif');
  const [draggedItem, setDraggedItem] = useState('');
  const [hasError] = useState(false);


  /* Weather */
  const handleChange = (event) => {
    setMyCity(event.target.value);
  };
  const getWeather = () => {
    if (myCity !== '') {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCity}
      &appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
          const { sunset } = data.sys;
          const date = new Date(+sunset * 1000);
          const sunsetTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
          const { sunrise } = data.sys;
          const date1 = new Date(+sunrise * 1000);
          const sunriseTime = `${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;
          window.setTimeout(() => {
            setWeather({
              temp: data.main.temp,
              city: data.name,
              country: data.sys.country,
              humidity: data.main.humidity,
              pressure: data.main.pressure,
              sunrise: sunriseTime,
              sunset: sunsetTime,
            });
          }, 3000);
        })
        .catch((e) => {
          return e;
        });
    }

    return false;
  };


  /* Biography */


  const sortFunction = () => {
    const updSort = false;
    const arrList = Object.values(events);
    let sortArrList;
    if (updSort) {
      sortArrList = arrList.sort((a, b) => ((+a.date) - (+b.date)));
    } else {
      sortArrList = arrList.reverse();
    }

    setEvents({
      ...sortArrList
    });
  };


  const bubbleSort = () => {
    const arrList = Object.values(events);
    const keys = Object.keys(arrList);
    for (let i = keys.length - 1; i >= 0; i -= 1) {
      for (let j = 0; j < i; j += 1) {
        const cur = arrList[j];
        const prev = arrList[j + 1];

        if (cur.event.toLowerCase() > prev.event.toLowerCase()) {
          const temp = arrList[j];
          arrList[j] = arrList[j + 1];
          arrList[j + 1] = temp;
        }
      }
    }
    setEvents({
      ...arrList
    });
  };

  const onEventChange = (e) => {
    setInsertEvent(e.target.value);
  };

  const onDataChange = (e) => {
    setInsertDate(e.target.value);
  };

  const insertElement = () => {
    const updEvents = events;
    if (!insertDate || !insertEvent) {
      return;
    }
    if (Number.isNaN(insertDate)) {
      return;
    }
    if (insertDate <= 1990 || insertDate >= 3000) {
      return;
    }
    updEvents[Object.keys(updEvents).length] = {
      date: insertDate,
      event: insertEvent
    };
    setEvents({
      ...updEvents
    });
  };

  const deleteElement = (index) => {
    delete events[index];
    setEvents({
      ...Object.values(events)
    });
  };

  const handleImageLoaded = () => {
    setImageStatus('Loaded');
  };

  const handleImageError = () => {
    setImageStatus('failed to load');
  };

  const handleMarked = (index, e) => {
    const updEvents = Object.values(events);
    if (!e.ctrlKey && !e.altKey) {
      return;
    }
    if (e.ctrlKey && updEvents[index].marked) {
      updEvents[index].marked = false;
      updEvents[index].classes = '';
    } else {
      updEvents[index].marked = true;
      updEvents[index].classes = 'active';
    }
    setEvents({
      ...updEvents
    });
  };

  const onDragStart = (e, index) => {
    setDraggedItem(Object.values(events[index]));
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
    setStartIndex(index);
  };

  const onDragOver = (index) => {
    const draggedOverItem = events[index];
    if (draggedItem === draggedOverItem) {
      return;
    }
    setFinishIndex(index);
  };

  const onDragEnd = () => {
    const start = events[startIndex];
    events[startIndex] = events[finishIndex];
    events[finishIndex] = start;
    setEvents(events);
    setStartIndex(null);
    setFinishIndex(null);
  };

  const {
    temp, city, country, humidity, pressure, sunrise, sunset 
  } = weather;
  return (
    <HomeView
      onEventChange={onEventChange}
      onDataChange={onDataChange}
      insertElement={insertElement}
      deleteElement={deleteElement}
      handleImageLoaded={handleImageLoaded}
      handleImageError={handleImageError}
      handleMarked={handleMarked}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      getWeather={getWeather}
      handleChange={handleChange}
      sortFunction={sortFunction}
      bubbleSort={bubbleSort}

      events={events}
      imageStatus={imageStatus}
      imgSrc={imgSrc}
      classes={events.classes}
      myCity={myCity}
      show={show}
      weather={weather}
      hasError={hasError}
      temp={temp}
      city={city}
      country={country}
      humidity={humidity}
      pressure={pressure}
      sunrise={sunrise}
      sunset={sunset}
    />
  );
}
export default Home;
