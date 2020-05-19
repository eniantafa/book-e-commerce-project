import React, { Component }  from 'react';
import StickyFooter from 'react-sticky-footer';


export default class Footer extends Component {
   
    render() {
      return (
        <StickyFooter
        bottomThreshold={50}
        normalStyles={{
        backgroundColor: "#2a2a72",
        padding: "2rem"
        }}
        stickyStyles={{
        backgroundColor: "rgba(255,255,255,.8)",
        padding: "2rem"
        }}
    >
        ©2020 All Right Reserved - <a href="https://www.linkedin.com/in/eniantafa/">Enian Tafa, Software Engineer</a>
    </StickyFooter>
      );
    }
  }