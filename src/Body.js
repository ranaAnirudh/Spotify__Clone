// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
// import React from 'react'
// import "./Body.css"
// import { useDataLayerValue } from './DataLayer'
// import Header from './Header'
// import SongRow from './SongRow'
// function Body({spotify}) {
//     const [{discover_weekly},dispatch]=useDataLayerValue()
//     return (
//         <div className="body">
//             <Header spotify={spotify}/>
//             <div className="body_info">
//                 <img
//                     src={discover_weekly?.images[0].url}
//                     alt=""
//                 />
//                 <div className="body_infotext">
//                     <strong>PLAYLIST</strong>
//                     <h1>Discover Weekly</h1>
//                     <p>{discover_weekly?.description}</p>
//                 </div>
//             </div>
//             <div className="body_songs">
//                 <div className="body_icons">
//                     <PlayCircleFilledIcon className="body_shuffle"/>
//                     <FavoriteIcon fontSize="large"/>
//                     <MoreHorizIcon/>
//                 </div>
//                 {/* lists of songs */}
//                 {discover_weekly?.tracks.items.map(item =>{
//                     <SongRow track={item.track}/>
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Body
var arr1=[2 4 5 2 7 3 6 8]
var arr2=[ 4 6 3 6 8 3 6 6 3]
console.log(arr1.filter((x)=>arr2.indexof(x)===-1))
