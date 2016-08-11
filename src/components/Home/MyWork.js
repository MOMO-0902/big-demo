import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

class MyWork extends React.Component{
  render(){
    return(
      <div className="work-container">
        <Card className="card">
          <CardMedia
                overlay={<CardTitle title="我的摄影作品" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/friends.jpg?raw=true" />
          </CardMedia>
        </Card>

        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="我的PPT作品" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/ben2.jpg?raw=true" />
          </CardMedia>
        </Card>

        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="我的网站作品" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/timg1.jpg?raw=true" />
          </CardMedia>
        </Card>

        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="我的个人简历" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/kaihui.jpg?raw=true" />
          </CardMedia>
        </Card>

        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/girlben.jpg?raw=true" />
          </CardMedia>
        </Card>

        <Card className="card">
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src="https://github.com/MOMO-0902/big-demo/blob/master/src/source/sofaben.jpg?raw=true" />
          </CardMedia>
        </Card>
    </div>
    )

  }
}
export default MyWork;
