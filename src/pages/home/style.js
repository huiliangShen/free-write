import styled from 'styled-components'

export const HomeWrap = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    & > img {
        width: 100%;
        height: 270px;
        margin-bottom: 35px;
    }
`

export const HomeRight = styled.div`
    float: right;
    width: 285px;
    padding-top: 30px;
`

/* topic */
export const TopicWrap = styled.div`
    margin-bottom: 20px;
`

export const TopicItem = styled.a`
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
    cursor: pointer;
    img {
        width: 32px;
        height: 32px;
        vertical-align: middle;
    }
    .name {
        display: inline-block;
        box-sizing: border-box;
        font-size: 14px;
        padding: 0 11px 0 6px;
    }
`
