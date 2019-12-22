import React, { Component } from 'react';
import Header from "./HeaderComponent";
import Directory from './DirectoryComponent';
import {CAMPSITES} from '../shared/campsites';
import {COMMENTS} from '../shared/comments';
import {PARTNERS} from '../shared/partners';
import {PROMOTIONS} from '../shared/promotions';
import Footer from "./FooterComponent";
import Home from './HomeComponent';
import Contact from "./ContactComponent";

import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            campsites: CAMPSITES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

  render(){
      const HomePage = () => {
          return(
            <Home 
                campsite={this.state.campsites.filter(campsite=>campsite.featured)[0]}
                promotion={this.state.campsites.filter(promotion=>promotion.featured)[0]}
                partner={this.state.campsites.filter(partner=>partner.featured)[0]}
            />
          );
      }
      return (
          <div>
              <Header/>
              <Switch>
                  <Route path="/home" component={HomePage}/>
                  <Route exact path="/directory" render={()=> <Directory campsites={this.state.campsites}/>}/>
                  <Route exact path="/contactus" component={Contact}/>
                  <Redirect to="/home"/>
              </Switch>
              <Footer/>
          </div>
      );
    }
}

export default Main;
