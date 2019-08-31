import React from 'react'
import {connect} from "react-redux";
import './write.sass'

class Writer extends React.Component {

    render() {
        const {writes} = this.props
        return (
            <div className="write-wrap">
                {
                    writes.map((item, i) => (
                        <a href="#" className="write-content" key={i}>
                            <img src={item.get('imgUrl')} alt=""/>
                        </a>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    writes: state.getIn(['home', 'writes'])
})

export default connect(mapStateToProps, null)(Writer)
