// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

var my_news = [
  {
    author: 'Гость 1',
    text: 'Небольшой текст 1',
    bigText: 'Очень много текста 1 Очень много текста 1 Очень много текста 1'
  },
  {
    author: 'Гость 2',
    text: 'Небольшой текст 2',
    bigText: 'Очень много текста 2 Очень много текста 2 Очень много текста 2 Очень много текста 2 Очень много текста 2'
  },
  {
    author: 'Гость 3',
    text: 'Небольшой текст 3',
    bigText: 'Очень много текста 3 Очень много текста 3 Очень много текста 3 Очень много текста 3 Очень много текста 3 Очень много текста 3 Очень много текста 3 Очень много текста 3 Очень много текста 3 Очень много текста 3'
  }
];

class Article extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
      };
      this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
      this.state = {
          visible: true,
      };
    }

  render() {
    var author = this.props.latest_news.author,
        text = this.props.latest_news.text,
        bigText = this.props.latest_news.bigText,
        visible = this.state.visible;

    return (
      <div className = 'article'>
        <p className = 'news__author'>{author}:</p>
        <p className = 'news__text'>{text}</p>

        {/* для ссылки readmore: не показывай ссылку, если visible === true */}
        <a href="#" onClick={this.handleClick} className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>

        {/* для большого текста: не показывай текст, если visible === false */}
        <p className = {'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
      </div>
    )
  }
}

class News extends React.Component {
  render() {
    var latest_news = this.props.latest_news;
    var newsTemplate;

    if (latest_news && latest_news.length > 0) {
        newsTemplate = latest_news.map(function(item, index) {
            return (
                <div key={index}>
                    <Article latest_news={item} />
                </div>
            )
        })
    } else {
        newsTemplate = <p>К сожалению новостей нет</p>
    }

    return (
      <div className = 'news'>
        {newsTemplate}
        <strong className = {'news__count ' + (latest_news && latest_news.length > 0 ? '':'none')}>Всего новостей: {latest_news && latest_news.length}</strong>
     </div>
    );
  }
}

News.propTypes = {
  latest_news: PropTypes.array.isRequired,
};


class App extends React.Component {
  render() {
    return (
      <div className = 'app'>
        <h3>Новости</h3>
        <News latest_news={my_news} />  {/*в <> должно быть latest_news={my_news}*/}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
