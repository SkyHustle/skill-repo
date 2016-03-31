var Body = React.createClass({
  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  getInitialState() {
    return { skills: [] }
  },

  addSkill(skill){
    var newState = this.state.skills.concat(skill);
    this.setState({ skills: newState })
  },

  render() {
    return (
      <div>
        <NewSkill addSkill={this.addSkill} />
        <AllSkills skills={this.state.skills} />
      </div>
    )
  }
});
