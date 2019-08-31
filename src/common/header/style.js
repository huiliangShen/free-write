import styled from 'styled-components'
import logo from '../../static/imgs/logo.png'

export const HeaderWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
`

export const Logo = styled.a `
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logo});
    background-size: contain;
`

export const Nav = styled.div `
    width: 960px;
    padding: 0 70px 0 0px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`

export const NavItem = styled.div `
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    &:hover:not(.active) {
        background: #f5f5f5;
    }
`

export const SearchWrap = styled.div `
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align:center;
        border-radius:50%;
        &.focus {
            background: #777;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜搜'
})`
    transition: all 0.3s ease-out;
    width: 160px;
    height: 38px;
    line-height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
    &.focus {
        width: 240px;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    cursor: pointer;
    &.register {
        color: #ec6149;
        padding: 0 25px
    }
    &.write {
        color: #fff;
        background: #ec6149;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 25px;
    top: 57px;
    width: 240px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    &::before {
        position: absolute;
        top: -5px;
        content: ' ';
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        background: #fff;
    }
`

export const SearchInfoTitle = styled.div`
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 20px;
    color: #969696
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 12px;
    cursor: pointer;
    .circle {
        display:block;
        font-size: 12px;
        margin-right: 2px;
        float: left;
        transition: all .35s ease-in;
        transform-origin: center center;
    }
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border-radius: 3px;
    color: #787878;
    border: 1px solid #ddd;
    cursor: pointer;
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`
