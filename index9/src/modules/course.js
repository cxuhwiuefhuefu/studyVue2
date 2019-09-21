export default {
    namespaced: true,
    state: {
        courseList: [
            {
                name: '课程1',
                price: 0,
                poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
            },
            {
                name: '课程2',
                price: 8.8,
                poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
            },
            {
                name: '课程3',
                price: 8.8,
                poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
            },
            {
                name: '课程4',
                price: 8.8,
                poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
            },
            {
                name: '课程5',
                price: 8.8,
                poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
            },
            {
                name: '课程6',
                price: 8.8,
                poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
            },
            {
                name: '课程7',
                price: 8.8,
                poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
            },
            {
                name: '课程8',
                price: 8.8,
                poster: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=142110436,2913459142&fm=26&gp=0.jpg'
            }
        ]
    },
    mutations: {
        changeCourse(state, {index, name, price}) {
            state.courseList[index].name = name;
            state.courseList[index].price = price;
        }
    },
}