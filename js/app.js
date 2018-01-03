// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

var my_news = [
  {
    author: 'Гость 1',
    text: 'Текст текст текст 1'
  },
  {
    author: 'Гость 2',
    text: 'Текст текст текст 2'
  },
  {
    author: 'Гость 3',
    text: 'Текст текст текст 3'
  }
];

class Article extends React.Component {
  render() {
    var author = this.props.latest_news.author,
        text = this.props.latest_news.text;

    return (
      <div class = 'article'>
        <p class = 'news__author'>{author}:</p>
        <p class = 'news__text'>{text}</p>
      </div>
    )
  }
}

import PropTypes from 'prop-types';

class News extends React.Component {
  render() {
    var latest_news = this.props.latest_news;
    var newsTemplate;

    if (latest_news.length > 0) {
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
      <div class = 'news'>
        {newsTemplate}
        <strong class = {'news__count ' + (latest_news.length > 0 ? '':'none')}>Всего новостей: {latest_news.length}</strong>
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
      <div class = 'app'>
        <h3>Новости</h3>
        <News  />  {/*в <> должно быть latest_news={my_news}*/}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
