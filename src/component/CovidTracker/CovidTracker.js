import React, { useEffect, useState } from 'react';
import './style.css';

const CovidTracker = () => {

    const [data, setData] = useState([]);

    //Title of the site
    useEffect(() => {
        document.title = `Covid Tracker`;
    });

    const getCovidData = async () => {
        try {
            const covidData = await (await fetch('https://data.covid19india.org/data.json')).json();
            console.log(covidData.statewise[36]);
            setData(covidData.statewise[36]);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <section>
                <h1 className='heading-style live'><span className="dot"></span>LIVE</h1>
                <h2 className='heading-style'>COVID-19 CORONA VIRUS TRACKER</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card flex-center">
                            <div className='card-body'>
                                <h1 className="card-title">OUR COUNTRY</h1>
                                <h3 className="card-text">INDIA</h3>
                                <h3 className="card-text">{data.state}</h3>
                                <h2 className="btn btn-primary">{data.recovered}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card flex-center">
                            <div className='card-body'>
                                <h1 className="card-title">TOTAL RECOVERED</h1>
                                <h2 className="btn btn-primary">{data.recovered}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card flex-center">
                            <div className='card-body'>
                                <h1 className="card-title">TOTAL CONFIRM</h1>
                                <h2 className="btn btn-primary">{data.confirmed}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card flex-center">
                            <div className='card-body'>
                                <h1 className="card-title">TOTAL DEATH</h1>
                                <h2 className="btn btn-primary">{data.deaths}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card flex-center">
                            <div className='card-body'>
                                <h1 className="card-title">TOTAL ACTIVE</h1>
                                <h2 className="btn btn-primary">{data.active}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card flex-center">
                            <div className='card-body'>
                                <h1 className="card-title">LAST UPDATED</h1>
                                <h2 className="btn btn-primary">{data.lastupdatedtime}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <marquee scrollamount="15" behavior="alternate">
                <h2>
                    Here is presenting Covid statistics of India, You can check all the details here.
                </h2>
            </marquee>
        </>
    )
}

export default CovidTracker
