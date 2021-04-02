
import { Button } from './Button';

interface Props {
  selectedGenreId: number,
  genres: Array<any>,
  handleClickButton: Function
}

const SideBar = ({ genres, selectedGenreId, handleClickButton}: Props) => {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}

export default SideBar