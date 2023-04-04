import { TAGS, BODYELEMENT } from "./Enums/index";

export const articleData = [
    {
        id: 1,
        title: "Articolo 1 ",
        description: "lorem ipsum",
        image: "../images/th.jpg",
        tag: TAGS.TAG1,

        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "I have not failed. I've just found 10,000 ways that won't work.",
                author: "Thomas A. Edison"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/0.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Vivamus auctor ex vitae metus fermentum, non bibendum mi consequat. Aliquam non est non risus tristique varius ac sit amet nulla. "
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/11.jpg"
            },
        ]
    },
    {
        id: 2,
        title: "Articolo 2",
        description: "sed id faciam",
        image: "../images/images.jpg",
        tag: TAGS.TAG2,

        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "The best way to predict the future is to invent it.",
                author: "Alan Kay"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/1.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere turpis in risus consectetur luctus. Duis ac lobortis sapien. "
            }
        ]
    },
    {
        id: 3,
        title: "Articolo 3",
        description: "iniquit",
        image: "../images/cardarticle.jpg",
        tag: TAGS.TAG3,

        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "If you can't explain it simply, you don't understand it well enough.",
                author: "Albert Einstein"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/2.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Maecenas tincidunt eros a nisl iaculis sagittis. Aliquam sed diam ut nibh consectetur efficitur eu ut augue. "
            }
        ]
    },
    {
        id: 4,
        title: "Articolo 4 ",
        description: "lorem ipsum",
        image: "../images/pompa-idraulica_NG1.jpg",
        tag: TAGS.TAG1,

        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "The only true wisdom is in knowing you know nothing.",
                author: "Socrates"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/3.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Donec malesuada nisi nec sagittis maximus. Nulla facilisi. Nullam id urna id augue efficitur luctus in vel mi. "
            }
        ]
    },
    {
        id: 5,
        title: "Articolo 5",
        description: "sed id faciam",
        image: "../images/images.jpg",
        tag: TAGS.TAG4,

        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "Believe you can and you're halfway there.",
                author: "Theodore Roosevelt"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/4.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Nam in fringilla augue, eget pharetra odio. Curabitur vel placerat nisi, a ullamcorper mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; "
            }
        ]
    },
    {
        id: 6,
        title: "Articolo 6",
        description: "iniquit",
        image: "../images/po.gif",
        tag: TAGS.TAG1,

        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "It does not matter how slowly you go as long as you do not stop.",
                author: "Confucius"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/5.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Pellentesque mollis lectus sed ipsum suscipit congue. Nam varius libero quis ante feugiat tincidunt. "
            }
        ]
    },
    {
        id: 7,
        title: "Articolo 7 ",
        description: "d",
        image: "../images/c.png",
        tag: TAGS.TAG4,

        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
                author: "Winston Churchill"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/6.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Sed tincidunt urna vel tortor bibendum aliquam. Nullafacilisi. Integer maximus malesuada nisl, vel hendrerit mi ullamcorper eu. "
            }
        ]
    },
    {
        id: 8,
        title: "Articolo 8",
        description: "b",
        image: "../images/images.jpg",
        tag: TAGS.TAG2,

        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "Happiness is not something ready-made. It comes from your own actions.",
                author: "Dalai Lama"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/7.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Suspendisse a risus elit. Sed suscipit arcu eu ex venenatis, non tempus mauris dictum. Sed sollicitudin eros sit amet magna malesuada ultrices. "
            }
        ]
    },
    {
        id: 9,
        title: "Articolo 9",
        description: "c",
        image: "../images/cardarticle.jpg",
        tag: TAGS.TAG1,
        body: [
            {
                type: BODYELEMENT.QUOTE,
                textValue: "You miss 100% of the shots you don't take.",
                author: "Wayne Gretzky"
            },
            {
                type: BODYELEMENT.IMAGE,
                src: "../images/8.jpg"
            },
            {
                type: BODYELEMENT.PARAGRAPH,
                textValue: "Morbi commodo sapien vel nunc rutrum, ac commodo arcu pretium. Sed commodo venenatis enim, a auctor sapien facilisis ut. "
            }
        ]
    },
];

export const CommentData = [
    {
        name: "Maria",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Giovanni",
        comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
    },
    {
        name: "Paolo",
        comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Luisa",
        comment: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Marco",
        comment: "Maecenas aliquet tortor eget ligula ullamcorper, eget lobortis purus tincidunt."
    },
];



