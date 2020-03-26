import React from "react";
import {render} from "react-dom";
import PropTypes from 'prop-types';

class YearMonthChoose extends React.Component{

    constructor({onchose,year,month}){
        // console.log("YearMonthChoose constructor")
        super();
        this.state = {
            "year":year,
            "month":month,
        };
        this.cyear = this.state.year;
    }
    //右按钮事件

    carrouselRightBtn(){
        this.cyear --;
        /*！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
        ！！！！！！！！！为什么这里把prepend去掉后 修改this.cyear视图里面的数据不会重绘！！！！
        * ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！*/
        $(this.refs.moveUnit).prepend($(`<a class="yearUnit">${this.cyear-2}</a>`)).stop(true,true).animate({"left":0},200,function () {
            $(this).find('a').eq(4).remove();
            $(this).css({"left":-33});
        });
        $(this.refs.moveUnit).find("a").eq(2).addClass("cur").siblings().removeClass("cur");
        if (this.cyear == this.state.year){
            $(this.refs.month).find('a').removeClass('cur')
            $(this.refs.month).find('a').eq(this.state.month-1).addClass('cur')
        }else {
            $(this.refs.month).find('a').removeClass('cur')
        }
        console.log(this.cyear == this.state.year)
    }
    //左按钮事件
    carrouselLeftBtn(){
        this.cyear++;
        $(this.refs.moveUnit).append($(`<a class="yearUnit">${this.cyear+1}</a>`)).stop(true,true).animate({"left":-66},200,function () {
            $(this).css({"left":-33});
            $(this).find('a').eq(0).remove();
        });
        $(this.refs.moveUnit).find("a").eq(3).addClass("cur").siblings().removeClass("cur");
        if (this.cyear == this.state.year){
            $(this.refs.month).find('a').removeClass('cur')
            $(this.refs.month).find('a').eq(this.state.month-1).addClass('cur')
        }else {
            $(this.refs.month).find('a').removeClass('cur')
        }
        console.log(this.cyear == this.state.year)
    }

    // componentWillMount() {
    //     console.log("componentWillMount")
    // }

    componentDidMount() {
        // console.log("YearMonthChoose componentDidMount");
        var self = this;
        //月份加cur
        $(this.refs.month).find('a').removeClass('cur');
        $(this.refs.month).find('a').eq(self.state.month-1).addClass('cur');

        //月份点击事件
        $(this.refs.month).find('a').click(function () {
                self.setState({
                    'year':self.cyear,
                    'month':parseInt(this.text),
                });
                self.props.onchose(self.state)

            }

        )
    }


    //render重绘时会紧接着做这个componentWillUpdate
    componentWillUpdate(prevProps, prevState, snapshot) {
        // console.log("YearMonthChoose componentWillUpdate");
        this.state.year = prevProps.year;
        this.state.month = prevProps.month;
        this.cyear = prevProps.year;
        // console.log(prevState.year)
    }

    render() {
        // console.log('YearMonthChoose render');
        // console.log(this.state.year+' '+this.state.month)
        // //月份加cur
        // $(this.refs.month).find('a').removeClass('cur');
        // $(this.refs.month).find('a').eq(self.state.month-1).addClass('cur');
        return(
            <div className="yearmonth">
                <div className="innerYearMonth">
                    <div className="year">
                        <div className="carrouselBox">
                            <div className="moveUnit" ref='moveUnit'>
                                <a className="yearUnit">{this.cyear-2}</a>
                                <a className="yearUnit">{this.cyear-1}</a>
                                <a className="yearUnit cur">{this.cyear}</a>
                                <a className="yearUnit">{this.cyear+1}</a>
                            </div>
                        </div>
                        <span className="glyphicon glyphicon-chevron-right" onClick={(this.carrouselRightBtn).bind(this)}></span>
                        <span className="glyphicon glyphicon-chevron-left"  onClick={(this.carrouselLeftBtn).bind(this)}></span>
                    </div>
                    <div className="month" ref='month'>
                        <div className="col">
                            <a href="javascript:void(0)" >1月</a>
                            <a href="javascript:void(0)" >2月</a>
                            <a href="javascript:void(0)" >3月</a>
                            <a href="javascript:void(0)" >4月</a>
                            <a href="javascript:void(0)" >5月</a>
                            <a href="javascript:void(0)" >6月</a>
                        </div>
                        <div className="col">
                            <a href="javascript:void(0)" >7月</a>
                            <a href="javascript:void(0)" >8月</a>
                            <a href="javascript:void(0)" >9月</a>
                            <a href="javascript:void(0)" >10月</a>
                            <a href="javascript:void(0)" >11月</a>
                            <a href="javascript:void(0)" >12月</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

YearMonthChoose.propTypes = {
    onchose: PropTypes.func.isRequired,
    year:PropTypes.number.isRequired,
    month:PropTypes.number.isRequired,
};
export  default YearMonthChoose