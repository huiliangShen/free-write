import React from 'react'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'
import {
    HomeWrap,
    HomeLeft,
    HomeRight
} from './style'

class Home extends React.Component {

    render() {
        return (
            <HomeWrap>
                <HomeLeft>
                    <img src="https://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Writer />
                    <Recommend />
                </HomeRight>
            </HomeWrap>
        )
    }
}

export default Home
