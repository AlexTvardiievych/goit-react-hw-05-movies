import React from "react";

function CastList({ casts }) {
  return (
    <>
      {casts.map((cast) => (
        <li key={cast.cast_id}>
          {cast.profile_path !== null ?
            <img
              alt="Actor"
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
            /> :
            <img
              alt="Can`t find"
              src='https://us.123rf.com/450wm/panyanon/panyanon1111/panyanon111100055/11328507-no-photo-camera-shiny-sign.jpg?ver=6'
            />
          }

          <p>{cast.name}</p>
          <p>Character: {cast.character}</p>
        </li>
      ))}
    </>
  );
}

export default CastList;
