import React from 'react'
import {connect} from "react-redux";
import './recommend.sass'

class Recommend extends React.Component {
    render() {
        const {recommends} = this.props
        return (
            <div className="recommend">
                <div className="recommend-top">
                    <span className="recommend-write">推荐作者</span>
                    <a href="#" className="recommend-circle">
                        <i ref={(circle) => { this.circle = circle} } className="js circle">&#xe601;</i>
                        换一批
                    </a>
                </div>
                <ul>
                    {
                        recommends.map((item) => (
                            <li className="recommend-list" key={item.id}>
                                <a href="#" className="r-icon">
                                    <img src={item.get('avatar_source')} alt=""/>
                                </a>
                                <div className="r-content">
                                    <h3>{item.get('nickname')}</h3>
                                    <p>写了{item.get('total_wordage')}字 · {item.get('total_likes_count')} 喜欢</p>
                                </div>
                                <a href="#" className="r-focus">
                                    <i className="js circle">&#xe855;</i>
                                    关注
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="recommend-bottom">
                    <a href="#" className="all">查看全部<i className="js circle">&#xe600;</i></a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recommends: state.getIn(['home', 'recommends'])
})

export default connect(mapStateToProps, null)(Recommend)
