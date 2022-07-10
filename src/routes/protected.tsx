import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { ChatPage } from '../pages/chat';
import { ProfilePage } from '../pages/profile';

export const ProtectedPage:React.FC =()=>{
    const {path} = useRouteMatch()
   
   
    
    return(
        <Switch>
            <Route exact path={path} component={ChatPage} />
            <Route exact path={`${path}/profile`} component={ProfilePage} />
        </Switch>
    )
}