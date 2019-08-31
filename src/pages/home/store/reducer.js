import {fromJS} from 'immutable'

const defaultStatus = fromJS({
    topics: [{
        name: '旅行·在路上',
        imgUrl: 'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        name: '简书电影',
        imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        name: '@IT·互联网',
        imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        name: '摄影',
        imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        name: '读书',
        imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        name: '故事',
        imgUrl: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }, {
        name: '自然科普',
        imgUrl: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }],
    infos: [{
        name: '开发共层中',
        imgUrl: 'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        desc: '安卓开发中经常有需要使用摄像头的应用场景，对于初次接触的同学摄像头的方向是一个比较难弄清楚的概念，开发时很容易处理不当，本文将详述该部分内容帮助...'
    }, {
        name: '开发共层中',
        imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        desc: '安卓开发中经常有需要使用摄像头的应用场景，对于初次接触的同学摄像头的方向是一个比较难弄清楚的概念，开发时很容易处理不当，本文将详述该部分内容帮助...'
    }, {
        name: '开发共层中',
        imgUrl: '//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        desc: '安卓开发中经常有需要使用摄像头的应用场景，对于初次接触的同学摄像头的方向是一个比较难弄清楚的概念，开发时很容易处理不当，本文将详述该部分内容帮助...'
    }, {
        name: '开发共层中',
        imgUrl: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
        desc: '安卓开发中经常有需要使用摄像头的应用场景，对于初次接触的同学摄像头的方向是一个比较难弄清楚的概念，开发时很容易处理不当，本文将详述该部分内容帮助...'
    }],
    writes: [
        {
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
            href: ''
        },
        {
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
            href: ''
        },
        {
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
            href: ''
        },
        {
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png',
            href: ''
        }
    ],
    recommends: [{
        "id": 3627484,
        "slug": "c5580cc1c3f4",
        "nickname": "简书大学堂",
        "avatar_source": "http://upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png",
        "total_likes_count": 34776,
        "total_wordage": 1510893,
        "is_following_user": false
    }, {
        "id": 3292545,
        "slug": "c4165d16d0ad",
        "nickname": "北美之北",
        "avatar_source": "http://upload.jianshu.io/users/upload_avatars/3292545/78f2855a-80fd-419a-9fb2-1aeed39690f0.png",
        "total_likes_count": 29136,
        "total_wordage": 435811,
        "is_following_user": false
    }, {
        "id": 52841,
        "slug": "8f5b45499715",
        "nickname": "闫泽华",
        "avatar_source": "http://upload.jianshu.io/users/upload_avatars/52841/251f5481-67b6-4bf0-86f4-faac9768beb3.jpeg",
        "total_likes_count": 2811,
        "total_wordage": 250163,
        "is_following_user": false
    }, {
        "id": 13213889,
        "slug": "080bb4eac1c9",
        "nickname": "无限猴子",
        "avatar_source": "http://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg",
        "total_likes_count": 2089,
        "total_wordage": 393459,
        "is_following_user": false
    }, {
        "id": 3343569,
        "slug": "b3b2c03354f3",
        "nickname": "吴晓布",
        "avatar_source": "http://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg",
        "total_likes_count": 21702,
        "total_wordage": 681171,
        "is_following_user": false
    }]
})

export default (state = defaultStatus, action) => {
    switch (action.type) {
        default:
            return state
    }
}
