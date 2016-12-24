var React = require('react');

const { PropTypes } = React;

const { string, number } = PropTypes;

var ErrorModal = React.createClass({
  propTypes: {
    title: PropTypes.oneOfType([ string, number]),
    message: string.isRequired
  },
  getDefaultProps: function () {
    return  {
      title: 'Error Details'
    };
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    var { title, message } = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">OK</button>
        </p>
      </div>
    )
  }
});


module.exports = ErrorModal;
