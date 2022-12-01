import React from 'react';
import '../styles/Connect.css';
import ConnectCard from './ConnectCard';
import { Paper} from '@material-ui/core'



class Connect extends React.Component {
    render() {
        return (
            <div>
             <Paper className="recConnect">
                    <span className="rcHead">PEOPLE FROM YOUR COLLEGE, YOU MIGHT KNOW</span>
                    <div style={{overflow: 'auto'}}>
                        <ConnectCard
                            name="Kunal Rawat"
                            post="Google Step Intern 2020"
                            mutualConnects="164"
                        />
                    </div>
                </Paper>
               
        </div>
        )

    }
}

export default Connect;