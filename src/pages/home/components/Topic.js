import React from 'react'
import { connect } from 'react-redux'
import {TopicWrap, TopicItem} from '../style'

class Topic extends React.Component {
    render() {
        const {topics} = this.props
        return (
            <TopicWrap>
                {
                    topics.map((e, i) => {
                        return (
                            <TopicItem key={i}>
                                <img src={e.get('imgUrl')} alt=""/>
                                <div className="name">{e.get('name')}</div>
                            </TopicItem>
                        )
                    })
                }
            </TopicWrap>
        )
    }
}

const mapState = (state) => ({
  topics: state.get('home').get('topics')
})

export default connect(mapState, null)(Topic)
