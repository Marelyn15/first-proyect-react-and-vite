import { useState } from "react";
//Hooks
import { useFetch } from "../../utils/hooks/useFetch";
//Components
import { SearchBar } from "../../components/SearchBar";
//Link
import { Link } from "react-router-dom";
//Icons
import { MdMoreTime } from "react-icons/md";
import { TbListSearch } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
//css
import "../../styles/cards.css";
import "../../styles/options.css";

function Post() {
  const { data, isLoading } = useFetch("http://localhost:3000/posts");

  const [searchTerm, setSearchTerm] = useState("");

  //Search - ajustando entrada
  const getTitles = () => {
    return data.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  };

  //RETURN
  return (
    <div>
      <div className="options">
        <h1>
          <TbListSearch />
          Posts
        </h1>
      </div>

      {/*SearchBar */}
      <SearchBar onSearch={(value) => setSearchTerm(value)} />

      {/*Logica de cartas y nombres */}
      {!isLoading ? (
        <ul>
          {getTitles().map((post) => {
            return (
              <div className="card">
                <p key={post.id}>
                  <span className="title">
                    <Link to={`posts/${post.id}`}>
                      <RiNewspaperLine /> {post.title}
                    </Link>
                  </span>
                </p>
              </div>
            );
          })}
        </ul>
      ) : (
        <h3>
          <MdMoreTime />
          Cargando...
        </h3>
      )}
    </div>
  );
}

export default Post;
