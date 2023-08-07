// utility function to get all images and their thumbnails from a folder
const importAll = (r) => {
  return r
    .keys()
    .sort((a, b) => {
      const filenameA = a.split("/").pop();
      const filenameB = b.split("/").pop();
      return filenameA.localeCompare(filenameB);
    })
    .map((imagePath, index) => ({
      id: index + 1,
      image: r(imagePath).default,
      thumbnail: r(imagePath.replace(/(\.\w+$)/, "t$1")).default,
    }));
};

// require all images and thumbnails as an array, sorted by filename
const imagesAndThumbnails = importAll(
  require.context("./assets/images", false, /\.(png|jpe?g|svg)$/)
);

const App = () => {
  // ...

  const handleClick = (evt) => {
    const { target } = evt;
    setActiveImage(Number(target.id));
  };

  return (
    <Wrap>
      <Sidebar>
        <Thumbs>
          {imagesAndThumbnails.map(({ id, thumbnail }) => (
            <Image
              alt=""
              onClick={handleClick}
              src={thumbnail}
              id={id}
              key={id}
            />
          ))}
        </Thumbs>
      </Sidebar>
      <Content>
        {/* ... */}
        <Image
          src={imagesAndThumbnails[activeImage - 1].image}
          alt=""
          className="bigImg"
        />
      </Content>
    </Wrap>
  );
};

export default App;
