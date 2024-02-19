import { useDispatch, useSelector } from "react-redux";
import CardSliders from "../components/CardSliders";
import { useEffect } from "react";
import { fetchTopRated } from "../rtx/store/top-rated";
import { fetchNowPlaying } from "../rtx/store/now-playing";
import { fetchPopular } from "../rtx/store/popular";
import { fetchUpcoming } from "../rtx/store/upcoming";

function Sliders() {
  const dispatch = useDispatch();

  const topRated = useSelector((state) => state.topRated);
  const nowplaying = useSelector((state) => state.nowplaying);
  const popular = useSelector((state) => state.popular);
  const upcoming = useSelector((state) => state.upcoming);

  useEffect(() => {
    dispatch(fetchTopRated());
    dispatch(fetchNowPlaying());
    dispatch(fetchUpcoming());
    dispatch(fetchPopular());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CardSliders title="Top Rated" data={topRated} />
      <CardSliders title="Now Playing" data={nowplaying} />
      <CardSliders title="Up Coming" data={upcoming} />
      <CardSliders title="Popular" data={popular} />
    </>
  );
}

export default Sliders;
