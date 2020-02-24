import React from 'react';
import { data } from '../Data2';
import '../layout/Home.css';
import { Link } from 'react-router-dom';
import HomeProp from './HomeProp';
import '../layout/Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataku: []
        };
    }
    componentDidMount() {
        this.setState({
            dataku: data
        })
    }
    handlerClick =(id) => {
            this.props.history.push(`/home/${id}`)
    }
    render() {

        // const { dataku } = this.state;
     
                return (
                    <div>
                        {this.state.dataku.map((param,index) => {
                            return (
                             <div className='container'>
                             <div className='post card'>
                             <div className='card-content flex'>
                                    <img src={param.thumbnail} />
                                    <HomeProp data ={param.title} handlerClick={()=>this.handlerClick(param.id)}/>
                             </div>

                             </div>
                             
                             </div>  
                             )
                            })}
                            </div>
                            
                            );
                        }
                    }
                    
                    export default Home;
                    // <HomeProp data ={param.autho} handlerClick={()=>this.handlerClick(param.id)}/>