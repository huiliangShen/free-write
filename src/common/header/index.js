import React, {Component} from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrap,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Header extends Component {

    getListArea = () => {
        const { focus, list, page, totalPage, mouseIn, mouseInFn, mouseOutFn, handleChangePage } = this.props
        let showList = list.slice(page * 10, (page + 1) * 10)
        if (focus || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={mouseInFn}
                    onMouseLeave={mouseOutFn}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.circle)}>
                            <i ref={(circle) => { this.circle = circle} } className="js circle">&#xe601;</i>
                            换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            showList.map((e) => {
                                return (
                                    <SearchInfoItem key={e}>{e}</SearchInfoItem>
                                )
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const {list} = this.props
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">
                        <i className="js">&#xe607;</i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrap>
                        <NavSearch
                            className={this.props.focus ? 'focus' : ''}
                            onFocus={() => this.props.setFocus(list)}
                            onBlur={this.props.setBlur}
                        ></NavSearch>
                        <i className={this.props.focus ? 'js zoom focus' : 'js zoom'}>&#xe602;</i>
                        {/*热门搜索*/}
                        {
                            this.getListArea()
                        }
                    </SearchWrap>
                    <Addition>
                        <Button className="write"><i className="js">&#xe616;</i>写文章</Button>
                        <Button className="register">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}

/*
const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一换</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>测试</SearchInfoItem>
                    <SearchInfoItem>测试</SearchInfoItem>
                    <SearchInfoItem>测试</SearchInfoItem>
                    <SearchInfoItem>测试</SearchInfoItem>
                    <SearchInfoItem>测试</SearchInfoItem>
                    <SearchInfoItem>测试</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href='/'/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">
                    <i className="js">&#xe607;</i>
                </NavItem>
                <NavItem className="right">登录</NavItem>
                <SearchWrap>
                    <NavSearch
                        className={props.focus ? 'focus' : ''}
                        onFocus={props.setFocus}
                        onBlur={props.setBlur}
                    ></NavSearch>
                    <i className={props.focus ? 'js focus' : 'js'}>&#xe602;</i>
                    {/!*热门搜索*!/}
                    {
                        getListArea(props.focus)
                    }
                </SearchWrap>
                <Addition>
                    <Button className="write"><i className="js">&#xe616;</i>写文章</Button>
                    <Button className="register">注册</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    )
}
*/


const mapStateToProps = (state) => {
    return {
        // focus: state.get('header').get('focus')
        focus: state.getIn(['header', 'focus']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFocus(list) {
            console.log(list)
            list.size === 0 && dispatch(actionCreators.getList())
            dispatch(actionCreators.setFocus())
        },
        setBlur() {
            const action = actionCreators.setBlur()
            dispatch(action)
        },
        mouseInFn () {
            dispatch(actionCreators.mouseIn())
        },
        mouseOutFn () {
            dispatch(actionCreators.mouseOut())
        },
        handleChangePage (page, total, circle) {
            let angle = circle.style.transform.replace(/[^0-9]/ig, '')
            if (angle) {
                angle = angle - 0
            } else {
                angle = 0
            }
            angle = angle + 360
            circle.style.transform = `rotate(${ angle }deg)`
            let nextPage = page >= total - 1 ? 0 : page + 1

            dispatch(actionCreators.changePage(nextPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
