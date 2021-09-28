import {  InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from './featured.scss'

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>
                        {type === "movie" ? "Movies" : "Series"}
                    </span>
                    <select name="genre" id="genre">
                        <option>
                            Genre
                        </option>
                    </select>
                </div>
            )}
            <img 
             
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="featured"  
            />
            <div className="info">
                <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYLaue0-NxlC-jOdl0Qgbf8Y4noc_GcnbwhtPtLTIoFTw8FUG1ozagD6NGm7gPi-_dBmTUUF9lIxeamyfezi4AgbHNVMTpwAUmC-.png?r=31e" alt="" />
                <span className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, consectetur! Id voluptates facere eius expedita dignissimos magni dolore aliquam placeat error sit iure, mollitia dicta natus illo asperiores fuga officia!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
