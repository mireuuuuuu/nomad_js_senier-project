const quotes = [
    {
        quote:"20대에 당신의 얼굴은 자연이 준 것이지만, 50대의 당신의 얼굴은 스스로 가치를 만들어야 한다.",
        author:"Gabriel Coco Chanel",
    },
    {
        quote:"젊음을 과소평가할 때 나이는 어리석고 부주의한 것이 되고만다.",
        author:"J. K. Rowling",
    },
    {
        quote:"허물이 있다면, 버리기를 두려워말라.",
        author:"공자",
    },
    {
        quote:"중요한 것은 학습을 중단하지 않고, 도전을 즐기고, 애매모호함을 받아들이는 것이다. 종국에는 확실한 해답은 없기 마련이다.",
        author:"Martina Horner",
    },
    {
        quote:"우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다.",
        author:"Walter Pater",
    },
    {
        quote:"어려운 직업에서 성공하려면 자신을 굳게 믿어야 한다. 이것이 탁월한 재능을 지닌 사람보다 재능은 평범하지만 강한 투지를 가진 사람이 훨씬 더 성공하는 이유다.",
        author:"Sophia Loren",
    },
    {
        quote:"에너지는 인생의 정수다. 여러분은 무엇을 원하는지, 그 목표에 도달하기 위해 무엇이 필요한 지 알고 그 목표에 집중하면서 에너지를 어떻게 사용할 지 매일 결정한다.",
        author:"Oprah Winfrey",
    },
    {
        quote:"뜻을 세운다는 것은 목표를 선택하고, 그 목표에 도달할 행동과정을 결정하고, 그 목표에 도달할 때까지 결정한 행동을 계속하는 것이다. 중요한 것은 행동이다.",
        author:"Michael Hanson",
    },
    {
        quote:"할 일이 아무것도 없는 것은 즐겁지 않다. 할 일이 많은 데 안 하고 있는 것이 즐거운 것이다.",
        author:"Mary Wilson Little",
    },
    {
        quote:"만일 내게 나무를 베기 위해 한 시간만 주어진다면, 우선 나는 도끼를 가는데 45분을 쓸 것이다.",
        author:"Abraham Lincoln",
    },
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:nth-child(2)");
const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
