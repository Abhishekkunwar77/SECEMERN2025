const Gallery = (sece) => {
  return (
    <div>
      <h2>Welcome to {sece.page} page</h2>
      <img src="logo.png" alt="" />
      <h3>The image is {sece.img}</h3>
    </div>
  );
};
export default Gallery;