import { useEffect, useState } from "react";
import { IAlbum } from "../../models/IAlbum";
import { useRouter } from "next/router";

/* eslint-disable-next-line */
export function HomeContainer() {
  const router = useRouter();
  const [albums, setAlbums] = useState<IAlbum[]>();
  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const data = await resp.json();
        setAlbums(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const onClicked = (item: IAlbum) => {
    router.push(`/details/${item.id}`);
  };

  return (
    <div>
      <ul className="nav-ul">
        {albums?.map((item, index) => (
          <li onClick={() => onClicked(item)} key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeContainer;
