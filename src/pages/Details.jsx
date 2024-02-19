import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../rtx/store/details";
import { fetchMovieIframe } from "../rtx/store/videos-iframe";
import { fetchPhotos } from "../rtx/store/photos";
import { fetchCast } from "../rtx/store/cast";
import { fetchSimilar } from "../rtx/store/similar";

import Videosiframe from "../components/Videosiframe";
import Information from "../components/Information";
import Photos from "../components/Photos";
import Cast from "../components/Cast";
import CardSliders from "../components/CardSliders";

function Details() {
  const param = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const iframe = useSelector((state) => state.iframe);
  const photos = useSelector((state) => state.photos);
  const cast = useSelector((state) => state.cast);
  const similar = useSelector((state) => state.similar);

  const location = useLocation();
  useEffect(() => {
    dispatch(fetchDetails(param.id));
    dispatch(fetchMovieIframe(param.id));
    dispatch(fetchPhotos(param.id));
    dispatch(fetchCast(param.id));
    dispatch(fetchSimilar(param.id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Information details={details} />

      <Videosiframe iframe={iframe} />

      <Photos photos={photos} />

      <Cast cast={cast} />

      <CardSliders title={`More Like This`} data={similar} type="movie" />
    </>
  );
}

export default Details;
