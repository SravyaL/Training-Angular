import React, {Component} from 'react';
import './Footer.css';
class Footer extends Component{
    render(){

     // var h4Style = {
       // text-align:center;
     // };
        return(
            <footer>
                <hr />
                <h4 className="footer-line"/*style={h4Style}*/>
                    &copy; All Rights Reserved- 2018
                    </h4>
                </footer>
        );
    }
}

export default Footer;