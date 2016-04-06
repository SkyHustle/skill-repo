var AllSkills = React.createClass({
  getInitialState() {
    return { filteredSkills: undefined }
  },

  handleDelete(id) {
    this.props.handleDelete(id)
  },

  onUpdate(skill) {
    this.props.handleUpdate(skill);
  },

  onFiltering(searchBarInput) {

    var filteredSkills = this.props.skills.filter((skill) => {
      return skill.name.toLowerCase().indexOf(searchBarInput.toLowerCase()) > -1
    });

    this.setState({ filteredSkills: filteredSkills });
  },

  render() {

    var allSkills = (this.state.filteredSkills || this.props.skills);
    console.log(this.props, this.state)

    var skills = allSkills.map((skill) => {
      return (
        <div key={skill.id}>
          <Skill skill={skill}
               handleDelete={this.handleDelete.bind(this, skill.id)}
               handleUpdate={this.onUpdate} />
        </div>
      )
    });

    return(
      <div>
        <SearchBar onFiltering={this.onFiltering} />
        {skills}
      </div>
    )
  }
});
