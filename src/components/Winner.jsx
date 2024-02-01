import Posts from "./Posts";

const images = [
    // links
    "/static/images/e_football.jpg",
    "/static/images/tabletennis.jpg",
    "/static/images/tabletennisw.jpg",
    "/static/images/pushup.jpg",
    "/static/images/wrestlingm.jpg",
    "/static/images/wrestlingf.jpg",
  ];

function Winner() {
    if (images.length === 0) return <h1 className="font-['calvera'] font-semibold text-lg mb-10">Will be updated soon!</h1>;
    else
    return (
        <>
        <Posts images={images} />
        
        </>
    )
}
export default Winner