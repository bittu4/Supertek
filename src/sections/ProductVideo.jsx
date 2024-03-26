const ProductVideo = () => {
  return (
    <div>
      <iframe
        className="w-full min-h-[500px]"
        src="https://youtube.com/embed/shorts/muICPjIsr2k?si=Ucw8ZD6BYl7klbwU?autoplay=1&controls=1"
        title="Demo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default ProductVideo;
