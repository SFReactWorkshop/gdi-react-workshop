var data = [
  {
      "author": "Michael Scott",
      "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
  },
  {
      "author": "Jeff Bezos",
      "text": "In the end, we are our choices."
  }
];

var Twitter = React.createClass({
  // loadTweetsFromServer: function () {
  //   // GET updated set of tweets from database
  //   $.get(this.props.url, function (data) {
  //       // Set state in step 3b of the exercise!
  //     }.bind(this)
  //   );
  // },
  // handleTweetSubmit: function (tweet) {
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, function (data) {
  //       this.setState({ data: data });
  //     }.bind(this)
  //   );
  // },
  // componentDidMount: function () {
  //   // Set this.state.data to most recent set of tweets from database
  //   this.loadTweetsFromServer();
  // },
  render: function () {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        {/* Render TweetForm component here */}
        {/* Render TweetList component here */}
      </div>
    );
  }
});

var TweetForm = React.createClass({
  render: function () {
    return (
      <form className="tweetForm">
        {/* Render some text here */}
      </form>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    return (
      <div className="tweetList">
        {/* Render some text here */}
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        {/* Render some text here */}
      </div>
    );
  }
});

React.render(
  <Twitter />,
  document.getElementById('tweets')
);
