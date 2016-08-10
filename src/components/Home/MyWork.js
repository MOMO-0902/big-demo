import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

class MyWork extends React.Component{
  render(){
    return(
      <div className="work-container">
        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/Se828bc42-658b-44f0-9074-8d27a12c81c7.jpg?raw=true" />
          </CardMedia>
        </Card>

        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/Se828bc42-658b-44f0-9074-8d27a12c81c7.jpg?raw=true" />
          </CardMedia>
        </Card>

        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/Se828bc42-658b-44f0-9074-8d27a12c81c7.jpg?raw=true" />
          </CardMedia>
        </Card>

        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/Se828bc42-658b-44f0-9074-8d27a12c81c7.jpg?raw=true" />
          </CardMedia>
        </Card>
    </div>
    )

  }
}
export default MyWork;
