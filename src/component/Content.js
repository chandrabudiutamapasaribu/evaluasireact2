import React from 'react'
import {data} from '../Data2'
import KeHome from './HomeProp.js'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {  
          dataku:[]
        };
      }
      componentDidMount() {
        
        const id = this.props.match.params.id
        const filtered = data.filter(datas => datas.id == id) 
        this.setState({
          dataku : filtered
        })
      }
    
      render() {
          const postlist = this.state.dataku.length ? (
              this.state.dataku.map(el => {
                  return (
                      <div key={el.id}>
                      <h4>{el.title}</h4>
                      <div style={{display:'flex',width:'100%'}}>
                      <p className='grey-text' style={{width:'20%'}}>Author : {el.author}</p>
                      <p className='grey-text' style={{width:'50%'}}>Publish Date : {el.pubDate}</p>
                      </div>
                      <img src={el.thumbnail} style={{minWidth:'75%' ,display:'flex',margin:'0 auto'}} />
                      </div>
                  )
              })
          ): (
              // <h4>tunggu sebentar</h4>
              <KeHome />
          )
        return (
    
          
          <div className='container'>
          {postlist}
          </div>
        );
      }
      
    }
      
export default Home;