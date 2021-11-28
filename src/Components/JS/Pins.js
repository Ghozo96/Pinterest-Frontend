import React, { Component } from 'react';
import SmallPin from './SmallPin';
import AddButton from './AddButton';

class Pins extends React.Component {

    render() { 
        return (
            <div>
            <AddButton />
            <div className=' d-flex flex-wrap '>
                <div id='col1' className=' d-flex flex-wrap align-items-center flex-column flex-grow-1' style={{flexBasis:'25%'}}>
                    <SmallPin imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg' title='Img 1'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg' title='Img 2'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg' title='Img 7'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg' title='Img 8'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg' title='Img 7'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg' title='Img 8'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg' title='Img 1'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg' title='Img 2'/> 
                </div>
                <div id='col2' className=' d-flex flex-wrap align-items-center flex-column flex-grow-1' style={{flexBasis:'25%'}}>
                    <SmallPin imgLink='https://i.pinimg.com/736x/32/04/1e/32041ef647dfcb284f584eac2ed843bb.jpg' title='Img 3'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/48/e5/a4/48e5a4f9122e6d33fa59cfedbdfc3173.jpg' title='Img 4'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg' title='Img 1'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg' title='Img 2'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg' title='Img 7'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg' title='Img 8'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg' title='Img 1'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg' title='Img 2'/> 
                </div>
                <div id='col3' className=' d-flex flex-wrap align-items-center flex-column flex-grow-1' style={{flexBasis:'25%'}}>
                    <SmallPin imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg' title='Img 5'/>
                    <SmallPin imgLink='https://i.pinimg.com/736x/f2/55/f7/f255f719efac56e965688b0e814d20cf.jpg' title='Img 6'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg' title='Img 7'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg' title='Img 8'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg' title='Img 1'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg' title='Img 2'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg' title='Img 7'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg' title='Img 8'/>
                </div>
                <div id='col4' className=' d-flex flex-wrap align-items-center flex-column flex-grow-1' style={{flexBasis:'25%'}}>
                    <SmallPin imgLink='https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg' title='Img 7'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg' title='Img 8'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg' title='Img 1'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg' title='Img 2'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg' title='Img 5'/>
                    <SmallPin imgLink='https://i.pinimg.com/736x/f2/55/f7/f255f719efac56e965688b0e814d20cf.jpg' title='Img 6'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg' title='Img 7'/>
                    <SmallPin imgLink='https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg' title='Img 8'/>  
                </div>       
            </div>
            </div>
            
            )
            ;
    }
}
 
export default Pins;