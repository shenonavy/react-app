import { useEffect, useState } from "react";
import { IPhoto } from "../../models/IPhoto";
import { useRouter } from "next/router";

/* eslint-disable-next-line */
export function DetailsContainer() {
  const router = useRouter();

  const [photos, setPhotos] = useState<IPhoto[]>();

  const [selectedAlbum, setSelectedAlbum] = useState<IPhoto | null>();

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const data = await resp.json();
        if (data.length > 0) {
          const getByAlbumId = data.filter(
            (x: any) => x.albumId.toString() === router.query.id
          );
          setPhotos(getByAlbumId);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [router.query.id]);

  const selectImage = (item: IPhoto) => {
    setSelectedAlbum(item);
  };

  return (
    <div className="p-5">
      <h1>Album {router.query.id}</h1>
      <div className="row">
        <div className="col-sm selection">
          {photos?.map((item, index) => (
            <img
              key={index}
              onClick={() => selectImage(item)}
              className={selectedAlbum?.id === item.id ? "selected p-2" : "p-2"}
              src={item.thumbnailUrl}
              alt={item.title}
            />
          ))}
        </div>
        <div className="col-4">
          {selectedAlbum && (
            <div>
              <img src={selectedAlbum.url} alt={selectedAlbum.title} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailsContainer;
