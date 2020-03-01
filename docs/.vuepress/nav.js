module.exports = [
    {
        text: '首页', link: '/'
    },
    {
        text: '学习笔记',
        items: [
            {
                text:'JavaSE',
                items:[
                    {text: 'Java基础',link: '/notes/javase/'}
                ]
            },
            {
                text:'搜索相关',
                items:[
                    {text: 'Elasticsearch',link: '/notes/es/'}
                ]
            }
        ]
    },
    {
        text: 'Blog',link: '/blog/'
    },
    {
        text: '阅读',link: '/read/'
    },
    {
        text: '网站推荐',link: '/website-rec/'
    },
    {
        text: '面试宝典', link: '/baodian/',
        link: '/baodian/'
    },
    {
        text: '工具箱',
        items: [
			{
                text: '在线编辑',
				items: [
					{text: '图片压缩', link: 'https://tinypng.com/'}
				]
            },
			{
                text: '在线服务',
				items: [
					{text: '阿里云', link: 'https://www.aliyun.com/'},
					{text: '腾讯云', link: 'https://cloud.tencent.com/'}
				]
            },
			{
                text: '博客指南',
				items: [
					{text: '掘金', link: 'https://juejin.im/'},
					{text: 'CSDN', link: 'https://blog.csdn.net/'}
				]
            }
        ]
    }
]