import React from 'react'
import Divider from '@material-ui/core/Divider';
import './LoginInformation.css'


const LoginInformation = () =>{
    return(
        <div>
            <h1
                className={'loginInfoHeader'}
            >
                Login & Contact Information
            </h1>
            <h3
                className={'viewAndEditInfoHeader'}
            >
                View and edit your information
            </h3>
            <div
                className={'infoEditParent'}
            >
                <div
                    className={'infoEditChildLeft'}
                >
                    <h2
                        className={'infoSubHeader'}
                    >
                        Login Information
                    </h2>
                    <Divider/>
                </div>
                <div
                    className={'infoEditChildRight'}
                >
                    <h2
                        className={'infoSubHeader'}
                    >
                        Contact Information
                    </h2>
                    <Divider/>
                    <br/>
                    <p
                        className={'contactInfoText'}
                    >
                        United States
                    </p>
                    <p
                        className={'contactInfoText'}
                    >
                        Name
                    </p>
                    <p
                        className={'contactInfoText'}
                    >
                        Address 1
                    </p>
                    <p
                        className={'contactInfoText'}
                    >
                        City, State, zip
                    </p>
                    <p
                        className={'contactInfoText'}
                    >
                        Phone
                    </p>
                    <p
                        className={'contactInfoText'}
                    >
                        Email
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginInformation