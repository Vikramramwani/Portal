import React from 'react';
import '../styles/ConnectCard.css';
import { Button } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link';

class ConnectCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="connectCardContainer">
               <img src={require('../assests/banner.jpeg')} className="ccBannerImg" /> 
                <div className="ccAvatorContainer">
                    <img src={require('../assests/avatar.jpeg')} className="ccAvatarImg" />
                </div>
                <div className='ccDetailsContainer'>
                    <span className="ccMainName">{this.props.name}</span>
                    <br />
                    <span className="ccPost">{this.props.post}</span>
                    <div className="ccMutualDisplay">
                        <div><LinkIcon className="ccIcon" /></div>
                        <div>{this.props.mutualConnects} Mutual Connections</div>
                    </div>
                    <Button variant="outlined" color="secondary" style={{ width: '100%', margin: '4%' }}>Connect</Button>
                </div>
            </div>
        )
    }
}

export default ConnectCard;