
#post

List:
```
AllCards.push(
  <CardList index={this.state.posts[i].id}
            title={this.state.posts[i].title}
            date={this.state.posts[i].date}
            url={this.state.posts[i].name}
            key={Math.random()}
    />)
```

CardList:
```
handleClick(){
  this.context.router.push(`blog/${this.props.url}`);
}
render(){
  return(
      <div style={styles.root} onClick={this.handleClick.bind(this)}>
      )
}      
```
