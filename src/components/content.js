import React, {useState} from 'react';
import Backimg from './helpback.jpeg';

export default function Content() {

    const [chat, setChat] = useState(false);
    const [social, setSocial] = useState(false);
    const [squery, setSquery] = useState(false);

  return (
    <div className='main-body'>
        <img className='backimg' alt='' src={Backimg}/>
        <div className='container'>
            <div className='head'>
                <div className='head-cont'>
                    <h1>Hello, how can we help you?</h1>
                    <span>Find Travel guide, FAQ, chat,</span>
                </div>
            </div>
            <div className='body'>
                <div className='row'>
                    <div className='col-xl-6 col-md-12 col-md-12 col-sm-12'>
                        <div className='card'>
                            <div className='card-con'>
                            <i className='card-icon fa-regular fa-circle-question'></i>
                            <div className='flex-grow-1'>
                                <h4>FAQ</h4>
                                <span>Lorem ipsum doolor sit amaet</span>
                            </div>
                            <i class="fa-solid fa-up-right-from-square topcard"></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6 col-md-12 col-md-12 col-sm-12'>
                        <div className='card'>
                        <div className='card-con'>
                            <i className='card-icon fa fa-location-dot'></i>
                            <div className='flex-grow-1'>
                            <h4>Travel Guide</h4>
                                <span>Lorem ipsum doolor sit amaet</span>
                            </div>
                            <i className="fa-solid fa-up-right-from-square topcard"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='col-xl-12'>
                    <div className='card'>
                       <div className='card-con'>
                       <img alt='chatimg' className='cardlow' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/OOjs_UI_icon_ongoingConversation-ltr-destructive.svg/2048px-OOjs_UI_icon_ongoingConversation-ltr-destructive.svg.png'/>
                        <div className='flex-grow-1'>
                            <h4>Chat</h4>
                            <span>Lorem ipsum doolor sit amaet</span>
                        </div>
                        {chat?<i class="fa-solid fa-chevron-up" onClick={()=>{
                            setChat(false)
                        }}></i>:<i class="fa-solid fa-chevron-down" onClick={()=>{
                            setChat(true)
                        }}></i>}
                       </div>
                      {chat? <div className='imgset'>
                            <img alt='chat' className='cardimg' src='https://www.freepnglogos.com/uploads/telegram-logo-png-0.png'/>
                            <img alt='chat' className='cardimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png'/>
                            <img alt='chat' className='cardimg' src='https://static.wixstatic.com/media/1f9c5d_b553ba0ec050464dbbd9bea215f10e94~mv2.png'/>
                       </div> : ''}
                    </div>
                </div>
                <div className='col-xl-12'>
                    <div className='card'>
                    <div className='card-con'>
                    <i className="card-icon fa-solid fa-people-line"></i>
                        <div className='flex-grow-1'>
                            <h4>Social</h4>
                            <span>Lorem ipsum doolor sit amaet</span>
                        </div>
                        {social?<i class="fa-solid fa-chevron-up" onClick={()=>{
                            setSocial(false)
                        }}></i>:<i class="fa-solid fa-chevron-down" onClick={()=>{
                            setSocial(true)
                        }}></i>}
                    </div>
                    {social? <div className='imgset'>
                            <img alt='chat' className='cardimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/640px-Facebook_Logo_%282019%29.png'/>
                            <img alt='chat' className='cardimg' src='http://pngedits.com/public/uploads/preview/glossy-instagram-logo-png-full-hd-116173623416wof63wplk.png'/>
                            <img alt='chat' className='cardimg' src='http://assets.stickpng.com/images/5a2fe3efcc45e43754640848.png'/>
                            <img alt='chat' className='cardimg' src='https://i.pinimg.com/originals/ce/09/3c/ce093c7214ad357bb665cfd2f66a8b6b.png'/>
                       </div> : ''}
                    </div>
                </div>
                <div className='col-xl-12'>
                    <div className='card'>
                        <div className='card-con'>
                        <i className="card-icon fa-solid fa-envelope-open-text"></i>
                            <div className='flex-grow-1'>
                                <h4>Send Query</h4>
                                <span>Lorem ipsum doolor sit amaet</span>
                            </div>
                            {squery?<i class="fa-solid fa-chevron-up" onClick={()=>{
                                setSquery(false)
                            }}></i>:<i class="fa-solid fa-chevron-down" onClick={()=>{
                                setSquery(true)
                            }}></i>}
                        </div>
                        {
                            squery?
                            <div>
                                <form className='row'>
                                    <div className="mb-3 col-xl-6 col-md-12">
                                        <label for="exampleInputEmail1" className=" form-label">Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    </div>
                                    <div className="mb-3 col-xl-6 col-md-12">
                                        <label for="exampleInputEmail1" className=" form-label">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        </div>
                                    <div className="mb-3 col-xl-6 col-md-12">
                                        <label for="exampleInputPassword1" className=" form-label">Subject</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-3 col-xl-6 col-md-12">
                                        <label for="exampleInputPassword1" className=" form-label">Order no</label>
                                        <input type="text" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    <div className="mb-3 col-xl-12 col-md-12">
                                        <label for="exampleInputPassword1" className=" form-label">Your query</label>
                                        <input type="textarea" class="form-control" id="exampleInputPassword1"/>
                                    </div>
                                    
                                    <button  type="submit" class="mt-3 btn btn-danger">Submit</button>
                                </form>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
