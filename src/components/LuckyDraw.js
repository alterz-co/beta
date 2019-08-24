import React, { Component } from 'react';
import Nav from './Nav';
import logo from '../logos/sponsor.png';

class LuckyDraw extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col s12 l12">
              <h2>
                <span role="img" aria-label="present" style={{ paddingLeft: 10, paddingRight: 10 }}>🎁</span>
                <span style={{ paddingLeft: 10 }}>Lucky Draw</span>
              </h2>
            </div>
          </div>
          <div className="row" style={{ marginTop: 40 }}>
            <div className="col s12 l12">
              <h3 className="center-align">Wilson Lucky Draw Contest</h3>
              <div className="envelope"></div>
              <p className="center-align">Tap to open</p>
            </div>
          </div>
          <hr/>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col s12 l12">
              <h3 style={{ marginBottom: 40 }} >Sponsor</h3>
              <img alt="logo" className="col s12 m12 l12" src={logo} style={{ height: 80, width: 200 }}/>
              <p>
                【TELOON TENNIS SINGAPORE】managed by Rezylana LLP, is the only authorized agent and distributor
                for TELOON brand tennis products in both Singapore and Malaysia. TELOON was established in 1988
                and is one of the 28 tennis balls manufacturers worldwide approved by International Tennis Federation
                (ITF) and one of the 8 tennis balls brands approved by Tennis Australia. Publicly listed in the NEEQ
                (National Equities Exchange and Quotations) on 20 December 2017, TELOON is an official partner with WTA,
                CTA and STA. TELOON Pound and Green Dot tennis balls are Official Balls for Singapore Tennis Association
                (STA) Tournaments and Singapore National Games. TELOON Pound is also the only official ball in ITF Pro
                Circuit Singapore 2018, ITF World Tennis Tour 2019 and Davis Cup Singapore 2019.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LuckyDraw;
