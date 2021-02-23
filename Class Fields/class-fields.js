class PlayerInput extends Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onSubmit: PropTypes.func.isRequired,
    }
    static defaultProps = {
      label: 'Username'
    }
    state = {
      username: ''
    }
    handleChange = (event) => {
      this.setState({
        username: event.target.value
      })
    }
    render() {
      
    }
  }

  /* class PlayerInput extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: ''
      }
  
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
      this.setState({
        username: event.target.value
      })
    }
    render() {
      ...
    }
  }
  
  PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  
  PlayerInput.defaultProps = {
    label: 'Username',
  } */