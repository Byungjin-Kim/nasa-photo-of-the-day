import React from "react";

// const dummyData = {
//   date: "2022-12-21",
//   explanation: "Happy Solstice! Today is the December solstice, marking an astronomical beginning of summer in the southern hemisphere and winter in the north. On its yearly trek through planet Earth's skies, at this solstice the Sun reaches its southern most declination, 23.5 degrees south, at 21:48 UTC. About 4 days ago the Sun was near this seasonal southern limit and so only just above the horizon at local noon over Ostersund in central Sweden. This view looking over the far northern lakeside city finds the midday Sun with a beautiful solar ice halo. Naturally occurring atmospheric ice crystals can produce the tantalizing halo displays, refracting and reflecting the sunlight through their hexagonal geometry.  Still, with the Sun low and near the horizon in the clear sky, likely sources of the ice crystals producing this intense halo are snow cannons. Operating at a local ski area, the snowmaking machines create a visible plume at the top of the nearby island Froson toward the right side of the panorama.",
//   hdurl: "https://apod.nasa.gov/apod/image/2212/GS_20221217_Solhalo_Pan_v3.jpg",
//   title: "Sun Halo at Sixty-three Degrees North"
// }

const Nasaphoto = ({ photo }) => {
  return (
    <div className="Nasa-photo-wrapper">
      <h3>{photo.title}</h3>
      <p>{photo.date}</p>
      <img src={photo.hdurl} alt={photo.title || "NASA Astronomy Picture of the Day"} /> {/* alt 속성 추가 */}
      <p className="explanation">{photo.explanation}</p>
    </div>
  );
}

export default Nasaphoto;
