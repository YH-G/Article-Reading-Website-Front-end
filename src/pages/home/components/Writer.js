import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem, WriterInfo } from '../style';


class Writer extends PureComponent {
    render() {
        const {list} = this.props
        return (
            <WriterWrapper>
                <div>
                    <p className='recommend'>推荐作者</p>
                </div>
                {
                    list.map((item, index) => {
                        return (
                            <WriterItem key={index}>
                                <img className = "pic" src={item.get('imgUrl')} alt=""/>
                                <WriterInfo>
                                    <p className='follow'>关注</p>
                                    <p className='name'>{item.get('name')}</p>
                                    <p className='desc'>{item.get('desc')}</p>
                                    
                                </WriterInfo>
                            </WriterItem>
                        )
                    })
                }
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writer']) 
});

export default connect(mapState, null)(Writer);