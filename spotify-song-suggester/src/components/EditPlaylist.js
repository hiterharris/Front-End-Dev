import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import NewSongForm from "../components/NewSongForm";
import Table from "../components/Table";
import EditSongForm from "../components/EditSongForm";
import axios from 'axios'
// Dummy data


function EditPlayList() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get('https://lambda-spotify-song-suggester.herokuapp.com/api/songs')
    .then(response => {
        setSongs(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);
  // const findSong = () => {
  //   axios.get('')
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }
  const songList = songs.map((song, i) => {
    return (
        <div className='jams' key={i}>
            <h2>{song.track_name}</h2>
            <p>{song.artist_name}</p>
            {/* <div classname='button1'> */}
            <button onClick={() => console.log(song.track_id)}>Find Similar Songs</button>
            <button>Add to Favorites</button>
            {/* </div> */}
        </div>
    )
  });
  return (
    <div className="SongsButton">
      {songList}
    </div>
  );
}
export default EditPlayList;


// function EditPlaylist() {
//   const songsData = [

//     {
//       id: 0,
//       artist: "The Beatles",
//       title: "A day In The Life"
//     },
//     {
//       id: 1,
//       artist: "Simon and Garfunkle",
//       title: "Mrs. Robinson"
//     },
//     {
//       id: 2,
//       artist: "Santana",
//       title: "Black Magic Woman"
//     },
//     {
//       id: 3,
//       artist: "John Lennon",
//       title: "Imagine"
//     },
//     {
//       id: 4,
//       artist: "Ray Charles",
//       title: "Georgia"
//     }
//   ];

//   const initialFormState = { id: null, artist: "", title: "" };

//   const [songs, setSongs] = useState(songsData);
//   const [editing, setEditing] = useState(false);
//   const [currentSong, setCurrentSong] = useState(initialFormState);

//   const addSong = song => {
//     song.id = Date.now();
//     setSongs([...songs, song]);
//   };
//   const removeSong = id => {
//     setSongs(songs.filter(song => song.id !== id));
//   };

//   const editRow = song => {
//     setEditing(!editing);
//     setCurrentSong({ id: song.id, artist: song.artist, title: song.title });
//   };

//   const updateSong = (id, updatedSong) => {
//     setEditing(false);
//     setSongs(songs.map(song => (song.id === id ? updatedSong : song)));
//   };

//   return (
//     <div className="playlist">
//       <h2>Editing Playlist</h2>
//       {editing ? (
//         <div>
//           <h2>Edit Song</h2>
//           <EditSongForm
//             editing={editing}
//             setEditing={setEditing}
//             currentSong={currentSong}
//             updateSong={updateSong}
//           />
//         </div>
//       ) : (
//         <div>
//           <h2>Add Songs</h2>
//           <NewSongForm addSong={addSong} />
//         </div>
//       )}

//       <h2>View Songs</h2>
//       <Table
//         songs={songs}
//         removeSong={removeSong}
//         editRow={editRow}
//       />
//     </div>
//   );
//       }

// export default EditPlaylist;