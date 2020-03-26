import React from "react";
import {render} from "react-dom";
import showMonthtable from "./getCalendar.js"
import YearMonthChoose from "./YearMonthChoose.js"

class Calendar extends React.Component {
    constructor({returnYearMonthDay,year,month,day}) {
        super();

        this.state = {
            "year": year,
            "month": month,
            'day':day,
            'show': false,

        }
    }

    componentDidMount() {
        var self = this;
        $(this.refs.days).find("td").click(function () {
            self.props.returnYearMonthDay(self.state);
            if (this.className == 'special'){
                return
            } else {
                self.setState({
                    'day':this.innerText
                });
                self.props.returnYearMonthDay(self.state)
            }
        });
    }

    showOnTheTable(year, month) {
        var dataArr = showMonthtable(this.state.year, this.state.month);
        var keyArr = dataArr.rearArr.concat(dataArr.monthArr, dataArr.headArr);
        var tds = [];
        var trs = [];
        let printCalssName =(index)=> {
            if (index < dataArr.rearArr.length || index >= (dataArr.rearArr.length + dataArr.monthArr.length)){
                return 'special'
            } else if (keyArr[index] == this.state.day) {
                return 'daycur'
            }
        }
        keyArr.forEach(function (item, index) {
            if (index % 7 == 0) {

                trs.push(<tr key={index}>{tds}</tr>)
                tds = [];
                tds.push(<td key={index}
                             className={printCalssName(index)}>{item}</td>)
            } else {
                tds.push(<td key={index}
                             className={printCalssName(index)}>{item}</td>)
            }
        });
        trs.push(<tr key={5}>{tds}</tr>);
        return <tbody ref='days'>{trs}</tbody>;
    }

    gotoNextMonth() {
        if (this.state.month == 12) {
            this.setState({
                "year": this.state.year + 1,
                "month": 1
            })
        } else {
            this.setState({
                "month": this.state.month + 1
            })
        }

    }

    gotoLastMonth() {
        if (this.state.month == 1) {
            this.setState({
                "year": this.state.year - 1,
                "month": 12
            })
        } else {
            this.setState({
                "month": this.state.month - 1
            })
        }

    }

    showYearMonthMoudle() {
        if (this.state.show) {
            console.log(1111111111111)

            return <YearMonthChoose year={this.state.year} month={this.state.month}
                                    onchose={(this.onchose).bind(this)}/>;

        } else {
            return ''
        }
    }

    onchose(data) {
        this.setState({
            "year": data.year,
            'month': data.month,
            'show': false
        });
        console.log(data);
        this.setState({
            'show':false
        })
    }


    render() {
        // console.log("Calendar render")
        return (
            <div className="calendarUnit">
                <div  ref='disappear'>
                    {/*父组件传值yeaR month给子组件 因为组价的年月是根据父组件来确定的*/}
                    {this.showYearMonthMoudle()}
                </div>
                <div className="headTable">
                    <a onClick={(this.gotoLastMonth).bind(this)}>上个月</a>
                    <h6 onClick={() => {
                        this.setState({'show': !this.state.show})
                    }}>{this.state.year}-{this.state.month}</h6>
                    <a onClick={(this.gotoNextMonth.bind(this))}>下个月</a>
                </div>
                <table>
                    <thead>
                    <tr>
                        {["週日", "週一", "週二", "週三", "週四", "週五", "週六"].map(function (item, index) {
                            return <td key={index}>{item}</td>
                        })}
                    </tr>
                    </thead>
                    {this.showOnTheTable(this.state.year, this.state.month)}
                </table>
            </div>
        )
    }
}

export default Calendar