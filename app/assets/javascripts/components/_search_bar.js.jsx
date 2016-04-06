var SearchBar = React.createClass({
  handleChange() {
    this.props.onFiltering(this.refs.filterSkillsInput.value)
  },

  render() {
    return (
      <div>
        <input type="search" ref="filterSkillsInput" placeholder='Find Skill By Name' onChange={this.handleChange} />
      </div>
    )
  }
});
