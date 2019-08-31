import React from 'react'
import {connect} from 'react-redux'
import './list.sass'

class List extends React.Component {
    render() {
        const {infos} = this.props
        return (
            <div className="list-wrap">
                <ul>
                    {
                        infos.map((item, i) => {
                            return (
                                <li className="list-content" key={i}>
                                    <div className="left-content">
                                        <a href="/" className="title">{item.get('name')}</a>
                                        <p className="desc">{item.get('desc')}</p>
                                    </div>
                                    <img className="right-content" src={item.get('imgUrl')} alt=""/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    infos: state.getIn(['home', 'infos'])
})

export default connect(mapStateToProps, null)(List)
