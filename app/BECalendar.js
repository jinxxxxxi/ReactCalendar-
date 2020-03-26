import React from "react";
import {render} from "react-dom";
import Calendar from "./Calendar.js"


class BECalendar extends React.Component {
    constructor() {
        super();
        this.state = {
            "year": 2020,
            "month": 2,
            'day': 1,
        }

    }

    returnYearMonthDay(data){
        this.setState({
            "year": data.year,
            "month": data.month,
            'day': data.day,
        });
        // console.log(data.year)
    }


    render() {
        return (
            <div className="BECalendar">
                <div className="chooseBox">
                    <div className="begin result">
                        当前日期:
                        <b>{this.state.year}-{this.state.month}-{this.state.day}</b>
                        <span className="glyphicon glyphicon-calendar canlendarbtn" onClick={()=>{$(this.refs.BEcalendar).fadeToggle();}}> </span>
                        <div ref='BEcalendar'><Calendar returnYearMonthDay={(this.returnYearMonthDay).bind(this)}
                                                      year={this.state.year} month={this.state.month}
                                                      day={this.state.day} />
                        </div>
                    </div>
                    {/*<div className="days">共<span>60</span>天</div>*/}
                    {/*<div className="end result">结束日期:<b>{this.state.endyear}-{this.state.endmonth}-{this.state.endday}</b>*/}
                        {/*<span className="glyphicon glyphicon-calendar canlendarbtn " onClick={()=>{$(this.refs.Ecalendar).fadeToggle();}} > </span>*/}
                        {/*<div ref='Ecalendar'><Calendar returnYearMonthDay={(this.returnYearMonthDay).bind(this)}*/}
                                                      {/*year={this.state.endyear} month={this.state.endmonth}*/}
                                                      {/*day={this.state.endday}  BorE={this.state.BorE}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default BECalendar